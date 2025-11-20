import React from "react";
import { FaGift } from "react-icons/fa";

export default function WhyChooseUsExact() {
  return (
    <section className="mt-[200px]">
      <div className="max-w-6xl mx-auto px-6 relative">

        <div className="bg-[#22272b] text-white rounded-xl p-12 md:p-16 shadow-inner relative h-[577px]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Why choose us?</h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              A large part of our role is choosing which particular coffees will be featured
              in our range. This means working closely with the best coffee growers to give
              you a more impactful experience on every level.
            </p>
          </div>
        </div>

        <div className="absolute inset-x-0 -bottom-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <div className="h-[382px] bg-[#0f9187] text-white rounded-lg p-8 pt-10 shadow-xl flex flex-col items-center">
                  <FaGift className="text-[#FDD6BA]   mt-[42px]" size={'72px'} />
                <h3 className="text-center text-xl font-semibold mb-3 mt-[36px]" style={{fontFamily: 'Fraunces'}}>Best quality</h3>
                <p className="text-center text-white/90 text-sm leading-relaxed mt-[20px]" style={{fontFamily: 'Barlow ,sans-serif'}}>
                  Discover an endless variety of the world’s best artisan coffee from each of our roasters.
                </p>
              </div>

              <div className="h-[382px] bg-[#0f9187] text-white rounded-lg p-8 pt-10 shadow-xl flex flex-col items-center">
                  <FaGift className="text-[#FDD6BA]   mt-[42px]" size={'72px'} />
                <h3 className="text-center text-xl font-semibold mb-3 mt-[36px]" style={{fontFamily: 'Fraunces'}}>Exclusive benefits</h3>
                <p className="text-center text-white/90 text-sm leading-relaxed mt-[20px]" style={{fontFamily: 'Barlow ,sans-serif'}}>
                  Special offers and savings when you subscribe, including 50% off your first shipment.
                </p>
              </div>

              <div className="h-[382px] bg-[#0f9187] text-white rounded-lg p-8 pt-10 shadow-xl flex flex-col items-center">
                  <FaGift className="text-[#FDD6BA]   mt-[42px]" size={'72px'} />
                <h3 className="text-center text-xl font-semibold mb-3 mt-[36px]" style={{fontFamily: 'Fraunces'}}>Free shipping</h3>
                <p className="text-center text-white/90 text-sm leading-relaxed mt-[20px]" style={{fontFamily: 'Barlow ,sans-serif'}}>
                  We cover the cost and coffee is delivered fast, fresh, and guaranteed.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
