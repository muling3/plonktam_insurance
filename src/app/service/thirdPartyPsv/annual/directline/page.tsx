"use client"

import Link from "next/link";

const Directline = () => {
  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className="header w-full my-4 flex justify-between items-center flex-wrap">
          <p className="text-lg font-semibold uppercase">
            directline annual psv matatu rates
          </p>
          <Link href={"/service/thirdPartyPsv/annual"}>
            <span className="material-symbols-outlined p-2 rounded-full border">
              close
            </span>
          </Link>
        </div>
        <div className="opts w-full grid grid-cols-3 gap-6 sm:gap-16 place-items-center">
          <div className="font-bold">Seaters</div>
          <div className="font-bold">Cost (Ksh)</div>
          <div className="font-bold">Action</div>

          <div>14 Seats</div>
          <div className="">100, 500</div>
          <Link href={"/service/thirdPartyPsv/annual/directline/1"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div>24 Seats</div>
          <div className="">125, 800</div>
          <Link href={"/service/thirdPartyPsv/annual/directline/2"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div>25 Seats</div>
          <div className="">129, 420</div>
          <Link href={"/service/thirdPartyPsv/annual/directline/3"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div>33 Seats</div>
          <div className="">173, 952</div>
          <Link href={"/service/thirdPartyPsv/annual/directline/4"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div>37 Seats</div>
          <div className="">229, 252</div>
          <Link href={"/service/thirdPartyPsv/annual/directline/5"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div>41 Seats</div>
          <div className="">251, 200</div>
          <Link href={"/service/thirdPartyPsv/annual/directline/6"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div>42 Seats</div>
          <div className="">256, 120</div>
          <Link href={"/service/thirdPartyPsv/annual/directline/7"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Directline;
