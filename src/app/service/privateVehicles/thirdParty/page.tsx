"use client";

import Image from "next/image";
import { useState } from "react";

const ThirdParty = () => {
  const serviceName = "Private Vehicles";
  const category = "Third Party Private Covers";
  const [open, setOpen] = useState(false);
  const [provider, setProvider] = useState("");
  const [cost, setCost] = useState(0);

  const handleSelect = (provider: string, cost: number) => {
    setProvider(provider);
    setCost(cost);

    setOpen((prev) => !prev);
  };

  const closeModal = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4 relative">
        {/* {open && ( */}
        <div
          className={`h-[420px] bg-slate-300 absolute left-10 sm:left-20 right-10 sm:right-20 px-2 py-2 sm:px-32 sm:py-4 rounded-md z-10 duration-1000 ${
            open ? "top-[20px]" : "top-[-1000px]"
          }`}
        >
          <div className="header w-full py-1 flex justify-between items-center">
            <span
              className="material-symbols-outlined p-2 rounded-full border"
              onClick={() => closeModal()}
            >
              arrow_back
            </span>
            <span
              className="material-symbols-outlined p-2 rounded-full border"
              onClick={() => closeModal()}
            >
              arrow_back
            </span>
            {/* <span className="border rounded-full border"></span> */}
          </div>
        </div>
        {/* )} */}
        <div className="header w-full my-4">
          <p className="text-lg font-semibold uppercase">
            third party private covers
          </p>
        </div>
        <div className="opts w-full grid grid-cols-3 gap-6 sm:gap-16 place-items-center">
          <div className="font-bold">Insurance</div>
          <div className="font-bold">Price</div>
          <div className="font-bold">Action</div>

          <div className="h-16 w-20 relative">
            <Image
              src={"/partners/trident.png"}
              alt={"Trident"}
              fill
              priority
              className="w-full h-full"
            />
          </div>
          <div className="">ksh. 4, 950</div>
          <div
            className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md"
            onClick={() => handleSelect("Trident", 4950)}
          >
            select
          </div>

          <div className="h-16 w-20 relative">
            <Image
              src={"/partners/amaco.png"}
              alt={"Amaco"}
              fill
              priority
              className="w-full h-full"
            />
          </div>
          <div className="">ksh. 6, 500</div>
          <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
            select
          </div>

          <div className="h-16 w-20 relative">
            <Image
              src={"/partners/cic.png"}
              alt={"CIC"}
              fill
              priority
              className="w-full h-full"
            />
          </div>
          <div className="">ksh. 7, 574</div>
          <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
            select
          </div>

          <div className="h-16 w-20 relative">
            <Image
              src={"/partners/directline.png"}
              alt={"Directline"}
              fill
              priority
              className="w-full h-full"
            />
          </div>
          <div className="">ksh. 8, 450</div>
          <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
            select
          </div>

          <div className="h-16 w-20 relative">
            <Image
              src={"/partners/jubilee.png"}
              alt={"Jubilee"}
              fill
              priority
              className="w-full h-full"
            />
          </div>
          <div className="">ksh. 12, 000</div>
          <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
            select
          </div>

          <div className="h-16 w-20 relative">
            <Image
              src={"/partners/orient.png"}
              alt={"Kenya Orient"}
              fill
              priority
              className="w-full h-full"
            />
          </div>
          <div className="">ksh. 7, 574</div>
          <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
            select
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdParty;
