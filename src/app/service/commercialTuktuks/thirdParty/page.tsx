import Link from "next/link";
import Image from "next/image";

const ThirdParty = () => {
  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className="header w-full my-4 flex justify-between items-center flex-wrap">
          <p className="text-lg font-semibold uppercase">
            third party commercial tuktuk annual covers
          </p>
          <Link href={"/service/commercialTuktuks"}>
            <span className="material-symbols-outlined p-2 rounded-full border">
              close
            </span>
          </Link>
        </div>
        <div className="opts w-full grid grid-cols-3 gap-6 sm:gap-16 place-items-center">
          <div className="font-bold">Insurance</div>
          <div className="font-bold">Price (Ksh)</div>
          <div className="font-bold">Action</div>

          <div className="h-16 w-20 relative">
            <Image
              src={"/partners/trident.png"}
              alt={"Trident"}
              fill
              priority
              className="w-full h-full"
            />
          </div>
          <div className="">3, 850</div>
          <Link href={"/service/commercialTuktuks/thirdParty/trident"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div className="h-16 w-20 relative">
            <Image
              src={"/partners/monarch.png"}
              alt={"Monarch"}
              fill
              priority
              className="w-full h-full"
            />
          </div>
          <div className="">5, 300</div>
          <Link href={"/service/commercialTuktuks/thirdParty/monarch"}>
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
          <div className="">5, 000</div>
          <Link href={"/service/commercialTuktuks/thirdParty/amaco"}>
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
