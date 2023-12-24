import Link from "next/link";

const CommercialTuktuks = () => {
  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className="header w-full my-4 flex justify-between items-center flex-wrap">
          <p className="text-lg font-semibold uppercase dark:text-gray-900">
            commercial tuktuk
          </p>
          <Link href={"/"}>
            <span className="material-symbols-outlined p-2 rounded-full border-2 border-[#007A37] dark:text-gray-900">
              close
            </span>
          </Link>
        </div>
        <div className="opts w-full text-white">
          <Link href={"/service/commercialTuktuks/thirdParty"}>
            <div className="header bg-[#007A37] flex items-center justify-start w-full py-2 rounded-lg my-3">
              <div className="text-center">
                <span
                  className={`material-symbols-outlined mr-2 transition-all duration-500`}
                >
                  chevron_right
                </span>
              </div>
              <div className="uppercase">
                commercial tuktuk third party rates(annual)
              </div>
            </div>
          </Link>
          <Link href={"/service/commercialTuktuks/comprehensive"}>
            <div className="header bg-[#E41313] flex items-center justify-start w-full py-2 rounded-lg my-3">
              <div className="text-center">
                <span
                  className={`material-symbols-outlined mr-2 transition-all duration-500`}
                >
                  chevron_right
                </span>
              </div>
              <div className="uppercase">
                commercial tuktuk comprehensive rates(annual)
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CommercialTuktuks;
