import { AboutUsSection } from "./_components/sections/about-us-section";
import { MainSection } from "./_components/sections/main-section";
import { ProjectSection } from "./_components/sections/project-section";
import { ServiceSection } from "./_components/sections/service-section";

export default function Home() {
  return (
    <div className="">
      <MainSection />

      <div id="about" className="">
        <AboutUsSection />
      </div>

      <div id="services" className="max-2xl:mt-0 lg:mt-40">
        <ServiceSection />
      </div>

      <div id="projects" className="max-2xl:mt-0 lg:mt-80">
        <ProjectSection />
      </div>
    </div>
  );
}
