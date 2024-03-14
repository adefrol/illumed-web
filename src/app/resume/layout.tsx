import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Резюме",
  description: "Резюме",
  openGraph: {
    title: "Резюме",
    description: "Резюме",
  },
  twitter: {
    title: "Резюме",
    description: "Резюме",
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="">{children}</div>;
};

export default Layout;
