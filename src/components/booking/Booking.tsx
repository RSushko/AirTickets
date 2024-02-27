"use client";

import React from "react";
import { BUTTONS } from "@/lib/constants";
import BuyTicket from "./BuyTicket";
import CheckTicket from "./CheckTicket";

const Booking = () => {
  const [choose, setChoose] = React.useState(0);

  return (
    <div className="bg-white shadow-xl w-full pt-8 rounded-2xl -mt-12 mb-8">
      <div className="w-full border-b-2 border-gray-300 md:pl-16 mb-4">
        <div className="max-md:justify-center flex gap-4 md:gap-32 text-lg text-gray-800">
          {BUTTONS.map((el, i) => (
            <button
              key={i}
              onClick={() => setChoose(i)}
              className={choose == i ? "text-orange-600 border-orange-600" : ""}
            >
              {el}
            </button>
          ))}
        </div>
      </div>
      {choose == 0 ? <BuyTicket /> : <CheckTicket />}
    </div>
  );
};

export default Booking;
