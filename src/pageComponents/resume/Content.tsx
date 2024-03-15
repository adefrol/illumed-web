"use client";

import { useSwitchUser } from "@/context/SwitchUserContext";
import { parseAsStringEnum, useQueryState } from "nuqs";
import { FC } from "react";
import CustomLayout from "./CustomLayout";
import { Development } from "./content/Development";
import { Education } from "./content/Education";
import { Experience } from "./content/Experience";

interface IContentProps {
  id: number;
  content: JSX.Element;
}

enum Blogs {
  EXPERIENCE = "1",
  EDUCATION = "2",
  DEVELOPMENT = "3",
}

export const Content: FC = () => {
  const { user } = useSwitchUser();
  const [searchParams, setSearchParams] = useQueryState(
    "blog",
    parseAsStringEnum<Blogs>(Object.values(Blogs)).withDefault(Blogs.EXPERIENCE)
  );

  const content: IContentProps[] = [
    {
      id: 1,
      content: <Experience user={user!} />,
    },

    {
      id: 2,
      content: <Education user={user!} />,
    },

    {
      id: 3,
      content: <Development user={user!} />,
    },
  ];

  return (
    <CustomLayout focus={searchParams} setFocus={setSearchParams}>
      {content[Number(searchParams) - 1].content}
    </CustomLayout>
  );
};
