import Image from "next/image";
import Link from "next/link";

const ThirdParty = () => {
  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4 relative">
        <div className="header w-full my-4 flex justify-between items-center flex-wrap">
          <p className="text-lg font-semibold uppercase dark:text-gray-900">
            third party private covers
          </p>
          <Link href={"/service/privateVehicles"}>
            <span className="material-symbols-outlined p-2 rounded-full border dark:text-gray-900">
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
          <div className="dark:text-gray-900">4, 950</div>
          <Link href={"/service/privateVehicles/thirdParty/trident"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div className="h-16 w-20 relative">
            <Image
              src={"/partners/amaco.png"}
              alt={"Amaco"}
              fill
              priority
              className="w-full h-full"
            />
          </div>
          <div className="dark:text-gray-900">6, 500</div>
          <Link href={"/service/privateVehicles/thirdParty/amaco"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div className="h-16 w-20 relative">
            <Image
              src={"/partners/cic.png"}
              alt={"CIC"}
              fill
              priority
              className="w-full h-full"
            />
          </div>
          <div className="dark:text-gray-900">7, 574</div>
          <Link href={"/service/privateVehicles/thirdParty/cic"}>
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
          <div className="dark:text-gray-900">8, 450</div>
          <Link href={"/service/privateVehicles/thirdParty/directline"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div className="h-16 w-20 relative">
            <Image
              src={"/partners/jubilee.png"}
              alt={"Jubilee"}
              fill
              priority
              className="w-full h-full"
            />
          </div>
          <div className="dark:text-gray-900">12, 000</div>
          <Link href={"/service/privateVehicles/thirdParty/jubilee"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div className="h-16 w-20 relative">
            <Image
              src={"/partners/orient.png"}
              alt={"Kenya Orient"}
              fill
              priority
              className="w-full h-full"
            />
          </div>
          <div className="dark:text-gray-900">7, 574</div>
          <Link href={"/service/privateVehicles/thirdParty/orient"}>
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
