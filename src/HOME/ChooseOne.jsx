import React from 'react'

export default function ChooseOne() {
  return (
    <div className=' mt-[250px]'>

      <div className="w-full  py-20 px-6 max-w-7xl m-auto">
        <div className="relative w-[819px] max-w-4xl  mb-16">
          <div className="h-[2px] bg-[#c6d9d2] w-full"></div>
          <div className="absolute -top-3 -left-2 w-6 h-6 rounded-full border-2 border-[#0e7368]  "></div>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-2 border-[#0e7368]  "></div>
          <div className="absolute -top-3 -right-2 w-6 h-6 rounded-full border-2 border-[#0e7368]  "></div>
        </div>

        <div className="max-w-6xl -auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

          <div>
            <h1 style={{fontFamily:'Fraunces'}} className=" font-bold text-6xl font-bold text-[#f4b693]">01</h1>
            <h2 className="text-[32px] font-extrabold mt-3" style={{fontFamily: 'Fraunces'}}>Pick your <br/> coffee</h2>
            <p className="text-gray-600 mt-3 leading-relaxed line-clamp-5">
              Select from our evolving range of artisan <br/> coffees. Our beans are ethically sourced <br/>and we pay fair prices for them.
              There are <br/> new coffees in all profiles every month <br/> for you to try out.
            </p>
            <button className="hover:bg-[#66D2CF] transition-all cursor-pointer duration-200 mt-6 bg-[#0e7368] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#0c5f57] transition">
              Create your plan
            </button>
          </div>

          <div>
            <h1 style={{fontFamily:'Fraunces'}} className=" font-bold text-6xl font-bold text-[#f4b693]">02</h1>
            <h2 className="text-[32px] font-extrabold mt-3" style={{fontFamily: 'Fraunces'}}>Choose the <br/> frequency</h2>
            <p className="text-gray-600 mt-3 leading-relaxed line-clamp-5">
              Customize your order frequency,<br/> quantity, even your roast style and grind <br/> type. Pause, skip or cancel your <br/>  subscription with no commitment <br/> through our online portal.
            </p>
          </div>

          <div>
            <h1 style={{fontFamily:'Fraunces'}} className=" font-bold text-6xl font-bold text-[#f4b693]">03</h1>
            <h2 className="text-[32px] font-extrabold mt-3" style={{fontFamily: 'Fraunces'}}>Receive and <br/> enjoy!</h2>
            <p className="text-gray-600 mt-3 leading-relaxed line-clamp-5">
              We ship your package within 48 <br/>hours, freshly roasted. Sit back and enjoy <br/> award-winning coffees<br/>curated to provide a distinct tasting <br/> experience.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
