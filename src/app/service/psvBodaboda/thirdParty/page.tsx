import Link from "next/link";
import Image from "next/image";

const ThirdParty = () => {
  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className="header w-full my-4 flex justify-between items-center flex-wrap">
          <p className="text-lg font-semibold uppercase dark:text-gray-900">
            third party psv annual covers
          </p>
          <Link href={"/service/psvBodaboda"}>
            <span className="material-symbols-outlined p-2 rounded-full border-2 border-[#007A37] dark:text-gray-900">
              close
            </span>
          </Link>
        </div>
        <div className="opts w-full grid grid-cols-3 gap-6 sm:gap-16 place-items-center">
          <div className="font-bold dark:text-gray-900">Insurance</div>
          <div className="font-bold dark:text-gray-900">Price(Ksh)</div>
          <div className="font-bold dark:text-gray-900">Action</div>

          <div className="h-16 w-20 relative">
            <Image
              src={"/partners/trident.png"}
              alt={"Trident"}
              fill
              priority
              className="w-full h-full"
            />
          </div>
          <div className="dark:text-gray-900">3, 700</div>
          <Link href={"/service/psvBodaboda/thirdParty/trident"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div className="h-16 w-20 relative">
            <Image
              src={"/partners/directline.png"}
              alt={"Directline"}
              fill
              priority
              className="w-full h-full"
            />
          </div>
          <div className="dark:text-gray-900">4, 500</div>
          <Link href={"/service/psvBodaboda/thirdParty/directline"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ThirdParty;
