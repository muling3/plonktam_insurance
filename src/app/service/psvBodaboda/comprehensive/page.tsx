import Image from "next/image";
import Link from "next/link";

const Comprehensive = () => {
  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className="header w-full my-4">
          <p className="text-lg font-semibold uppercase">
            comprehensive psv boda annual
          </p>
        </div>
        <div className="opts w-full grid grid-cols-3 gap-6 sm:gap-16 place-items-center">
          <div className="font-bold">Insurance</div>
          <div className="font-bold">Price</div>
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
          <div className="">ksh. 7, 000</div>
          <Link href={"/service/psvBodaboda/comprehensive/trident"}>
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
          <div className="">Ksh. 6, 900</div>
          <Link href={"/service/psvBodaboda/comprehensive/monarch"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>

          <div className="h-16 w-20 relative">
            <Image
              src={"/partners/directline.png"}
              alt={"DirectLine"}
              fill
              priority
              className="w-full h-full"
            />
          </div>
          <div className="">Ksh. 7, 000</div>
          <Link href={"/service/psvBodaboda/comprehensive/directline"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Comprehensive;
