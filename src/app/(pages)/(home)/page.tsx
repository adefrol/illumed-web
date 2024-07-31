import { AboutUsSection } from "./_components/sections/about-us-section";
import { MainSection } from "./_components/sections/main-section";
import { ProjectSection } from "./_components/sections/project-section";
import { ServiceSection } from "./_components/sections/service-section";

export default function Home() {
  return (
    <div className="">
      <MainSection />

      <div className="">
        <AboutUsSection />
      </div>

      <ServiceSection />

      <ProjectSection />
      {/* <MarqqueeCard technologies={technologies} /> */}

      {/* <div className="mt-[200px]">
        <PriceSection />
      </div> */}
    </div>
  );
}
