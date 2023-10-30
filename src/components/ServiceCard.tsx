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
      <div className="h-28 w-36 sm:h-48 sm:w-56 rounded-md border shadow-md sm:shadow-lg my-2 mx-2 sm:mx-4">
        <div className="image w-ful h-5/6 relative">
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="dark:invert"
          />
        </div>
        <div className="title w-full text-center">{title}</div>
      </div>
    </Link>
  );
};

export default ServiceCard;
