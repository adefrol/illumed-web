import { NextPage } from "next";
import { Content } from "./_components/Content";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navbar } from "@/constants/navbar";

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
