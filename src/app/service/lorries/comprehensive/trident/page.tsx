import Link from "next/link";

const Trident = () => {
  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className="header w-full my-4">
          <p className="text-lg font-semibold uppercase">
            trident comprehensive covers
          </p>
        </div>
        <div className="opts w-full grid grid-cols-3 gap-6 sm:gap-16 place-items-center">
          <div className="font-bold">Value of the Lorry Insured</div>
          <div className="font-bold">Insurance cost</div>
          <div className="font-bold">Action</div>

          <div>Below Ksh. 500, 000 upto 15 Years </div>
          <div className="">ksh. 38, 000</div>
          <Link href={"/service/lorries/comprehensive/trident/1"}>
          <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
            select
          </div>
          </Link>

          <div>Below Ksh. 500, 000 upto 16 - 20 Years </div>
          <div className="">ksh. 38, 000</div>
          <Link href={"/service/lorries/comprehensive/trident/2"}>
          <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
            select
          </div>
          </Link>

          <div>Above Ksh. 1M upto 15 Years </div>
          <div className="">ksh. 38, 000</div>
          <Link href={"/service/lorries/comprehensive/trident/3"}>
          <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
            select
          </div>
          </Link>

          <div>Above Ksh. 1M upto 16 - 20 Years </div>
          <div className="">ksh. 40, 000</div>
          <Link href={"/service/lorries/comprehensive/trident/4"}>
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
