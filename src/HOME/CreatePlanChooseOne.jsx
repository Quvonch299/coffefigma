import React from 'react'

export default function CreatePlanChooseOne() {
  return (
    <div className='mt-20 md:mt-[250px] mb-12 md:mb-[159px] px-4'>

      <div className="w-full bg-[#282F38] rounded-[10px] py-8 md:py-[121px] md:h-[653px] px-4 md:px-6 md:pl-[85px] max-w-7xl m-auto">
        <div className="relative w-full md:w-[819px] max-w-4xl mb-8 md:mb-16">
          <div className="h-0.5 bg-[#c6d9d2] w-full"></div>
          <div className="absolute -top-3 -left-2 w-6 h-6 rounded-full border-2 border-[#0e7368]"></div>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-2 border-[#0e7368]"></div>
          <div className="absolute -top-3 -right-2 w-6 h-6 rounded-full border-2 border-[#0e7368]"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 text-center md:text-left">

          <div>
            <h1 style={{fontFamily:'Fraunces'}} className="font-bold text-4xl md:text-6xl text-[#f4b693]">01</h1>
            <h2 className="text-xl md:text-[32px] text-[#FEFCF7] font-extrabold mt-3" style={{fontFamily: 'Fraunces'}}>Pick your coffee</h2>
            <p className="mt-3 text-white/50 text-sm md:text-base leading-relaxed">
              Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.
            </p>
          </div>

          <div>
            <h1 style={{fontFamily:'Fraunces'}} className="font-bold text-4xl md:text-6xl text-[#f4b693]">02</h1>
            <h2 className="text-xl md:text-[32px] text-[#FEFCF7] font-extrabold mt-3" style={{fontFamily: 'Fraunces'}}>Choose the frequency</h2>
            <p className="mt-3 text-white/50 text-sm md:text-base leading-relaxed">
              Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.
            </p>
          </div>

          <div>
            <h1 style={{fontFamily:'Fraunces'}} className="font-bold text-4xl md:text-6xl text-[#f4b693]">03</h1>
            <h2 className="text-xl md:text-[32px] text-[#FEFCF7] font-extrabold mt-3" style={{fontFamily: 'Fraunces'}}>Receive and enjoy!</h2>
            <p className="mt-3 text-white/50 text-sm md:text-base leading-relaxed">
              We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning coffees curated to provide a distinct tasting experience.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
