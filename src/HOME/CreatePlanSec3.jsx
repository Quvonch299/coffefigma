import React, { useState } from 'react'
import CartTitle from '../ui/CartTitle';
import CreatePlanModal from './CreatePlanModal';

export default function CreatePlanSec3() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [modal, setModal] = useState(false);

  return (
    <div>
      <div className='max-w-7xl m-auto'>
        <div className=' flex gap-[125px]'>
          <div>
            <span
              onClick={() => setActiveIndex(1)}
              style={{ fontFamily: 'Fraunces' }}
              className={`flex gap-[28px] pb-[24px] text-[24px] font-black cursor-pointer transition-all 
                ${activeIndex == 1 ? 'opacity-100' : 'opacity-50'}`}
            >
              <h2 className='text-[#0E8784]'>01</h2>
              <p className='text-[#333D4B]'>Preferences</p>
            </span>
            <div className='border-b-2 mb-[18px] border-[#83888F] w-[255px]'></div>

            <span
              onClick={() => setActiveIndex(2)}
              style={{ fontFamily: 'Fraunces' }}
              className={`flex gap-[28px] pb-[24px] text-[24px] font-black cursor-pointer transition-all 
                ${activeIndex == 2 ? 'opacity-100' : 'opacity-50'}`}
            >
              <h2 className='text-[#0E8784]'>02</h2>
              <p className='text-[#333D4B]'>Bean Type</p>
            </span>
            <div className='border-b-2 mb-[18px] border-[#83888F] w-[255px]'></div>

            <span
              onClick={() => setActiveIndex(3)}
              style={{ fontFamily: 'Fraunces' }}
              className={`flex gap-[28px] pb-[24px] text-[24px] font-black cursor-pointer transition-all 
                ${activeIndex == 3 ? 'opacity-100' : 'opacity-50'}`}
            >
              <h2 className='text-[#0E8784]'>03</h2>
              <p className='text-[#333D4B]'>Quantity</p>
            </span>
            <div className='border-b-2 mb-[18px] border-[#83888F] w-[255px]'></div>
            <span
              onClick={() => setActiveIndex(4)}
              style={{ fontFamily: 'Fraunces' }}
              className={`flex gap-[28px] pb-[24px] text-[24px] font-black cursor-pointer transition-all 
                ${activeIndex == 4 ? 'opacity-100' : 'opacity-50'}`}
            >
              <h2 className='text-[#0E8784]'>04</h2>
              <p className='text-[#333D4B]'>Grind Option</p>
            </span>
            <div className='border-b-2 mb-[18px] border-[#83888F] w-[255px]'></div>
            <span
              onClick={() => setActiveIndex(5)}
              style={{ fontFamily: 'Fraunces' }}
              className={`flex gap-[28px] pb-[24px] text-[24px] font-black cursor-pointer transition-all 
                ${activeIndex == 5 ? 'opacity-100' : 'opacity-50'}`}
            >
              <h2 className='text-[#0E8784]'>05</h2>
              <p className='text-[#333D4B]'>Deliveries</p>
            </span>

          </div>
          <div className='grid gap-[68px] mb-[168px]'>
            <CartTitle MainTitle={'How do you drink your coffee?'} title={'Capsule'} text={'ompatible with Nespresso systems and similar brewers'} />
            <CartTitle MainTitle={'What type of coffee?'} title={'Single Origin'} text={'Just like regular coffee, except the caffeine has been removed'} />
            <CartTitle MainTitle={'How much would you like?'} title={'250g'} text={'Perfect option for a couple. Yields about 40 delectable cups.'} />
            <CartTitle MainTitle={'Want us to grind them?'} title={'Wholebean'} text={'For drip or pour-over coffee methods such as V60 or Aeropress'} />
            <CartTitle MainTitle={'How often should we deliver?'} title={'Every week'} text={'$9.60 per shipment. Includes free priority shipping.'} />
            <div className="w-full bg-[#0f1923] text-white p-6 rounded-xl max-w-3xl mx-auto px-[70px] font-black opacity-90">
              <p className="text-gray-400 text-xs tracking-widest mb-4">ORDER SUMMARY</p>
              <p className="text-[24px]  leading-relaxed" style={{fontFamily: 'Fraunces '}}>
                “I drink my coffee as <span className="text-teal-400 font-semibold">Filter</span>, with a
                <span className="text-teal-400 font-semibold"> Decaf </span>
                type of <br/> bean.
                <span className="text-teal-400 font-semibold"> 250g </span>
                ground ala
                <span className="text-teal-400 font-semibold"> Cafetiare</span>, sent to me <br/>
                <span className="text-teal-400 font-semibold"> Every Week</span>.”

              </p>
              
            </div>
            <div  className=' flex justify-end  '>
              <button onClick={()=>{setModal(true)}} className='h-[56px] w-[217px] rounded-2xl font-black hover:cursor-pointer bg-[#0E8784] active:bg-[#66D2CF] duration-500 text-[#FFFF] '  style={{fontFamily:'Fraunces'}}>Create my plan!</button>
            </div>
          </div>
        </div>
      </div>
      {
        modal && <CreatePlanModal setModal={setModal}/>
      }
    </div>
  )
}
