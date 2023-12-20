import Link from "next/link";

const Comprehensive = () => {
  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className="header w-full my-4">
          <p className="text-lg font-semibold uppercase">Lorries</p>
        </div>
        <div className="opts w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
          <Link href={"/service/lorries"}>
            <div className="py-2 uppercase text-white bg-[#007A37] grid place-items-center">
              Amaco insurance
            </div>
          </Link>

          <Link href={"/service/lorries/comprehensive/trident"}>
            <div className="py-2 uppercase text-white bg-[#E41313] grid place-items-center">
              trident insurance
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Comprehensive;
