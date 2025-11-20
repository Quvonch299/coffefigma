import React from 'react'

export default function PagesSec2() {
  return (
    <div className='mb-[168px]'>
      <div className='max-w-7xl m-auto relative bg-[#293039] px-[85px] h-[474px] grid grid-cols-2  gap-[125px] rounded-2xl items-center'>
        <div>
          <h2 style={{fontFamily:'Fraunces'}} className='font-black mb-[32px] text-[40px] text-[#FFF]'>Uncompromising quality</h2>
          <p className='text-white/50'>Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
        </div>
        <div>
          <img className='relative rounded-2xl -top-[88px]' src="./Bitmap.png" alt=""/>
        </div>
      </div>
    </div>
  )
}
