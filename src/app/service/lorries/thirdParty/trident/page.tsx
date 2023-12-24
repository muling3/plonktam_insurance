import Link from "next/link";

const Trident = () => {
  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className="header w-full my-4 flex justify-between items-center flex-wrap">
          <p className="text-lg font-semibold uppercase">
            trident third party covers
          </p>
          <Link href={"/service/lorries/thirdParty"}>
            <span className="material-symbols-outlined p-2 rounded-full border">
              close
            </span>
          </Link>
        </div>
        <div className="opts w-full grid grid-cols-3 gap-6 sm:gap-16 place-items-center">
          <div className="font-bold">Tonnes of the Lorry</div>
          <div className="font-bold">Insurance cost(Ksh)</div>
          <div className="font-bold">Action</div>

          <div>1 To 3 Tonnes</div>
          <div className="dark:text-gray-900">5, 000</div>
          <Link href={"/service/lorries/thirdParty/trident/1"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div>4 To 8 Tonnes </div>
          <div className="dark:text-gray-900">6, 100</div>
          <Link href={"/service/lorries/thirdParty/trident/2"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div>9 To 12 Tonnes</div>
          <div className="dark:text-gray-900">7, 400</div>
          <Link href={"/service/lorries/thirdParty/trident/3"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div>13 To 15 Tonnes</div>
          <div className="dark:text-gray-900">8, 800</div>
          <Link href={"/service/lorries/thirdParty/trident/4"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div>16 To 20 Tonnes</div>
          <div className="dark:text-gray-900">12, 000</div>
          <Link href={"/service/lorries/thirdParty/trident/5"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div>Above 20 Tonnes</div>
          <div className="dark:text-gray-900">17, 500</div>
          <Link href={"/service/lorries/thirdParty/trident/6"}>
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
