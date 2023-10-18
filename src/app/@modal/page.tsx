"use client";

import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";

const Modal: FC<{ cat: string; title: string }> = ({ cat, title }) => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(true);
  const [accOpen, setAcc] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
    router.back();
  };

  const toggleAccordion = () => {
    setAcc((prev) => !prev);
  };

  return (
    <div className="h-5/6 bg-white transition-all duration-1000 fixed top-[12%] left-[5%] right-[5%] sm:top-[14%] sm:left-[10%] sm:right-[10%] z-50 flex justify-center items-center shadow-2xl rounded-lg overflow-y-scroll">
      <div className="w-full h-full relative">
        <div
          className="close border rounded-full flex items-centerjustify-center p-2 absolute top-4 right-4 cursor-pointer"
          onClick={closeModal}
        >
          <span className="material-symbols-outlined">close</span>
        </div>
        <div className="header w-full my-4">
          <p className="text-lg text-center font-semibold uppercase">{title}</p>
        </div>
        <div className="opts w-full">
          <div className="card-opt transition-all duration-500 m-3 p-3 rounded-md text-white flex flex-col items-start justify-start cursor-pointer">
            <div
              className="header bg-[#007A37] flex items-center justify-start w-full py-2 rounded-lg "
              onClick={toggleAccordion}
            >
              <div className="text-center">
                <span
                  className={`material-symbols-outlined mr-2 transition-all duration-500 ${
                    accOpen ? "rotate-90" : "rotate-0"
                  }`}
                >
                  chevron_right
                </span>
              </div>
              <div>PRIVATE THIRD PARTY MOTOR RATES AND PRICING(ANNUAL)</div>
            </div>
            <div
              className={`body transition-all duration-300 bg-white text-gray-600 overflow-hidden ${
                accOpen ? "h-96" : "h-0"
              }`}
            ></div>
          </div>
          <div className="card-opt transition-all duration-500 m-3 p-3 rounded-md text-white flex flex-col items-start justify-start cursor-pointer">
            <div
              className="header bg-[#007A37] flex items-center justify-start w-full py-2 rounded-lg "
              onClick={toggleAccordion}
            >
              <div className="text-center">
                <span
                  className={`material-symbols-outlined mr-2 transition-all duration-500 ${
                    accOpen ? "rotate-90" : "rotate-0"
                  }`}
                >
                  chevron_right
                </span>
              </div>
              <div>PRIVATE THIRD PARTY MOTOR RATES AND PRICING(ANNUAL)</div>
            </div>
            <div
              className={`body transition-all duration-300 bg-yellow-200 text-gray-600 overflow-hidden ${
                accOpen ? "h-96" : "h-0"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
