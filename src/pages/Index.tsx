import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Benefits } from "@/components/Benefits";
import { VideoSection } from "@/components/VideoSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Navigation } from "@/components/Navigation";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <section id="features">
        <Features />
      </section>
      <section id="video">
        <VideoSection />
      </section>
      <section id="benefits">
        <Benefits />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;