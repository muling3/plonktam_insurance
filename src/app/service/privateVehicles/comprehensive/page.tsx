import Link from "next/link";

const Comprehensive = () => {
  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className="header w-full my-4">
          <p className="text-lg font-semibold uppercase">
            private vehicles comprehensive covers
          </p>
        </div>
        <div className="opts w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
          <Link href={"/service/privateVehicles/comprehensive/amaco"}>
            <div className="py-2 uppercase text-white bg-[#007A37] grid place-items-center w-full">
              amaco insurance
            </div>
          </Link>

          <Link href={"/service/privateVehicles/comprehensive/directline"}>
            <div className="py-2 uppercase text-white bg-[#E41313] grid place-items-center">
              directline insurance
            </div>
          </Link>

          <Link href={"/service/privateVehicles/comprehensive/monarch"}>
            <div className="py-2 uppercase text-white bg-[#000000] grid place-items-center">
              monarch insurance
            </div>
          </Link>

          <Link href={"/service/privateVehicles/comprehensive/orient"}>
            <div className="py-2 uppercase text-white bg-[#E41313] grid place-items-center">
              kenya orient insurance
            </div>
          </Link>

          <Link href={"/service/privateVehicles/comprehensive/trident"}>
            <div className="py-2 uppercase text-white bg-[#000000] grid place-items-center">
              trident insurance
            </div>
          </Link>

          <Link href={"/service/privateVehicles/comprehensive/jubilee"}>
            <div className="py-2 uppercase text-white bg-[#007A37] grid place-items-center">
              jubilee insurance
            </div>
          </Link>

          <Link href={"/service/privateVehicles/comprehensive/cic"}>
            <div className="py-2 uppercase text-white bg-[#E41313] grid place-items-center">
              cic insurance
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Comprehensive;
