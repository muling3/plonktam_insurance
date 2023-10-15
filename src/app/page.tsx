import AboutUs from "@/components/AboutUs";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="relative">
        <Navbar />
      </div>
      <section className="mt-24"></section>
      <section id="home">
        <HomeSection />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section className="w-full" id="contact">
        <ContactSection />
      </section>
      <section className="w-full" id="footer">
        <FooterSection />
      </section>
    </main>
  );
}
