import Link from "next/link";

const ThirdParty = () => {
  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className="header w-full my-4 flex justify-between items-center flex-wrap">
          <p className="text-lg font-semibold uppercase dark:text-gray-900">
            PSV BODABODA
          </p>
          <Link href={"/service/psvBodaboda"}>
            <span className="material-symbols-outlined p-2 rounded-full border-2 border-[#007A37] dark:text-gray-900">
              close
            </span>
          </Link>
        </div>
        <div className="opts w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
          <Link href={"/service/psvBodaboda/thirdParty/1m"}>
            <div className="py-2 uppercase text-white bg-[#007A37] grid place-items-center">
              1 month
            </div>
          </Link>
          <Link href={"/service/psvBodaboda/thirdParty/6m"}>
            <div className="py-2 uppercase text-white bg-[#E41313] grid place-items-center">
              6 months
            </div>
          </Link>{" "}
          <Link href={"/service/psvBodaboda/thirdParty/1yr"}>
            <div className="py-2 uppercase text-white bg-[#000000] grid place-items-center">
              1 year
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ThirdParty;
