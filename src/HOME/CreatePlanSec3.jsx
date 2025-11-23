import React, { useState } from "react";
import CartTitle from "../ui/CartTitle";
import CreatePlanModal from "./CreatePlanModal";

export default function CreatePlanSec3() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [modal, setModal] = useState(false);

  return (
    <div>
      <div className="max-w-7xl m-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-[125px]">
          {/* LEFT MENU */}
          <div>
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num}>
                <span
                  onClick={() => setActiveIndex(num)}
                  style={{ fontFamily: "Fraunces" }}
                  className={`flex gap-7 pb-6 text-lg md:text-[24px] font-black cursor-pointer transition-all 
                   ${activeIndex === num ? "opacity-100" : "opacity-50"}`}
                >
                  <h2 className="text-[#0E8784]">{String(num).padStart(2, "0")}</h2>
                  <p className="text-[#333D4B]">
                    {num === 1 && "Preferences"}
                    {num === 2 && "Bean Type"}
                    {num === 3 && "Quantity"}
                    {num === 4 && "Grind Option"}
                    {num === 5 && "Deliveries"}
                  </p>
                </span>

                {num !== 5 && (
                  <div className="border-b-2 mb-4 md:mb-[18px] border-[#83888F] w-full md:w-[255px]" />
                )}
              </div>
            ))}
          </div>

          {/* RIGHT SECTION */}
          <div className="grid gap-6 md:gap-[68px] mb-12 md:mb-[168px]">
            <CartTitle
              MainTitle="How do you drink your coffee?"
              title="Capsule"
              text="Compatible with Nespresso systems and similar brewers"
            />
            <CartTitle
              MainTitle="What type of coffee?"
              title="Single Origin"
              text="Just like regular coffee, except the caffeine has been removed"
            />
            <CartTitle
              MainTitle="How much would you like?"
              title="250g"
              text="Perfect option for a couple. Yields about 40 delectable cups."
            />
            <CartTitle
              MainTitle="Want us to grind them?"
              title="Wholebean"
              text="For drip or pour-over coffee methods such as V60 or Aeropress"
            />
            <CartTitle
              MainTitle="How often should we deliver?"
              title="Every week"
              text="$9.60 per shipment. Includes free priority shipping."
            />

            {/* SUMMARY */}
            <div className="w-full bg-[#0f1923] text-white p-6 rounded-xl max-w-3xl mx-auto font-black opacity-90">
              <p className="text-gray-400 text-xs tracking-widest mb-4">ORDER SUMMARY</p>
              <p className="text-[24px] leading-relaxed" style={{ fontFamily: "Fraunces" }}>
                “I drink my coffee as <span className="text-teal-400">Filter</span>, with a
                <span className="text-teal-400"> Decaf </span>type of <br /> bean.
                <span className="text-teal-400"> 250g </span>
                ground ala
                <span className="text-teal-400"> Cafetiare</span>, sent to me <br />
                <span className="text-teal-400"> Every Week</span>.”
              </p>
            </div>

            {/* PRICE + BUTTON */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-[19px] justify-end md:justify-center mt-8 md:mt-[57px] px-4 md:px-6">
              <p className="text-gray-700 font-semibold text-xl md:text-[32px]" style={{ fontFamily: "Fraunces" }}>
                $14.00 / mo
              </p>
              <button
                onClick={() => setModal(true)}
                className="hover:bg-[#66D2CF] transition-all duration-200 h-14 w-full md:w-[217px] rounded-2xl font-black bg-[#0E8784] active:bg-[#66D2CF] text-white"
                style={{ fontFamily: "Fraunces" }}
              >
                Create my plan!
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {modal && <CreatePlanModal setModal={setModal} />}
    </div>
  );
}
