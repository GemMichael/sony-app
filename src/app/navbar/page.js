"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import React from 'react'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <nav className={`fixed top-0 z-50 w-full  px-[24px] xl:px-0 ${isScrolled ? "bg-black/90  shadow-md" : "bg-black"}`}>
                <div className="flex flex-wrap items-center justify-between max-w-[1160px] w-full py-5 mx-auto">
                    <div className="lg:text-[28px] text-2xl  text-white">SONY</div>
                    <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                    </div>
                    <div className="items-center justify-between w-full gap-16 md:flex lg:w-auto lg:order-1 transition-all duration-300 ease-in-out">
                        <ul className="flex flex-col items-center w-[90%] justify-center gap-4 md:gap-[30px] p-4 mt-4 font-medium absolute md:left-1/2 md:-translate-x-1/2  z-20 bg-[#141414]/[20%]  border backdrop-blur-2xl md:backdrop-blur-0 border-[#222222] md:bg-transparent rounded-lg md:p-0 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li className="text-center">
                                <a href="/" className="block text-center text-white rounded md:bg-transparent" >Home</a>
                            </li>
                            <li className="text-center">
                                <Link href="/products" className="block text-center text-white rounded md:bg-transparent"  >Products</Link>
                            </li>
                            <li className="text-center">
                                <Link href="/contact" className="block text-center text-white rounded md:bg-transparent"  >Contact</Link>
                            </li>
                            <li className="text-center">
                                <Link href="/about" className="block text-center text-white rounded md:bg-transparent"  >About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
