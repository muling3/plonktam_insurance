import Link from "next/link";

const Amaco = () => {
  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className="header w-full my-4">
          <p className="text-lg font-semibold uppercase">
            amaco third party covers
          </p>
        </div>
        <div className="opts w-full grid grid-cols-3 gap-6 sm:gap-16 place-items-center">
          <div className="font-bold">Tonnes of the Lorry</div>
          <div className="font-bold">Insurance cost</div>
          <div className="font-bold">Action</div>

          <div>0 To 3 Tonnes</div>
          <div className="">ksh. 5, 650</div>
          <Link href={"/service/lorries/thirdParty/amaco/1"}>
          <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
            select
          </div>
          </Link>

          <div>3 To 6 Tonnes </div>
          <div className="">ksh. 8, 500</div>
          <Link href={"/service/lorries/thirdParty/amaco/2"}>
          <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
            select
          </div>
          </Link>

          <div>7 To 12 Tonnes</div>
          <div className="">ksh. 11, 500</div>
          <Link href={"/service/lorries/thirdParty/amaco/3"}>
          <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
            select
          </div>
          </Link>

          <div>13 Tonnes And Above</div>
          <div className="">ksh. 8, 800</div>
          <Link href={"/service/lorries/thirdParty/amaco/4"}>
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
