import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Проекты",
  description: "Проекты",
  openGraph: {
    title: "Проекты",
    description: "Проекты",
  },
  twitter: {
    title: "Проекты",
    description: "Проекты",
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="">{children}</div>;
};

export default Layout;
