import { MessageCircle } from "lucide-react";
import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-between py-10">
      <div>
        <p className="text-lg font-semibold">Ace Maintanence</p>
      </div>
      <div className="flex gap-14 items-center">
        <a className="md:block hidden cursor-pointer">
          <p className="text-black font-medium uppercase">Home</p>
        </a>
        <a className="md:block hidden cursor-pointer">
          <p className="text-gray-500 uppercase">Contact</p>
        </a>
        <a className="cursor-pointer bg-primary text-white py-3 sm:py-4 px-6 sm:px-8 rounded-full flex gap-2 items-center">
          <MessageCircle />
          <p className="text-sm sm:text-base">Message Now</p>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
