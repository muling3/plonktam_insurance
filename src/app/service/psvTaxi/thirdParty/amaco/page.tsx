"use client";

import Link from "next/link";

const Amaco = () => {
  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className="header w-full my-4">
          <p className="text-lg font-semibold uppercase">
            amaco all psv non matatu covers
          </p>
        </div>
        <div className="opts w-full grid grid-cols-3 gap-6 sm:gap-16 place-items-center">
          <div className="font-bold">No. of Passengers</div>
          <div className="font-bold">Insurance Cost(Ksh)</div>
          <div className="font-bold">Action</div>

          <div>1 To 9 Passengers</div>
          <div className="dark:text-gray-900">6, 500 + (500 each seat)</div>
          <Link href={"/service/psvTaxi/thirdParty/amaco/1"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div>10 To 18 Passengers</div>
          <div className="dark:text-gray-900">8, 500 + (500 each seat)</div>
          <Link href={"/service/psvTaxi/thirdParty/amaco/2"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div>19 To 24 Passengers</div>
          <div className="dark:text-gray-900">12, 500 + (500 each seat)</div>
          <Link href={"/service/psvTaxi/thirdParty/amaco/3"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div>25 To 41 Passengers</div>
          <div className="dark:text-gray-900">15, 000 + (500 each seat)</div>
          <Link href={"/service/psvTaxi/thirdParty/amaco/4"}>
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
