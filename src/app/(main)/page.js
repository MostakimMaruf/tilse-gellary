import Banner from "@/components/home/banner/banner";
import FeaturedTiles from "@/components/home/featuresTiles/FeaturesTiles";
import MarqueeBar from "@/components/home/marqueee/marqueeBar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
        <Banner />
        <MarqueeBar/>
        <FeaturedTiles/>
    </main>
  );
}
