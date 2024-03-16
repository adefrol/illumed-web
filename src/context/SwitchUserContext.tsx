"use client";

import { IUser } from "@/interfaces/user.interface";
import { users } from "@/lib/users";
// import { users } from "@/lib/users";
import { parseAsStringEnum, useQueryState } from "nuqs";
import { createContext, useContext, useEffect, useState } from "react";

export interface IUserState {
  user: IUser | null;
  switchUser: (id: number) => void;
}

const defaultState = {
  user: users[0] || null,
  switchUser: (id: number) => {
    console.log("user not found");
  },
};

const SwitchUserContext = createContext<IUserState>(defaultState);

enum Users {
  aleksandr = "1",
  ivan = "2",
}

export const SwitchUserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<IUserState>(defaultState);
  const [userParams, setUserParams] = useQueryState(
    "user",
    parseAsStringEnum<Users>(Object.values(Users)).withDefault(Users.aleksandr)
  );

  useEffect(() => {
    const newUser = users.find((user) => user.id === Number(userParams));
    if (newUser) {
      setUser({
        user: newUser,
        switchUser: switchUser,
      });
    }
  }, [userParams]);

  const switchUser = (id: number) => {
    const newUser = users.find((user) => user.id === id);
    if (newUser) {
      setUser({
        user: newUser,
        switchUser: switchUser,
      });

      // @ts-expect-error undefined types
      setUserParams(newUser.id.toString());
    }
  };

  return (
    <SwitchUserContext.Provider value={{ switchUser, user: user.user }}>
      {children}
    </SwitchUserContext.Provider>
  );
};

export const useSwitchUser = () => {
  const context = useContext(SwitchUserContext);

  if (!context) {
    throw new Error("useSwitchUser must be used within a SwitchUserContext");
  }

  return context;
};
