const Amaco = () => {
  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className="header w-full my-4">
          <p className="text-lg font-semibold uppercase">
            amaco comprehensive covers
          </p>
        </div>
        <div className="opts w-full grid grid-cols-3 gap-3 sm:gap-16 place-items-center">
          <div className="font-bold">Value of the Lorry Insured</div>
          <div className="font-bold">Insurance cost</div>
          <div className="font-bold">Action</div>

          <div>Below Ksh. 500, 000(MANDATORY EVALUATION) </div>
          <div className="">ksh. 45, 000</div>
          <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
            select
          </div>

          <div>Ksh. 500, 000 To Ksh. 1M </div>
          <div className="">ksh. 50, 000</div>
          <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
            select
          </div>

          <div>Ksh. 500, 000 To Ksh. 1M </div>
          <div className="">ksh. 50, 000</div>
          <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
            select
          </div>

          <div>Over Ksh. 2.5M </div>
          <div className="">ksh. 40, 000</div>
          <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
            select
          </div>
        </div>
      </div>
    </>
  );
};

export default Amaco;
