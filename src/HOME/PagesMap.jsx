import React from 'react'

export default function PagesMap() {
  return (
    <div className='mb-[100px]'>
        <div className='max-w-7xl m-auto '>
            <h2 className='text-[24px] font-black text-[#83888F] mb-[72px]' style={{fontFamily: 'Fraunces'}}>Our headquarters</h2>
            <div className='grid grid-cols-3 justify-center'>

            <div>
                <img src="./map.svg" alt=""/>
                <h1 className='font-black text-[32px] mt-[43px] mb-[24px]' style={{fontFamily: 'Fraunces'}}>United Kingdom</h1>
                <p>68  Asfordby Rd</p>
                <p>Alcaston</p>
                <p>SY6 1YA</p>
                <p>+44 1241 918425</p>
            </div>
            <div>
                <img src="./map.svg" alt=""/>
                <h1 className='font-black text-[32px] mt-[43px] mb-[24px]' style={{fontFamily: 'Fraunces'}}>Canada</h1>
                <p>68  Asfordby Rd</p>
                <p>Alcaston</p>
                <p>SY6 1YA</p>
                <p>+44 1241 918425</p>
            </div>
            <div>
                <img src="./map.svg" alt=""/>
                <h1 className='font-black text-[32px] mt-[43px] mb-[24px]' style={{fontFamily: 'Fraunces'}}>Australia</h1>
                <p>68  Asfordby Rd</p>
                <p>Alcaston</p>
                <p>SY6 1YA</p>
                <p>+44 1241 918425</p>
            </div>
            </div>
        </div>
    </div>
  )
}
