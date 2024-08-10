import { Header } from "@/components/Header";
import { Footer } from "@/components/footer/footer";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Image
        draggable={"false"}
        src={"/planet.webp"}
        alt="planet"
        width={250}
        height={250}
        className="fixed -z-10 left-36 top-96"
      />
      <Image
        draggable={"false"}
        src={"/planet.webp"}
        alt="planet"
        width={250}
        height={250}
        className="fixed -z-10 right-36 top-44"
      />
      <Image
        draggable={"false"}
        src={"/stars.png"}
        alt="planet"
        width={1920}
        height={1080}
        className="fixed -z-10 top-1/2 left-1/2"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <Image
        draggable={"false"}
        src={"/grid.png"}
        alt="planet"
        width={1920}
        height={1080}
        className="fixed -z-10 top-1/2 left-1/2"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div className="max-2xl:max-w-[1500px] xl:max-w-[1300px] xl:px-0 px-10 lg:py-0 pt-10 mx-auto w-full">
        <Header />
        <div className="lg:my-48 my-20">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
