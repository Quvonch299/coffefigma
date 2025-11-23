import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

export default function CartTitle({text,title, MainTitle}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const cards = [
    {
      id: 1,
      text: text
    },
    {
      id: 2,
    },
    {
      id: 3,
    }
  ];

  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-[80px] mb-4 md:mb-[24px] cursor-pointer"
      >
        <h2 className="text-xl md:text-[40px] opacity-50 font-black" style={{ fontFamily: 'Fraunces' }}>
     {MainTitle}
        </h2>

        <p className="text-[#0E8784] md:ml-auto">
          {open ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
        </p>
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[23px] overflow-hidden transition-all duration-300 
        ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        {
        cards.map(card => (
          <div
            key={card.id}
           onClick={() => setActive(prev => (prev == card.id ? null : card.id))}
            className={`h-auto md:h-[250px] transition-all cursor-pointer w-full md:w-[228px] opacity-75 rounded-2xl p-4 md:p-0
              ${active == card.id ? "bg-[#0E8784] text-white" : "bg-[#F4F1EB]" }
              flex justify-center items-center md:items-start`}
          >
            <div className="w-full md:w-[172px]">
              <h2
                className="text-lg md:text-[24px] mt-4 md:mt-[32px] mb-3 md:mb-[24px] font-black"
                style={{ fontFamily: 'Fraunces' }}
              >
                {title}
              </h2>
              <p className="text-sm md:text-base" style={{ fontFamily: 'Barlow' }}>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
