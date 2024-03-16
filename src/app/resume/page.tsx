import { NextPage } from "next";
import { Content } from "../../pageComponents/resume/Content";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navbar } from "@/constants/navbar";
import { Suspense } from "react";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <>
      <FloatingNav navItems={navbar} />

      <Content />
    </>
  );
};

export default Page;
