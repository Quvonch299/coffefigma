import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiCloset } from 'react-icons/bi';

export default function CreatePlanModal({ setModal }) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-2xl w-[90%] max-w-md overflow-hidden">
        <div className="bg-[#2F3A3F] px-6 py-5 flex justify-between items-center">
          <h2
            className="text-white text-xl font-bold"
            style={{ fontFamily: 'Fraunces' }}
          >
            Order Summary
          </h2>
          <AiOutlineClose onClick={()=>{setModal(false)}} size={20}/>
        </div>
        <div className="px-6 py-6">
          <p className="text-gray-800 text-sm italic leading-relaxed">
            “I drink my coffee as <span className="font-semibold">Filter</span>, with a
            <span className="font-semibold"> Decaf</span> type of bean.
            <span className="font-semibold"> 250g</span> ground ala
            <span className="font-semibold text-[#0E8784]"> Cafetiére</span>, sent to me
            <span className="font-semibold text-[#0E8784]"> Every Week</span>.”
          </p>
          <p className="mt-4 text-xs text-gray-500 leading-relaxed">
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </p>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-gray-700 font-semibold">$14.00 / mo</p>
            <button
              className="px-5 py-2 bg-[#0E8784] text-white rounded-md hover:bg-[#1aa39e] transition"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
