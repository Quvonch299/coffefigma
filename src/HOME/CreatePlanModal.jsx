import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiCloset } from 'react-icons/bi';

export default function CreatePlanModal({ setModal }) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-2xl  w-[540px] h-[597px] overflow-hidden">
        <div className="bg-[#2F3A3F] px-6 h-[136px] flex justify-between items-center">
          <h2
            className="text-white text-[40px] font-black"
            style={{ fontFamily: 'Fraunces' }}
          >
            Order Summary
          </h2>
          <AiOutlineClose onClick={()=>{setModal(false)}} size={20}/>
        </div>
        <div className="px-6 py-6 mt-[57px]">
          <p style={{fontFamily:'Fraunces'}} className="text-gray-800 ml-[56px] text-sm  text-[24px] font-bold  ">
            “I drink my coffee as <span className="font-semibold">Filter</span>, with a <br/>
            <span className="font-semibold"> Decaf</span> type of bean.
            <span className="font-semibold"> 250g</span> ground <br/> ala
            <span className="font-semibold text-[#0E8784]"> Cafetiére</span>, sent to me
            <span className="font-semibold text-[#0E8784]"> Every <br/> Week</span>.”
          </p>
          <p className="mt-4 ml-[56px] mt-[7px] text-xs text-gray-500 leading-relaxed">
            Is this correct? You can proceed to checkout or go back to <br/> plan selection if something is off. Subscription discount <br/> codes can also be redeemed at the checkout. 
          </p>
          <div className=" flex gap-[19px] justify-center mt-[57px] px-6">
            <p className="text-gray-700 font-semibold text-[32px]" style={{fontFamily: 'Frances'}}>$14.00 / mo</p>
            <button
              className="w-[217px] h-[56px] hover:bg-[#66D2CF] bg-[#0E8784] text-white rounded-md hover:bg-[#1aa39e] transition"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
