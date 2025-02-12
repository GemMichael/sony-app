"use client";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-8">
            <div className="max-w-[1160px] mx-auto px-6">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">

                    <div>
                        <h3 className="text-gray-400 font-semibold mb-2">Find a Store</h3>
                        <a href="#" className="hover:text-gray-300 transition">See Our Locations</a>
                    </div>
                    

                    <div>
                        <h3 className="text-gray-400 font-semibold mb-2">Support</h3>
                        <a href="#" className="hover:text-gray-300 transition block">Online Help</a>
                        <a href="#" className="hover:text-gray-300 transition block">Service Centres</a>
                    </div>

                    <div>
                        <h3 className="text-gray-400 font-semibold mb-2">Experience Sony</h3>
                        <a href="#" className="hover:text-gray-300 transition block">Eco</a>
                        <a href="#" className="hover:text-gray-300 transition block">YouTube</a>
                    </div>


                    <div>
                        <h3 className="text-gray-400 font-semibold mb-2">News & Info</h3>
                        <a href="#" className="hover:text-gray-300 transition">Press Centre</a>
                    </div>
                </div>


                <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm">
                    <div className="flex flex-wrap gap-4">
                        <a href="#" className="hover:text-gray-400 transition">Professional Products & Solutions</a>
                        <a href="#" className="hover:text-gray-400 transition">Company Info</a>
                        <a href="#" className="hover:text-gray-400 transition">Contact Us</a>
                    </div>


                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="bg-gray-700 p-2 rounded hover:bg-gray-500 transition"><FaYoutube /></a>
                        <a href="#" className="bg-gray-700 p-2 rounded hover:bg-gray-500 transition"><FaFacebookF /></a>
                        <a href="#" className="bg-gray-700 p-2 rounded hover:bg-gray-500 transition"><FaTwitter /></a>
                        <a href="#" className="bg-gray-700 p-2 rounded hover:bg-gray-500 transition"><FaInstagram /></a>
                    </div>
                </div>


                <div className="border-t border-gray-700 mt-6 pt-4 text-center md:text-left">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex gap-4 text-sm">
                            <a href="#" className="hover:text-gray-400 transition">TERMS & CONDITIONS</a>
                            <a href="#" className="hover:text-gray-400 transition">PRIVACY POLICY</a>
                        </div>
                    </div>


                    <div className="text-gray-500 text-sm mt-4">
                        Copyright © {new Date().getFullYear()} Sony Oman. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
