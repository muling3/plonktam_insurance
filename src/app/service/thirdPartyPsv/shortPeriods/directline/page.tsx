const Directline = () => {
  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className="header w-full my-4">
          <p className="text-lg font-semibold uppercase">
            directline psv matatu rates
          </p>
        </div>
        <div className="opts w-full grid grid-cols-3 gap-6 sm:gap-16 place-items-center">
          <div className="font-bold">Seaters</div>
          <div className="font-bold">Options</div>
          <div className="font-bold">Action</div>

          <div>14 Seaters</div>
          <div className="w-[150px] sm:w-[250px]">
            <select
              id="seaters"
              name="seaters"
              className="w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>No Options</option>
              {/* <option>1 Month - Ksh. 7, 165</option>
              <option>14 Days - Ksh. 3, 840</option>
              <option>7 Days - Ksh. 2, 240</option> */}
            </select>
          </div>
          <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-2 sm:px-4 sm:py-2 uppercase rounded-md">
            select
          </div>

          <div>24 Seaters</div>
          <div className="w-[150px] sm:w-[250px]">
            <select
              id="seaters"
              name="seaters"
              className="w-full rounded-md border-0 px-1 sm:px-4 py-1.5 text-gray-900 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>Choose</option>
              <option>1 Month - Ksh. 9, 005</option>
              <option>14 Days - Ksh. 6, 350</option>
              <option>7 Days - Ksh. 3, 700</option>
            </select>
          </div>
          <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-2 sm:px-4 sm:py-2 uppercase rounded-md">
            select
          </div>

          <div>25 Seaters</div>
          <div className="w-[150px] sm:w-[250px]">
            <select
              id="seaters"
              name="seaters"
              className="w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>Choose</option>
              <option>1 Month - Ksh. 9, 005</option>
              <option>14 Days - Ksh. 6, 350</option>
              <option>7 Days - Ksh. 3, 700</option>
            </select>
          </div>
          <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-2 sm:px-4 sm:py-2 uppercase rounded-md">
            select
          </div>

          <div>33 Seaters</div>
          <div className="w-[150px] sm:w-[250px]">
            <select
              id="seaters"
              name="seaters"
              className="w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>Choose</option>
              <option>1 Month - Ksh. 11, 450</option>
              <option>14 Days - Ksh. 6, 200</option>
              <option>7 Days - Ksh. 3, 600</option>
            </select>
          </div>
          <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-2 sm:px-4 sm:py-2 uppercase rounded-md">
            select
          </div>

          <div>37 Seaters</div>
          <div className="w-[150px] sm:w-[250px]">
            <select
              id="seaters"
              name="seaters"
              className="w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>Choose</option>
              <option>1 Month - Ksh. 20, 980</option>
              <option>14 Days - Ksh. 11, 850</option>
              <option>7 Days - Ksh. 6, 900</option>
            </select>
          </div>
          <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-2 sm:px-4 sm:py-2 uppercase rounded-md">
            select
          </div>

          <div>41 Seaters</div>
          <div className="w-[150px] sm:w-[250px]">
            <select
              id="seaters"
              name="seaters"
              className="w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>Choose</option>
              <option>1 Month - Ksh. 22, 940</option>
              <option>14 Days - Ksh. 12, 650</option>
              <option>7 Days - Ksh. 9, 100</option>
            </select>
          </div>
          <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-2 sm:px-4 sm:py-2 uppercase rounded-md">
            select
          </div>

          <div>42 Seaters</div>
          <div className="w-[150px] sm:w-[250px]">
            <select
              id="seaters"
              name="seaters"
              className="w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>Choose</option>
              <option>1 Month - Ksh. 23, 440</option>
              <option>14 Days - Ksh. 15, 850</option>
              <option>7 Days - Ksh. 9, 250</option>
            </select>
          </div>
          <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-2 sm:px-4 sm:py-2 uppercase rounded-md">
            select
          </div>
        </div>
      </div>
    </>
  );
};

export default Directline;
