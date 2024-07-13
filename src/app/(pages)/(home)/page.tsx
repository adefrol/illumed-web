import { MarqqueeCard } from "@/components/marqquee-card";
import { technologies } from "@/lib/technologies";
import { HeaderSection } from "./_components/sections/main-section";
import { PriceSection } from "./_components/sections/price-section";

export default function Home() {
  return (
    <div className="">
      <HeaderSection />

      {/* <MarqqueeCard technologies={technologies} /> */}

      {/* <div className="mt-[200px]">
        <PriceSection />
      </div> */}
    </div>
  );
}
