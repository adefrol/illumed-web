import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header";
import { url } from "inspector";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Image
                draggable={"false"}
                src={"/planet.webp"}
                alt="planet"
                width={300}
                height={300}
                className="fixed -z-10 left-36 top-96"
            />
            <Image
                draggable={"false"}
                src={"/planet.webp"}
                alt="planet"
                width={300}
                height={300}
                className="fixed -z-10 right-36 top-44"
            />
            <Image
                draggable={"false"}
                src={"/stars.png"}
                alt="planet"
                width={1920}
                height={1080}
                className="fixed -z-10 top-1/2 left-1/2"
                style={{transform: "translate(-50%, -50%)"}}
            />
            <Image
                draggable={"false"}
                src={"/grid.png"}
                alt="planet"
                width={1920}
                height={1080}
                className="fixed -z-10 top-1/2 left-1/2"
                style={{transform: "translate(-50%, -50%)"}}
            />
            <div className="max-w-[1500px] mx-auto w-full">
                <Header />
                <div className="mt-48">{children}</div>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
