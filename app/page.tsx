import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProcessSection } from "@/components/process-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { ContactForm } from "@/components/contact-form";
import { FaqSection } from "@/components/faq-section";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProcessSection />
      <ServicesSection />
      <AboutSection />
      <ContactForm />
      <CtaBanner />
      <FaqSection />
      <Footer />
    </main>
  );
}
