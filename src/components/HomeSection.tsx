import React from "react";
import ServiceCard, { ServiceCardProps } from "./ServiceCard";

const HomeSection = () => {
  const services: ServiceCardProps[] = [
    { title: "Private Vehicles", image: "private" },
    { title: "Lorries", image: "lorries" },
    { title: "Third party PSV Matatus", image: "matatus" },
    { title: "PSV Taxi", image: "taxi" },
    { title: "School Buses and Nissans", image: "school_bus" },
    { title: "Commercial TukTuks", image: "truck" },
    { title: "PSV TukTuks", image: "tuktuk" },
    { title: "PSV BodaBoda", image: "boda" },
    { title: "Private Motorcycle", image: "motorcycle" },
    { title: "Commercial Pickups", image: "pickup" },
    { title: "PSV Matatu Plain", image: "matatu_plain" },
    { title: "Staff Buses", image: "staff_bus" },
  ];
  return (
    <div className="px-2 py-2 sm:px-24  my-6">
      <div className="header w-full my-10">
        <p className="text-2xl text-center font-bold">Our Services</p>
      </div>
      <div className="content grid grid-cols-2 sm:grid-cols-5 gap-2">
        {services.map((svc) => (
          <ServiceCard image={svc.image} title={svc.title} />
        ))}
      </div>
    </div>
  );
};

export default HomeSection;
