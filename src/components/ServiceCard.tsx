import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

export interface ServiceCardProps {
  title: string;
  cat: string;
  image: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, image, cat }) => {
  return (
    <Link href={`/service/${cat}`}>
      <div className="h-36 w-36 sm:h-48 sm:w-56 rounded-md border shadow-md sm:shadow-lg my-2 mx-2 sm:mx-4 p-1 sm:p-2">
        <div className="image w-full h-4/6 sm:h-5/6 relative">
          <Image src={image} alt={title} fill priority />
        </div>
        <div className="title w-full text-center text-xs sm:text-base font-bold sm:font-normal mt-3 sm:mt-1">
          {title}
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
