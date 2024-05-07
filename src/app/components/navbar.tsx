import { MessageCircle } from "lucide-react";
import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-between py-10">
      <div>
        <p className="text-lg font-semibold">Ace Maintanence</p>
      </div>
      <div className="flex gap-14 items-center">
        <a className="md:block hidden">
          <p className="text-black font-medium uppercase">Home</p>
        </a>
        <a className="md:block hidden">
          <p className="text-gray-500 uppercase">Contact</p>
        </a>
        <a className="bg-primary text-white py-4 px-8 rounded-full flex gap-2">
          <MessageCircle />
          <p>Message Now</p>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
