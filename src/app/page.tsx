import { TopBar, Navbar } from "@/components/site/chrome";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { TrustBar, Story, VisionMission, Programmes } from "@/components/site/sections";
import { Campaign } from "@/components/site/campaign";
import { BuildJourney } from "@/components/site/build-journey";
import { Gallery, Values } from "@/components/site/gallery";
import { Leadership, Governance, GetInvolved } from "@/components/site/involved";
import { Contact } from "@/components/site/contact";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Story />
        <VisionMission />
        <Programmes />
        <Campaign />
        <BuildJourney />
        <Gallery />
        <Values />
        <Leadership />
        <Governance />
        <GetInvolved />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
