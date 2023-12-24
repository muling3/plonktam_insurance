import Link from "next/link";

const Amaco = () => {
  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className="header w-full my-4 flex items-center justify-between flex-wrap">
          <p className="text-lg font-semibold uppercase dark:text-gray-900">
            amaco comprehensive covers
          </p>
          <Link href={"/service/privateVehicles/comprehensive"}>
            <span className="material-symbols-outlined p-2 rounded-full border dark:text-gray-900">
              close
            </span>
          </Link>
        </div>
        <div className="opts w-full grid grid-cols-3 gap-3 sm:gap-16 place-items-center">
          <div className="font-bold dark:text-gray-900">
            Value of the Vehicle Insured
          </div>
          <div className="font-bold dark:text-gray-900">
            Insurance cost(Ksh)
          </div>
          <div className="font-bold dark:text-gray-900">Action</div>

          <div className="dark:text-gray-900">Below Ksh. 500, 000 </div>
          <div className="dark:text-gray-900">38, 000</div>
          <Link href={"/service/privateVehicles/comprehensive/amaco/1"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div className="dark:text-gray-900">Ksh. 500, 000 To Ksh. 1.5M</div>
          <div className="dark:text-gray-900">35, 000</div>
          <Link href={"/service/privateVehicles/comprehensive/amaco/2"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div className="dark:text-gray-900">Ksh. 1.5M To 3M </div>
          <div className="dark:text-gray-900">34, 000</div>
          <Link href={"/service/privateVehicles/comprehensive/amaco/3"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div className="dark:text-gray-900">Ksh. 3M And Above</div>
          <div className="dark:text-gray-900">38, 000</div>
          <Link href={"/service/privateVehicles/comprehensive/amaco/4"}>
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
