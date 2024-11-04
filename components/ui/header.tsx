"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import MobileMenu from "@/components/ui/mobile-menu";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-transparent px-3 shadow-lg shadow-black/[0.03]">
          <div className="items-center justify-center flex flex-col text-white">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl">Electronics, Fashion, Home Goods</p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl">Vibrant Marketplace</p>
          </div>

          {/* Desktop navigation hidden on medium screens */}
          <nav className="hidden md:flex">
            <ul className="flex grow justify-center flex-wrap items-center">
              <li>
                <Link
                  className={`${inter.className} font-semibold text-sm text-[#BBA27B] border-b-2 border-transparent hover:text-[#BBA27B] hover:-translate-y-1 transition-transform duration-300 rounded-md px-2 mx-4 lg:mx-5`}
                  href="#"
                >
                  Shop Now
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold text-sm text-white border-b-2 border-transparent rounded-md hover:text-[#BBA27B] px-2 mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="#"
                >
                  Deals
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold text-sm text-white border-b-2 border-transparent px-2 rounded-md hover:text-[#BBA27B] mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="#"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold text-sm text-white border-b-2 border-transparent px-2 rounded-md hover:text-[#BBA27B] mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="#"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold text-sm text-white border-b-2 border-transparent px-2 rounded-md hover:text-[#BBA27B] mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="#"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button and "Get Started" button */}
          <div className="flex items-center gap-4">
            <MobileMenu />
            <Link
              className="hidden md:inline-block font-semibold text-sm p-1.5 text-gray-900 bg-[#BBA27B] border-b-2 border-transparent px-2 rounded-md hover:text-[#BBA27B] mx-4 lg:mx-5 transition duration-150 ease-in-out"
              href="#"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
