import React, { FC } from "react";
import ServiceCard, { ServiceCardProps } from "./ServiceCard";

const HomeSection: FC<{services: ServiceCardProps[]}> = ({ services }) => {
  return (
      <div className="px-2 py-2 sm:px-24 my-6">
        <div className="header w-full my-10">
          <p className="text-2xl text-center font-bold">Our Services</p>
        </div>
        <div className="content grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {services.map((svc) => (
            <ServiceCard
              image={svc.image}
              title={svc.title}
              cat={svc.cat}
              key={svc.cat}
            />
          ))}
        </div>
      </div>
  );
};

export default HomeSection;
