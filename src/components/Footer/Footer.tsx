export function Footer() {
  return (
    <div className="mt-68 mx-15 mb-20 sm:mb-40">
      <div className="grid grid-cols-1 gap-10 2xl:grid-cols-2 text-nowrap">
        <div>
          <div className="flex gap-5 items-center">
            <img className="h-2 w-10" src="Union.svg" alt="Logo" />
            <hr className="flex-10  border-gray-300" />
            <span className="font-medium text-sm">SMARTO</span>
          </div>

          <h2 className="text-8xl  mt-5">Контаки</h2>
          <div className="flex flex-wrap  gap-10 mt-20 md:flex-nowrap md:gap-50 lg:gap-50">
            <div className="flex flex-col">
              <div>
                <h4 className="font-semibold text-2xl">Головний офіс:</h4>
                <p className="mt-5 text-xl font-medium ">
                  SmartorangeTest@gmail.com
                </p>
                <button className="relative mt-10 font-medium text-sm cursor-pointer border  bg-[#0a0f13] text-[#eff3f5] hover:bg-[#eff3f5] hover:text-[#0a0f13] rounded-full px-3.5 py-3 hover:transition-transform duration-300 hover:scale-105">
                  ВІДКРИТИ В GOOGLE MAPS
                </button>
              </div>
              <div className="mt-20"></div>
              <h4 className="font-semibold text-2xl">Телефонни відділів:</h4>

              <div className="flex items-center mt-4">
                <div className="flex items-center gap-3">
                  <img className="h-3" src="Phone.svg" alt="PhoneLogo" />
                  <p className="text-sm font-medium">(044) 444-44-44</p>
                </div>
                <span className="ml-10 text-gray-600 font-medium text-xs">
                  ( Юридичний відділ )
                </span>
              </div>

              <div className="flex items-center mt-2">
                <div className="flex gap-3 items-center">
                  <img className="h-3" src="Phone.svg" alt="PhoneLogo" />
                  <p className="text-sm font-medium">(055) 555-55-55</p>
                </div>

                <span className="ml-10 text-gray-600 font-medium text-xs">
                  ( Бухгалтерія )
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold text-2xl">Наші соц. мережі:</h4>
              <div className="flex mt-5 gap-1">
                <button className="border bg-[#0a0f13] text-[#eff3f5] rounded-full px-3 py-3 cursor-pointer">
                  <img className="w-[24px] h-[24px]" src="Inst.svg" />
                </button>
                <button className="border bg-[#0a0f13] text-[#eff3f5] rounded-full px-3 py-3 cursor-pointer">
                  <img className="w-[24px] h-[24px]" src="Tube.svg" />
                </button>
                <button className="border bg-[#0a0f13] text-[#eff3f5] rounded-full px-3 py-3 cursor-pointer">
                  <img className="w-[24px] h-[24px]" src="fb.svg" />
                </button>

                <button className="border bg-[#0a0f13] text-[#eff3f5] rounded-full px-3 py-3 cursor-pointer">
                  <img className="w-[24px] h-[24px]" src="tik.svg" />
                </button>
              </div>
              <div className="mt-10 sm:mt-36">
                <h4 className="font-semibold text-2xl">Email:</h4>
                <p className="text-sm font-medium mt-4">office@smarto.ua</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex relative -space-x-120 max-2xl:hidden">
          <h2 className="font-regular text-8xl absolute top-15 z-40 left-1 mix-blend-luminosity">
            Якість
          </h2>
          <img className="object-cover z-30" src="FooterImg-1.png" />
          <img className="object-cover z-20" src="FooterImg-2.png" />
          <h4 className="font-regula text-8xl z-40 absolute right-1 bottom-10 ">
            понад усе
          </h4>
        </div>
      </div>
    </div>
  );
}
