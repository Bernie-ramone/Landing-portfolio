import { Navbar } from "./components/layout/Navbar";
import { About } from "./components/sections/About";
import { ContactCta } from "./components/sections/ContactCta";
import { FeaturedWork } from "./components/sections/FeaturedWork";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { SkillsExperience } from "./components/sections/SkillsExperience";
import { Testimonials } from "./components/sections/Testimonials";
import { Footer } from "./components/layout/Footer";

export function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <SkillsExperience />
        <FeaturedWork />
        <Testimonials />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
