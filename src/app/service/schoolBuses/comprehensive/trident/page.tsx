import Link from "next/link";

const Trident = () => {
  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className="header w-full my-4 flex flex-wrap justify-between items-center">
          <p className="text-lg font-semibold uppercase dark:text-gray-900">
            trident school bus comprehensive covers
          </p>
          <Link href={"/service/schoolBuses/comprehensive"}>
            <span className="material-symbols-outlined p-2 rounded-full border-2 border-[#007A37] dark:text-gray-900">
              close
            </span>
          </Link>
        </div>
        <div className="opts w-full grid grid-cols-3 gap-6 sm:gap-16 place-items-center">
          <div className="font-bold dark:text-gray-900">
            Value of the School Buses Insured
          </div>
          <div className="font-bold dark:text-gray-900">
            Insurance Cost(Ksh)
          </div>
          <div className="font-bold dark:text-gray-900">Action</div>

          <div className="dark:text-gray-900">Below Ksh. 1M upto 15 Years</div>
          <div className="dark:text-gray-900">45, 000</div>
          <Link href={"/service/schoolBuses/comprehensive/trident/1"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div className="dark:text-gray-900">
            Below Ksh. 1M upto 16 - 20 Years
          </div>
          <div className="dark:text-gray-900">45, 000</div>
          <Link href={"/service/schoolBuses/comprehensive/trident/2"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div className="dark:text-gray-900">Above 1M upto 15 Years</div>
          <div className="dark:text-gray-900">43, 000</div>
          <Link href={"/service/schoolBuses/comprehensive/trident/3"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div className="dark:text-gray-900">
            Above Ksh. 1M upto 16 - 20 Years
          </div>
          <div className="dark:text-gray-900">43, 000</div>
          <Link href={"/service/schoolBuses/comprehensive/trident/4"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Trident;
