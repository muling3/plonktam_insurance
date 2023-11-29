"use client"

import Link from "next/link";

const Amaco = () => {
  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className="header w-full my-4">
          <p className="text-lg font-semibold uppercase">
            amaco psv comprehensive covers
          </p>
        </div>
        <div className="opts w-full grid grid-cols-3 gap-4 sm:gap-16 place-items-center">
          <div className="font-bold">Type of the Vehicle</div>
          <div className="font-bold">Insurance Cost</div>
          <div className="font-bold">Action</div>

          <div>All PSV Taxi</div>
          <div className="">5.7% of the Value of the vehicle</div>
          <Link href={"/service/psvTaxi/comprehensive/amaco/1"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Amaco;
