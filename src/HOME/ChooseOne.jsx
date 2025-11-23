import React from 'react'

export default function ChooseOne() {
  return (
    <div className='mt-[100px] md:mt-[250px]'>

      <div className="w-full py-10 md:py-20 px-4 md:px-6 max-w-7xl m-auto">
        <div className="relative w-full md:w-[819px] max-w-4xl mb-8 md:mb-16">
          <div className="h-[2px] bg-[#c6d9d2] w-full"></div>
          <div className="absolute -top-3 -left-2 w-6 h-6 rounded-full border-2 border-[#0e7368]"></div>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-2 border-[#0e7368]"></div>
          <div className="absolute -top-3 -right-2 w-6 h-6 rounded-full border-2 border-[#0e7368]"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 text-center md:text-left">

          <div>
            <h1 style={{fontFamily:'Fraunces'}} className="font-bold text-4xl md:text-6xl text-[#f4b693]">01</h1>
            <h2 className="text-xl md:text-[32px] font-extrabold mt-3" style={{fontFamily: 'Fraunces'}}>Pick your coffee</h2>
            <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed">
              Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.
            </p>
            <button className="hover:bg-[#66D2CF] transition-all cursor-pointer duration-200 mt-6 bg-[#0e7368] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#0c5f57] transition w-full md:w-auto">
              Create your plan
            </button>
          </div>

          <div>
            <h1 style={{fontFamily:'Fraunces'}} className="font-bold text-4xl md:text-6xl text-[#f4b693]">02</h1>
            <h2 className="text-xl md:text-[32px] font-extrabold mt-3" style={{fontFamily: 'Fraunces'}}>Choose the frequency</h2>
            <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed">
              Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.
            </p>
          </div>

          <div>
            <h1 style={{fontFamily:'Fraunces'}} className="font-bold text-4xl md:text-6xl text-[#f4b693]">03</h1>
            <h2 className="text-xl md:text-[32px] font-extrabold mt-3" style={{fontFamily: 'Fraunces'}}>Receive and enjoy!</h2>
            <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed">
              We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning coffees curated to provide a distinct tasting experience.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
