"use client";

import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import { useParams } from "next/navigation";
import React from "react";

const Modal = () => {
  const params = useParams();
  const title = (params as { cat: string }).cat;

  console.log("selectedService", title);

  return (
    <div className="w-full min-h-screen bg-white transition-all duration-1000 flex flex-col justify-start items-start overflow-x-hidden overflow-y-auto">
      <Navbar />
      <div className="mt-24"></div>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className="header w-full my-4">
          <p className="text-lg font-semibold uppercase">{title}</p>
        </div>
        <div className="opts w-full">
          <div className="card-opt transition-all duration-500 my-3 rounded-md text-white flex flex-col items-start justify-start cursor-pointer">
            <div
              className="header bg-[#007A37] flex items-center justify-start w-full py-2 rounded-lg "
            >
              <div className="text-center">
                <span
                  className={`material-symbols-outlined mr-2 transition-all duration-500`}
                >
                  chevron_right
                </span>
              </div>
              <div>PRIVATE THIRD PARTY MOTOR RATES AND PRICING(ANNUAL)</div>
            </div>
            <div
              className={`body transition-all duration-300 bg-white text-gray-600 overflow-hidden`}
            ></div>
          </div>
          <div className="card-opt transition-all duration-500 my-3 rounded-md text-white flex flex-col items-start justify-start cursor-pointer">
            <div
              className="header bg-[#007A37] flex items-center justify-start w-full py-2 rounded-lg"
            >
              <div className="text-center">
                <span
                  className={`material-symbols-outlined mr-2 transition-all duration-500`}
                >
                  chevron_right
                </span>
              </div>
              <div>PRIVATE THIRD PARTY MOTOR RATES AND PRICING(ANNUAL)</div>
            </div>
            <div
              className={`body transition-all duration-300 bg-yellow-200 text-gray-600 overflow-hidden`}
            ></div>
          </div>
        </div>
      </div>
      <section className="w-full" id="footer">
        <FooterSection />
      </section>
    </div>
  );
};

export default Modal;
