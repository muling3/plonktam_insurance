"use client";

import AboutUs from "@/components/AboutUs";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/Navbar";

import { ServiceCardProps } from "@/components/ServiceCard";

export default function Home() {
  const services: ServiceCardProps[] = [
    {
      title: "Private Vehicles",
      cat: "privateVehicles",
      image: "/services/private.png",
    },
    { title: "Lorries", cat: "lorries", image: "/services/lorries.png" },
    {
      title: "Third party PSV Matatus",
      cat: "thirdPartyPsv",
      image: "/services/matatus.png",
    },
    { title: "PSV Taxi", cat: "psvTaxi", image: "/services/taxi.png" },
    {
      title: "School Buses and Nissans",
      cat: "schoolBuses",
      image: "/services/school_bus.png",
    },
    {
      title: "Commercial TukTuks",
      cat: "commercialTuktuks",
      image: "/services/truck.png",
    },
    { title: "PSV TukTuks", cat: "psvTuktuks", image: "/services/tuktuk.png" },
    { title: "PSV BodaBoda", cat: "psvBodaboda", image: "/services/boda.png" },
    {
      title: "Private Motorcycle",
      cat: "psvMotorcycle",
      image: "/services/motorcycle.png",
    },
    {
      title: "Commercial Pickups",
      cat: "commercialPickups",
      image: "/services/pickup.png",
    },
    {
      title: "PSV Matatu Plain",
      cat: "psvMatatuplain",
      image: "/services/matatu_plain.png",
    },
    {
      title: "Staff Buses",
      cat: "instituitionBuses",
      image: "/services/staff_bus.png",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <div className="relative">
        <Navbar />
      </div>
      <section className="mt-4"></section>
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
