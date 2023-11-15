const Invesco = () => {
  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className="header w-full my-4">
          <p className="text-lg font-semibold uppercase">
            invesco third party covers
          </p>
        </div>
        <div className="opts grid grid-cols-2">
          <div className="my-2 items-center justify-center bg-slate-500">
            <p className="uppercase text-lg">14 seaters</p>
            <div className="mt-2">
              <select
                id="seaters"
                name="seaters"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>1 Month - Ksh. 7, 165</option>
                <option>14 Days - Ksh. 3, 840</option>
                <option>7 Days - Ksh. 2, 240</option>
              </select>
            </div>
            <div className="bg-[#007A37] text-white px-4 py-2 uppercase">
              add to cart
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invesco;
