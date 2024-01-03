"use client";

import { useState } from "react";
import Link from "next/link";

const Invesco = () => {
  const [link1, setLink1] = useState<string>("");
  const [link2, setLink2] = useState<string>("");
  const [link3, setLink3] = useState<string>("");
  const [link4, setLink4] = useState<string>("");
  const [link5, setLink5] = useState<string>("");
  const [link6, setLink6] = useState<string>("");
  const [link7, setLink7] = useState<string>("");

  const handleSelect = (e: any, from: number, seaters: number) => {
    // prevent default
    e.preventDefault();

    switch (from) {
      case 1:
        e.target.value != "choose"
          ? setLink1(
              `/service/thirdPartyPsv/shortPeriods/invesco/1?opt=${e.target.value}`
            )
          : setLink1("");
        setLink2("");
        setLink3("");
        setLink4("");
        setLink5("");
        setLink6("");
        setLink7("");
        break;
      case 2:
        e.target.value != "choose"
          ? setLink2(
              `/service/thirdPartyPsv/shortPeriods/invesco/2?opt=${e.target.value}`
            )
          : setLink2("");
        setLink1("");
        setLink3("");
        setLink4("");
        setLink5("");
        setLink6("");
        setLink7("");
        break;
      case 3:
        e.target.value != "choose"
          ? setLink3(
              `/service/thirdPartyPsv/shortPeriods/invesco/3?opt=${e.target.value}`
            )
          : setLink3("");
        setLink1("");
        setLink2("");
        setLink4("");
        setLink5("");
        setLink6("");
        setLink7("");
        break;
      case 4:
        e.target.value != "choose"
          ? setLink4(
              `/service/thirdPartyPsv/shortPeriods/invesco/4?opt=${e.target.value}`
            )
          : setLink4("");
        setLink1("");
        setLink2("");
        setLink3("");
        setLink5("");
        setLink6("");
        setLink7("");
        break;
      case 5:
        e.target.value != "choose"
          ? setLink5(
              `/service/thirdPartyPsv/shortPeriods/invesco/5?opt=${e.target.value}`
            )
          : setLink5("");
        setLink1("");
        setLink2("");
        setLink3("");
        setLink4("");
        setLink6("");
        setLink7("");
        break;
      case 6:
        e.target.value != "choose"
          ? setLink6(
              `/service/thirdPartyPsv/shortPeriods/invesco/6?opt=${e.target.value}`
            )
          : setLink6("");
        setLink2("");
        setLink3("");
        setLink4("");
        setLink5("");
        setLink1("");
        setLink7("");
        break;
      case 7:
        e.target.value != "choose"
          ? setLink7(
              `/service/thirdPartyPsv/shortPeriods/invesco/7?opt=${e.target.value}`
            )
          : setLink7("");
        setLink2("");
        setLink3("");
        setLink4("");
        setLink5("");
        setLink6("");
        setLink1("");
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className="header w-full my-4 flex justify-between items-center flex-wrap">
          <p className="text-lg font-semibold uppercase dark:text-gray-900">
            invesco psv matatu rates
          </p>
          <Link href={"/service/thirdPartyPsv/shortPeriods"}>
            <span className="material-symbols-outlined p-2 rounded-full border-2 border-[#007A37] dark:text-gray-900">
              close
            </span>
          </Link>
        </div>
        <div className="opts w-full grid grid-cols-3 gap-6 sm:gap-16 place-items-center">
          <div className="font-bold dark:text-gray-900">Seaters</div>
          <div className="font-bold dark:text-gray-900">Options</div>
          <div className="font-bold dark:text-gray-900">Action</div>

          <div className="dark:text-gray-900">14 Seaters</div>
          <div className="w-[150px] sm:w-[250px]">
            <select
              id="seaters"
              name="seaters"
              className="w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(e) => handleSelect(e, 1, 14)}
            >
              <option value={"choose"}>Choose</option>
              <option value={"1"}>1 Month - Ksh. 7, 165</option>
              <option value={"2"}>14 Days - Ksh. 3, 840</option>
              <option value={"3"}>7 Days - Ksh. 2, 240</option>
            </select>
          </div>
          <Link href={link1}>
            <div
              className={`bg-[#007A37] text-white text-xs sm:text-base px-4 py-2 sm:px-4 sm:py-2 uppercase rounded-md ${
                link1 == "" ? "opacity-50" : "opacity-100"
              }`}
            >
              select
            </div>
          </Link>

          <div className="dark:text-gray-900">18 Seaters</div>
          <div className="w-[150px] sm:w-[250px]">
            <select
              id="seaters"
              name="seaters"
              className="w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(e) => handleSelect(e, 2, 18)}
            >
              <option value={"choose"}>Choose</option>
              <option value={"1"}>1 Month - Ksh. 8, 304</option>
              <option value={"2"}>14 Days - Ksh. 4, 770</option>
              <option value={"3"}>7 Days - Ksh. 2, 790</option>
            </select>
          </div>
          <Link href={link2}>
            <div
              className={`bg-[#007A37] text-white text-xs sm:text-base px-4 py-2 sm:px-4 sm:py-2 uppercase rounded-md ${
                link2 == "" ? "opacity-50" : "opacity-100"
              }`}
            >
              select
            </div>
          </Link>

          <div className="dark:text-gray-900">26 Seaters</div>
          <div className="w-[150px] sm:w-[250px]">
            <select
              id="seaters"
              name="seaters"
              className="w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(e) => handleSelect(e, 3, 26)}
            >
              <option value={"choose"}>Choose</option>
              <option value={"1"}>1 Month - Ksh. 10, 072</option>
              <option value={"2"}>14 Days - Ksh. 5, 985</option>
              <option value={"3"}>7 Days - Ksh. 3, 550</option>
            </select>
          </div>
          <Link href={link3}>
            <div
              className={`bg-[#007A37] text-white text-xs sm:text-base px-4 py-2 sm:px-4 sm:py-2 uppercase rounded-md ${
                link3 == "" ? "opacity-50" : "opacity-100"
              }`}
            >
              select
            </div>
          </Link>

          <div className="dark:text-gray-900">33 Seaters</div>
          <div className="w-[150px] sm:w-[250px]">
            <select
              id="seaters"
              name="seaters"
              className="w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(e) => handleSelect(e, 4, 33)}
            >
              <option value={"choose"}>Choose</option>
              <option value={"1"}>1 Month - Ksh. 11, 300</option>
              <option value={"2"}>14 Days - Ksh. 7, 569</option>
              <option value={"3"}>7 Days - Ksh. 4, 452</option>
            </select>
          </div>
          <Link href={link4}>
            <div
              className={`bg-[#007A37] text-white text-xs sm:text-base px-4 py-2 sm:px-4 sm:py-2 uppercase rounded-md ${
                link4 == "" ? "opacity-50" : "opacity-100"
              }`}
            >
              select
            </div>
          </Link>

          <div className="dark:text-gray-900">37 Seaters</div>
          <div className="w-[150px] sm:w-[250px]">
            <select
              id="seaters"
              name="seaters"
              className="w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(e) => handleSelect(e, 5, 37)}
            >
              <option value={"choose"}>Choose</option>
              <option value={"1"}>1 Month - Ksh. 16, 011</option>
              <option value={"2"}>14 Days - Ksh. 9, 457</option>
              <option value={"3"}>7 Days - Ksh. 5, 700</option>
            </select>
          </div>
          <Link href={link5}>
            <div
              className={`bg-[#007A37] text-white text-xs sm:text-base px-4 py-2 sm:px-4 sm:py-2 uppercase rounded-md ${
                link5 == "" ? "opacity-50" : "opacity-100"
              }`}
            >
              select
            </div>
          </Link>

          <div className="dark:text-gray-900">41 Seaters</div>
          <div className="w-[150px] sm:w-[250px]">
            <select
              id="seaters"
              name="seaters"
              className="w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(e) => handleSelect(e, 6, 41)}
            >
              <option value={"choose"}>Choose</option>
              <option value={"1"}>1 Month - Ksh. 17, 394</option>
              <option value={"2"}>14 Days - Ksh. 10, 515</option>
              <option value={"3"}>7 Days - Ksh. 6, 075</option>
            </select>
          </div>
          <Link href={link6}>
            <div
              className={`bg-[#007A37] text-white text-xs sm:text-base px-4 py-2 sm:px-4 sm:py-2 uppercase rounded-md ${
                link6 == "" ? "opacity-50" : "opacity-100"
              }`}
            >
              select
            </div>
          </Link>

          <div className="dark:text-gray-900">46 Seaters</div>
          <div className="w-[150px] sm:w-[250px]">
            <select
              id="seaters"
              name="seaters"
              className="w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(e) => handleSelect(e, 7, 46)}
            >
              <option value={"choose"}>Choose</option>
              <option value={"1"}>1 Month - Ksh. 23, 440</option>
              <option value={"2"}>14 Days - Ksh. 15, 850</option>
              <option value={"3"}>7 Days - Ksh. 9, 250</option>
            </select>
          </div>
          <Link href={link7}>
            <div
              className={`bg-[#007A37] text-white text-xs sm:text-base px-4 py-2 sm:px-4 sm:py-2 uppercase rounded-md ${
                link7 == "" ? "opacity-50" : "opacity-100"
              }`}
            >
              select
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Invesco;
