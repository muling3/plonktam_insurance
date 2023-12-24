import Link from "next/link";

const CIC = () => {
  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className="header w-full my-4 flex items-center justify-between flex-wrap">
          <p className="text-lg font-semibold uppercase dark:text-gray-900">
            CIC comprehensive covers
          </p>
          <Link href={"/service/privateVehicles/comprehensive"}>
            <span className="material-symbols-outlined p-2 rounded-full border-2 border-[#007A37] dark:text-gray-900">
              close
            </span>
          </Link>
        </div>
        <div className="opts w-full grid grid-cols-3 gap-3 sm:gap-16 place-items-center">
          <div className="font-bold dark:text-gray-900">
            Value of the Vehicle Insured
          </div>
          <div className="font-bold dark:text-gray-900">Insurance cost</div>
          <div className="font-bold dark:text-gray-900">Action</div>

          <div className="dark:text-gray-900">Upto Ksh. 1M </div>
          <div className="dark:text-gray-900">6%</div>
          <Link href={"/service/privateVehicles/comprehensive/cic/1"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div className="dark:text-gray-900">Ksh. 1M To 1.5M</div>
          <div className="dark:text-gray-900">5%</div>
          <Link href={"/service/privateVehicles/comprehensive/cic/2"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div className="dark:text-gray-900">Ksh. 1.5M To 2.5M </div>
          <div className="dark:text-gray-900">4%</div>
          <Link href={"/service/privateVehicles/comprehensive/cic/3"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div>Ksh. 2.5M To 5M </div>
          <div className="dark:text-gray-900">3.5%</div>
          <Link href={"/service/privateVehicles/comprehensive/cic/4"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div className="dark:text-gray-900">Above Ksh. 5M </div>
          <div className="dark:text-gray-900">3%</div>
          <Link href={"/service/privateVehicles/comprehensive/cic/5"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CIC;
