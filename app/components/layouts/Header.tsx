"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../Navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`container fixed py-4  z-50 min-w-[100%] md:px-6 flex flex-1 justify-between top-0 left-0 text-white uppercase text-xl transition-all ease-in duration-1300 ${
        isScrolled ? "bg-black/80 text-white " : ""
      }`}
    >
      <div className=" flex justify-between items-center w-full">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Uncle BarberShop"
            width={150}
            height={33}
            className="ml-6"
          />
        </Link>

        <Navigation />
      </div>
    </header>
  );
};

export default Header;
