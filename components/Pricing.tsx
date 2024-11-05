import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({ subsets: ["latin"] });

const Pricing = () => {
  return (
    <div>
      <div className={`${inter.className} grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 justify-center max-w-7xl mx-auto p-8`}>
        <div className="w-full h-40 bg-white border-2 p-4 flex flex-col text-start">
          <p className="mb-2">Over 50,000 happy customers</p>
          <h1 className="text-3xl font-bold mt-2">78,513</h1>
        </div>
        <div className="w-full h-40 bg-white border-2 p-4 flex flex-col text-start">
          <p className="mb-2">80% customer satisfaction rate</p>
          <h1 className="text-3xl font-bold mt-2">99%</h1>
        </div>
        <div className="w-full h-40 bg-white border-2 p-4 flex flex-col text-start">
          <p className="mb-2">More than 2 million products sold</p>
          <h1 className="text-3xl font-bold mt-2">5.5 million</h1>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
