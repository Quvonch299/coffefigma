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
        className="flex items-center gap-[80px] mb-[24px] cursor-pointer"
      >
        <h2 className="text-[40px] opacity-50 font-black" style={{ fontFamily: 'Fraunces' }}>
     {MainTitle}
        </h2>

        <p className="text-[#0E8784]">
          {open ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
        </p>
      </div>

      <div
        className={`grid grid-cols-3 gap-[23px] overflow-hidden transition-all duration-300 
        ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        {
        cards.map(card => (
          <div
            key={card.id}
           onClick={() => setActive(prev => (prev == card.id ? null : card.id))}
            className={`h-[250px] transition-all cursor-pointer w-[228px] opacity-75 rounded-2xl 
              ${active == card.id ? "bg-[#0E8784] text-white" : "bg-[#F4F1EB]" }
              flex justify-center`}
          >
            <div className="w-[172px]">
              <h2
                className="text-[24px] mt-[32px] mb-[24px] font-black"
                style={{ fontFamily: 'Fraunces' }}
              >
                {title}
              </h2>
              <p style={{ fontFamily: 'Barlow' }}>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
