import React,{useState} from 'react'
export default function Hero(){
  const [header,setHeader]=useState(false);
  return(
    <div className='mt-[43px]'>
      <div className={`max-w-7xl m-auto h-[600px] grid grid-cols-2 max-sm:grid-cols-1 items-center bg-[#A2A2A2] rounded-2xl ${header&&"bg-[url('/Header.jpg')] bg-cover bg-center"} rounded-[10px]`}>
        <div className='h-[367px] w-[493px] ml-[85px] max-sm:w-[90%] max-sm:mx-auto'>
          <h2 className='text-[72px] max-sm:text-[42px] mg-[32px] text-[#FEFCF7] font-bold' style={{fontFamily:'Fraunces'}}>
            Great coffee made simple.
          </h2>
          <p className='text-[#FEFCF7] mb-[56px] max-sm:text-[16px]' style={{fontFamily:'Barlow,sans-serif'}}>
            Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.
          </p>
          <button onClick={()=>{setHeader(true)}} className='hover:bg-[#66D2CF] transition-all cursor-pointer duration-200 w-[217px] max-sm:w-[200px] text-white h-[56px] max-sm:h-[50px] bg-[#0E8784] rounded-[8px]' style={{fontFamily:'Fraunces'}}>
            Create your plan
          </button>
        </div>
      </div>
    </div>
  )
}
