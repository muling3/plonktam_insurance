"use client"

import Link from "next/link";

const Invesco = () => {
  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className="header w-full my-4">
          <p className="text-lg font-semibold uppercase">
            invesco annual psv matatu rates
          </p>
        </div>
        <div className="opts w-full grid grid-cols-3 gap-6 sm:gap-16 place-items-center">
          <div className="font-bold">Seaters</div>
          <div className="font-bold">Options</div>
          <div className="font-bold">Action</div>

          <div>14 Seats</div>
          <div className="">ksh. 86, 980</div>
          <Link href={"/service/thirdPartyPsv/annual/invesco/1"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div>18 Seats</div>
          <div className="">ksh. 99, 980</div>
          <Link href={"/service/thirdPartyPsv/annual/invesco/2"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div>26 Seats</div>
          <div className="">ksh. 121, 420</div>
          <Link href={"/service/thirdPartyPsv/annual/invesco/3"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div>33 Seats</div>
          <div className="">ksh. 136, 952</div>
          <Link href={"/service/thirdPartyPsv/annual/invesco/4"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div>37 Seats</div>
          <div className="">ksh. 193, 252</div>
          <Link href={"/service/thirdPartyPsv/annual/invesco/5"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div>41 Seats</div>
          <div className="">ksh. 209, 738</div>
          <Link href={"/service/thirdPartyPsv/annual/invesco/6"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Invesco;
