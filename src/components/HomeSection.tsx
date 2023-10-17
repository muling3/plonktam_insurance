import React from "react";
import ServiceCard, { ServiceCardProps } from "./ServiceCard";

const HomeSection = () => {
  const services: ServiceCardProps[] = [
    {
      title: "Private Vehicles",
      image: "/services/private.png",
    },
    { title: "Lorries", image: "/services/lorries.png" },
    {
      title: "Third party PSV Matatus",
      image: "/services/matatus.png",
    },
    { title: "PSV Taxi", image: "/services/taxi.png" },
    {
      title: "School Buses and Nissans",
      image: "/services/school_bus.png",
    },
    {
      title: "Commercial TukTuks",
      image: "/services/truck.png",
    },
    { title: "PSV TukTuks", image: "/services/tuktuk.png" },
    { title: "PSV BodaBoda", image: "/services/boda.png" },
    {
      title: "Private Motorcycle",
      image: "/services/motorcycle.png",
    },
    {
      title: "Commercial Pickups",
      image: "/services/pickup.png",
    },
    {
      title: "PSV Matatu Plain",
      image: "/services/matatu_plain.png",
    },
    { title: "Staff Buses", image: "/services/staff_bus.png" },
  ];
  return (
    <div className="px-2 py-2 sm:px-24  my-6">
      <div className="header w-full my-10">
        <p className="text-2xl text-center font-bold">Our Services</p>
      </div>
      <div className="content grid grid-cols-2 sm:grid-cols-5 gap-2">
        {services.map((svc) => (
          <ServiceCard image={svc.image} title={svc.title} key={svc.title} />
        ))}
      </div>
    </div>
  );
};

export default HomeSection;
