"use client";

import { IUser } from "@/interfaces/user.interface";
import { users } from "@/lib/users";
import { parseAsStringEnum, useQueryState } from "nuqs";
import { createContext, useContext, useState } from "react";

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

export const SwitchUserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<IUserState>(defaultState);

  const switchUser = (id: number) => {
    const newUser = users.find((user) => user.id === id);
    if (newUser) {
      setUser({
        user: newUser,
        switchUser: switchUser,
      });
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
