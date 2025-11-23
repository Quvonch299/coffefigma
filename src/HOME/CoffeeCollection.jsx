import React from 'react'

export default function CoffeeCollection() {
  return (
    <div className='mt-20 md:mt-[336px] px-4'>
        <div className='max-w-7xl m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative'>
            <div className='flex flex-col z-10'>

            <img src="./expresso.png" alt="" className="w-full"/>
            <h1 className='text-center text-lg md:text-[24px] font-bold' style={{fontFamily: 'Fraunces'}}>Gran Espresso</h1>
            <p className='text-center text-sm md:text-base'>Light and flavorful blend with cocoa and black pepper for an intense experience.</p>
            </div>
            <div className='flex flex-col z-10'>

            <img src="./expresso.png" alt="" className="w-full"/>
            <h1 className='text-center text-lg md:text-[24px] font-bold' style={{fontFamily: 'Fraunces'}}>Gran Espresso</h1>
            <p className='text-center text-sm md:text-base'>Light and flavorful blend with cocoa and black pepper for an intense experience.</p>
            </div>
            <div className='flex flex-col z-10'>

            <img src="./expresso.png" alt="" className="w-full"/>
            <h1 className='text-center text-lg md:text-[24px] font-bold' style={{fontFamily: 'Fraunces'}}>Gran Espresso</h1>
            <p className='text-center text-sm md:text-base'>Light and flavorful blend with cocoa and black pepper for an intense experience.</p>
            </div>
            <div className='flex flex-col z-10'>

            <img src="./expresso.png" alt="" className="w-full"/>
            <h1 className='text-center text-lg md:text-[24px] font-bold' style={{fontFamily: 'Fraunces'}}>Gran Espresso</h1>
            <p className='text-center text-sm md:text-base'>Light and flavorful blend with cocoa and black pepper for an intense experience.</p>
            </div>
            <img className='absolute -top-26 ml-[59px]' src="./sectionbackground.png" alt=""/>
        </div>
    </div>
  )
}
