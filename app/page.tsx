import { HeroMobileCTAs } from "@/components/HeroMobileCTAs";
import { ScrollHeroVideo } from "@/components/ScrollHeroVideo";
import { AboutSection } from "@/components/sections/AboutSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { LocationSection } from "@/components/sections/LocationSection";
import { RollingReviewsSection } from "@/components/sections/RollingReviewsSection";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { SiteNav } from "@/components/sections/SiteNav";

export default function Home() {
  return (
    <>
      <a href="#about" className="skip-link">
        Skip to content
      </a>

      <ScrollHeroVideo />
      <HeroMobileCTAs />
      <SiteNav />

      <AboutSection />
      <GallerySection />
      <LocationSection />
      <RollingReviewsSection />
      <SiteFooter />
    </>
  );
}
