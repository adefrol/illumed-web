import { Header } from '@/components/Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Header />
      <div className="mt-48">{children}</div>
    </div>
  );
};

export default Layout;
