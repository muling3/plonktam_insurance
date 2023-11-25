"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const ThirdParty = () => {
  const serviceName = "Private Vehicles";
  const category = "Third Party Private Covers";
  const [open, setOpen] = useState(false);
  const [provider, setProvider] = useState("");
  const [cost, setCost] = useState(0);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (provider: string, cost: number) => {
    if (typeof window !== "undefined") {
      window.scrollTo({top: 0, left: 0})
    }

    setProvider(provider);
    setCost(cost);

    setOpen((prev) => !prev);
  };

  const closeModal = () => {
    setOpen((prev) => !prev);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("click", (ev) => {
      // console.log("clicked window");
      if (ev.target !== modalRef.current)
        modalRef.current?.classList.add("animate-bounce");
    });
  }

  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4 relative">
        <div
          className={`h-auto bg-slate-300 absolute left-10 sm:left-32 right-10 sm:right-32 px-2 py-2 sm:px-32 sm:py-4 rounded-md z-10 duration-500 ${
            open ? "top-[10%]" : "sm:top-[-100%] top-[-200%]"
          }`}
        >
          <div className="header w-full py-1 flex justify-between items-center">
            <span
              className="material-symbols-outlined p-2 rounded-full border"
              onClick={() => closeModal()}
            >
              close
            </span>
            <span
              className="material-symbols-outlined p-2 rounded-full border"
              onClick={() => closeModal()}
            >
              arrow_back
            </span>
            {/* <span className="border rounded-full border"></span> */}
          </div>
          <div className="body w-full grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
            <div className="service-card py-4 px-4 bg-[#007A37] rounded-lg">
              <p className="text-white underline underline-offset-4">
                Your Selection Details
              </p>
              <p className="font-semibold text-gray-300 grid grid-cols-2 gap-2 my-2">
                Service:
                <span className="font-bold text-white">{serviceName}</span>
              </p>
              <p className="font-semibold text-gray-300 grid grid-cols-2 gap-2 my-2">
                Category:
                <span className="font-bold text-white">{category}</span>
              </p>
              <p className="font-semibold text-gray-300 grid grid-cols-2 gap-2 my-2">
                Insurance:
                <span className="font-bold text-white">{provider}</span>
              </p>
              <p className="font-semibold text-gray-300 grid grid-cols-2 gap-2 my-2">
                Cost:
                <span className="font-bold text-white">Ksh. {cost}</span>
              </p>
            </div>
            <div>
              <p>Your personal details</p>
              <div className="user-form">
                <form action="" className="w-full">
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 my-4">
                    <div className="input-group">
                      <label
                        htmlFor="fullname"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        FullName <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="fullname"
                          id="fullname"
                          className="w-full rounded-md border border-[#007A37] pl-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-2 focus:border-[#007A37] sm:text-sm sm:leading-6"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div className="input-group">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-700"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="w-full rounded-md border border-[#007A37] pl-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-2 focus:border-[#007A37] sm:text-sm sm:leading-6"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 my-4">
                    <div className="input-group">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          type="numeric"
                          name="phone"
                          id="phone"
                          className="w-full rounded-md border border-[#007A37] pl-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-2 focus:border-[#007A37] sm:text-sm sm:leading-6"
                          placeholder="07x xxx xxx"
                        />
                      </div>
                    </div>
                    <div className="input-group">
                      <label
                        htmlFor="location"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Location <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="location"
                          id="location"
                          className="w-full rounded-md border border-[#007A37] pl-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-2 focus:border-[#007A37] sm:text-sm sm:leading-6"
                          placeholder="Nairobi"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <input
                      type="submit"
                      value={"Confirm Submission"}
                      className="bg-[#007A37] text-white py-3 px-6 rounded-[80px] hover:cursor-pointer"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {open && (
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-200 opacity-40"></div>
        )}
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
          <div
            className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md"
            onClick={() => handleSelect("Amaco", 6500)}
          >
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
          <div
            className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md"
            onClick={() => handleSelect("CIC", 7574)}
          >
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
          <div
            className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md"
            onClick={() => handleSelect("Directline", 8450)}
          >
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
          <div
            className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md"
            onClick={() => handleSelect("Jubilee", 12000)}
          >
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
          <div
            className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md"
            onClick={() => handleSelect("Kenya Orient", 7574)}
          >
            select
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdParty;
