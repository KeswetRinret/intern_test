import { Inter } from 'next/font/google';
import React from 'react';
import { IoMdHeart, IoMdLock } from "react-icons/io";
import { MdOutlineDynamicForm, MdFormatPaint } from "react-icons/md";

const inter = Inter({ subsets: ["latin"] });

const Deals = () => {
  return (
    <div>
      <div className={`${inter.className} flex flex-col items-center py-6`}>
        <div className="text-center mb-8">
          <h1 className="mb-4 text-2xl font-semibold">Shop the Base Deals</h1>
          <p className="text-lg font-bold">Discover Your Perfect Product Today!</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {[
            { icon: <MdFormatPaint />, title: "Electronic Hub", text: "Explore cutting-edge technology and gadgets that enhance lifestyle.", link: "Shop Electronics Now" },
            { icon: <MdOutlineDynamicForm />, title: "Fashion Forward", text: "Step into style with our trendy clothing and accessories curated just for you.", link: "Browse Fashion Trends" },
            { icon: <IoMdLock />, title: "Home Essentials", text: "Transform your living space with our high-quality home goods that combine functionality and design.", link: "Explore Home Goods" },
            { icon: <IoMdHeart />, title: "Exclusive Offer", text: "Don’t miss out on our limited-time promotions that guarantee unbeatable prices.", link: "View All Promotions" },
          ].map((card, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-6 max-w-xs w-full text-center"
            >
              <div className="flex items-center justify-center text-4xl mb-4 border border-[#B3B3B3] p-1 rounded-xl">
                {card.icon}
              </div>
              <h1 className="text-xl font-semibold mb-2">{card.title}</h1>
              <p className="text-black mb-4 font-normal">{card.text}</p>
              <span className="text-[#EF2A82] font-semibold cursor-pointer">{card.link}</span>
            </div>
          ))}jj
        </div>
      </div>
    </div>
  );
}

export default Deals;
