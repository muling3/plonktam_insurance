"use client";

import Link from "next/link";

const Amaco = () => {
  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className="header w-full my-4 flex justify-between items-center flex-wrap">
          <p className="text-lg font-semibold uppercase">
            amaco school bus third party covers
          </p>
          <Link href={"/service/schoolBuses/thirdParty"}>
            <span className="material-symbols-outlined p-2 rounded-full border">
              close
            </span>
          </Link>
        </div>
        <div className="opts w-full grid grid-cols-3 gap-6 sm:gap-16 place-items-center">
          <div className="font-bold">No. of Passengers</div>
          <div className="font-bold">Insurance Cost(Ksh)</div>
          <div className="font-bold">Action</div>

          <div>0 To 15 Passengers</div>
          <div className="">9, 000 + (500 each pupil)</div>
          <Link href={"/service/schoolBuses/thirdParty/amaco/1"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div>15 To 25 Passengers</div>
          <div className="">10, 500 + (500 each pupil)</div>
          <Link href={"/service/schoolBuses/thirdParty/amaco/2"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div>25 Passengers and Above</div>
          <div className="">13, 000 + (500 each pupil)</div>
          <Link href={"/service/schoolBuses/thirdParty/amaco/3"}>
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
