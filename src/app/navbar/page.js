"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import React from "react";
import { FiMenu, FiX } from "react-icons/fi"; 

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 z-50 w-full px-6 xl:px-0 transition-all duration-300 ${isScrolled ? "bg-black/90 shadow-md" : "bg-black"}`}>
            <div className="flex items-center justify-between max-w-[1160px] w-full py-5 mx-auto">

                <div className="lg:text-[28px] text-2xl text-white">SONY</div>


                <button 
                    className="md:hidden text-white text-2xl focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <FiX /> : <FiMenu />}
                </button>

                <div className={`absolute md:relative top-16 left-0 w-full md:w-auto md:top-0 bg-black md:bg-transparent transition-all duration-300 ease-in-out ${isMenuOpen ? "block" : "hidden"} md:flex md:items-center md:justify-between md:gap-6`}>
                    <ul className="flex flex-col md:flex-row items-center w-full md:w-auto gap-4 md:gap-8 p-6 md:p-0 font-medium md:static absolute left-1/2 transform -translate-x-1/2 bg-[#141414]/80 md:bg-transparent border md:border-0 backdrop-blur-2xl md:backdrop-blur-0 border-[#222222] md:rounded-none rounded-lg">
                        <li className="text-center">
                            <Link href="/" className="block text-white hover:text-gray-300 transition">Home</Link>
                        </li>
                        <li className="text-center">
                            <Link href="/products" className="block text-white hover:text-gray-300 transition">Products</Link>
                        </li>
                        <li className="text-center">
                            <Link href="/contact" className="block text-white hover:text-gray-300 transition">Contact</Link>
                        </li>
                        <li className="text-center">
                            <Link href="/about" className="block text-white hover:text-gray-300 transition">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
