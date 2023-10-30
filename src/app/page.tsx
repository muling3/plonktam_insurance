"use client";

import AboutUs from "@/components/AboutUs";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/Navbar";

import { useSearchParams } from "next/navigation";
import { ServiceCardProps } from "@/components/ServiceCard";

export default function Home() {
  const services: ServiceCardProps[] = [
    {
      title: "Private Vehicles",
      cat: "private-vehicles",
      image: "/services/private.png",
    },
    { title: "Lorries", cat: "lorries", image: "/services/lorries.png" },
    {
      title: "Third party PSV Matatus",
      cat: "third-party-psv-matatus",
      image: "/services/matatus.png",
    },
    { title: "PSV Taxi", cat: "psv-taxi", image: "/services/taxi.png" },
    {
      title: "School Buses and Nissans",
      cat: "school-buses-and-nissans",
      image: "/services/school_bus.png",
    },
    {
      title: "Commercial TukTuks",
      cat: "commercial-tuktuks",
      image: "/services/truck.png",
    },
    { title: "PSV TukTuks", cat: "psv-tuktuks", image: "/services/tuktuk.png" },
    { title: "PSV BodaBoda", cat: "psv-bodaboda", image: "/services/boda.png" },
    {
      title: "Private Motorcycle",
      cat: "private-motorcycle",
      image: "/services/motorcycle.png",
    },
    {
      title: "Commercial Pickups",
      cat: "commercial-pickups",
      image: "/services/pickup.png",
    },
    {
      title: "PSV Matatu Plain",
      cat: "psv-matatu-plain",
      image: "/services/matatu_plain.png",
    },
    {
      title: "Staff Buses",
      cat: "staff-buses",
      image: "/services/staff_bus.png",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <div className="relative">
        <Navbar />
      </div>
      <section className="mt-24"></section>
      <section id="home">
        <HomeSection services={services} />
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
