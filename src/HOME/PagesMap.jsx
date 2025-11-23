import React from 'react'

export default function PagesMap() {
  return (
    <div className='mb-12 md:mb-[100px] px-4'>
        <div className='max-w-7xl m-auto'>
            <h2 className='text-lg md:text-[24px] font-black text-[#83888F] mb-8 md:mb-[72px]' style={{fontFamily: 'Fraunces'}}>Our headquarters</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 justify-center'>

            <div>
                <img src="./map.svg" alt="" className="w-12 h-12"/>
                <h1 className='font-black text-xl md:text-[32px] mt-4 md:mt-[43px] mb-3 md:mb-[24px]' style={{fontFamily: 'Fraunces'}}>United Kingdom</h1>
                <p className='text-sm md:text-base'>68 Asfordby Rd</p>
                <p className='text-sm md:text-base'>Alcaston</p>
                <p className='text-sm md:text-base'>SY6 1YA</p>
                <p className='text-sm md:text-base'>+44 1241 918425</p>
            </div>
            <div>
                <img src="./map.svg" alt="" className="w-12 h-12"/>
                <h1 className='font-black text-xl md:text-[32px] mt-4 md:mt-[43px] mb-3 md:mb-[24px]' style={{fontFamily: 'Fraunces'}}>Canada</h1>
                <p className='text-sm md:text-base'>68 Asfordby Rd</p>
                <p className='text-sm md:text-base'>Alcaston</p>
                <p className='text-sm md:text-base'>SY6 1YA</p>
                <p className='text-sm md:text-base'>+44 1241 918425</p>
            </div>
            <div>
                <img src="./map.svg" alt="" className="w-12 h-12"/>
                <h1 className='font-black text-xl md:text-[32px] mt-4 md:mt-[43px] mb-3 md:mb-[24px]' style={{fontFamily: 'Fraunces'}}>Australia</h1>
                <p className='text-sm md:text-base'>68 Asfordby Rd</p>
                <p className='text-sm md:text-base'>Alcaston</p>
                <p className='text-sm md:text-base'>SY6 1YA</p>
                <p className='text-sm md:text-base'>+44 1241 918425</p>
            </div>
            </div>
        </div>
    </div>
  )
}
