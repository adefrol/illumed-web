import { MarqqueeCard } from "@/components/marqquee-card";
import { technologies } from "@/lib/technologies";
import { HeaderSection } from "./_components/sections/main-section";
import { PriceSection } from "./_components/sections/price-section";
import { ServiceSection } from "./_components/sections/service-section";
import { ProjectSection } from "./_components/sections/project-section";

export default function Home() {
    return (
        <div className="">
            <HeaderSection />
            <ServiceSection />
            <ProjectSection />
            {/* <MarqqueeCard technologies={technologies} /> */}

            {/* <div className="mt-[200px]">
        <PriceSection />
      </div> */}
        </div>
    );
}
