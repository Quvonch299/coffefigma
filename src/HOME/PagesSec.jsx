import React from 'react'

export default function PagesSec() {
  return (
    <div className='mt-20 md:mt-[160px] mb-12 md:mb-[168px] px-4'>
        <div className='max-w-7xl m-auto flex flex-col lg:flex-row gap-6 md:gap-[125px] items-center'>
            <div className="flex-shrink-0 w-full lg:w-auto">
                <img className='rounded-[8px] w-full lg:w-auto' src="./Bitmappng.png" alt=""/>
            </div>
            <div>
                <h2 className='text-2xl md:text-[40px] font-black' style={{fontFamily: 'Fraunces'}}>Our commitment</h2>
                <p className='text-sm md:text-base leading-relaxed'>We're built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world's best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</p>
            </div>
        </div>
    </div>
  )
}
