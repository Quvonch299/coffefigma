import React, { useState } from 'react'

export default function Hero() {
    const [header, setHeader] = useState(false);

    return (
        <div className='mt-[43px]'>
            <div className={`max-w-7xl m-auto h-[600px] grid grid-cols-2 items-center bg-[#A2A2A2] rounded-2xl
                ${header &&"bg-[url('/Header.jpg')] bg-cover bg-center" }rounded-[10px]`}>
                <div className='h-[367px] w-[493px] ml-[85px]'>
                    <h2 className='text-[72px] mg-[32px] text-[#FEFCF7] font-bold'style={{ fontFamily: 'Fraunces' }}>
                        Great coffee made simple.
                    </h2>
                    <p style={{ fontFamily: 'Barlow, sans-serif' }}className='text-[#FEFCF7] mb-[56px]'>
                        Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.
                    </p>
                    <button onClick={() => { setHeader(true) }} className='hover:bg-[#66D2CF] transition-all cursor-pointer duration-200 w-[217px] text-white h-[56px] bg-[#0E8784] rounded-[8px]'style={{ fontFamily: 'Fraunces' }}>
                        Create your plan
                    </button>
                </div>
            </div>
        </div>
    )
}
