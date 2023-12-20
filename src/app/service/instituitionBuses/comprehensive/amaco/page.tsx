import Link from "next/link";

const Amaco = () => {
  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className="header w-full my-4 flex items-center justify-between flex-wrap">
          <p className="text-lg font-semibold uppercase">
            amaco instituition buses comprehensive covers
          </p>
          <Link href={"/service/instituitionBuses/comprehensive"}>
            <span className="material-symbols-outlined p-2 rounded-full border">
              close
            </span>
          </Link>
        </div>
        <div className="opts w-full grid grid-cols-3 gap-3 sm:gap-16 place-items-center">
          <div className="font-bold">No. of Passengers</div>
          <div className="font-bold">Insurance Cost</div>
          <div className="font-bold">Action</div>

          <div>All school buses and vans </div>
          <div className="">4.5% of the value of the Vehicle</div>
          <Link href={"/service/instituitionBuses/comprehensive/amaco/1"}>
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
