import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="max-w-[1500px] mx-auto w-full">
            <Header />
            <div className="mt-48">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
