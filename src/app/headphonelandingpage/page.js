"use client";
import Image from 'next/image';
import {  useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import headphonesData from "../headphonelandingpage/headphonesData";


export default function Headphoneslandingpage() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);


    return (
        <div className="text-white font-inter">
            <section className="h-screen w-full bg-black relative overflow-hidden">
                <img
                    src="https://sony.scene7.com/is/image/sonyglobalsolutions/LinkBudsOpen_KV_D?$toutDesktop$"
                    alt="Sony Banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
            </section>



            <section className="text-center py-20 px-4 bg-black">
                <motion.h1 className="text-5xl  tracking-wide" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true }}>For the music</motion.h1>
                <motion.p initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }} className="mt-6 text-lg max-w-3xl mx-auto tracking-wide">Sony has always been For The Music. We pride ourselves on connecting creators and music lovers and we aim to create authentic experiences and emotions for fans by supporting the artist's vision over everything else.</motion.p>
                <button className="mt-6 px-6 py-3 bg-gold-500 text-black font-semibold rounded-lg hover:bg-gold-400 transition">Explore the Latest Sony Bravia TV</button>
            </section>

            <section className="py-20 flex justify-center bg-black">
                <Image src="/images/headphone.avif" alt="Sony TV" width={1200} height={600} className="rounded-xl shadow-lg" />
            </section>



            <section className="py-20 px-4 max-w-5xl mx-auto bg-white text-black " data-aos="zoom-in-up">
                <motion.h1 className="text-4xl text-center mb-10 tracking-wide" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }}>Bring the magic of the cinema home</motion.h1>
                <motion.p className="text-center text-lg mb-10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}>
                    Feel the emotion and excitement of the movies in your home. BRAVIA fills every corner of your space with soul-stirring cinematic sound and beautifully detailed pictures.
                </motion.p>
                <div className="grid gap-10">
                    {headphonesData.sections.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row items-center gap-6 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            <video
                                className="w-full md:w-1/2 rounded-lg shadow-lg blur-sm hover:blur-none transition-all duration-300"
                                loop
                                playsInline
                                muted
                                ref={(el) => {
                                    if (el) {
                                        el.addEventListener("mouseenter", () => {
                                            if (el.paused) {
                                                el.muted = false;
                                                el.play().catch((error) => console.warn("Play interrupted:", error));
                                            }
                                        });
                                        el.addEventListener("mouseleave", () => {
                                            el.pause();
                                            el.muted = true;
                                        });
                                    }
                                }}
                            >
                                <source src={item.video} type="video/mp4" />
                            </video>
                            <div className="w-full md:w-1/2 text-center md:text-left">
                                <motion.h1
                                    className="text-xl mb-2"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                >
                                    {item.title}
                                </motion.h1>
                                <motion.p
                                    className="text-lg"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: true, amount: 0.5 }}
                                >
                                    {item.text}
                                </motion.p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>





            <section className="bg-white text-black min-h-screen flex flex-col items-center justify-center px-6 xl:px-0 mb-20" data-aos="fade-up">
                <h1 className="text-6xl text-center mb-12">PRODUCT FINDER</h1>
                <div className="max-w-[1160px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gap-12 items-center">
                    {headphonesData.productFinder.map((item, index) => (
                        <div key={index} className="w-[350px] h-[500px] flex flex-col justify-between bg-white/90 backdrop-blur-3xl rounded-2xl p-10 shadow-lg border border-gray-400">
                            <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-lg" />
                            <motion.h1 className="text-4xl text-center tracking-wide" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }}>
                                {item.title}
                            </motion.h1>
                            <motion.p className="mt-4 text-lg text-black-300 leading-relaxed text-center" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.5 }}>
                                {item.description}
                            </motion.p>
                            <a href={item.link} className="mt-6 inline-block border-2 border-black text-black px-6 py-2 rounded-full transition-all duration-300 hover:bg-gray-300 hover:text-black self-center">Learn more</a>
                        </div>
                    ))}
                </div>
            </section>

            <section
                className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 xl:px-0"
                data-aos="fade-up"
            >
                <h1 className="text-6xl text-center mb-12">HOT NEW PRODUCTS</h1>
                <div className="max-w-[1160px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gap-12 items-center pb-20">
                    {headphonesData.otherproducts.map((product) => (
                        <div
                            key={product.id}
                            className="w-[350px] min-h-[500px] flex flex-col justify-between bg-black/10 backdrop-blur-3xl rounded-2xl p-10 shadow-[0px_4px_30px_rgba(255,255,255,0.1)] border border-black/10"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-40 object-cover rounded-lg"
                            />
                            <motion.h1
                                className="text-4xl tracking-wide text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                {product.name}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.5 }}
                                className="mt-4 text-lg text-gray-300 leading-relaxed text-center"
                            >
                                {product.description}
                            </motion.p>
                            <a
                                href={product.link}
                                className="mt-6 inline-block border-2 border-white text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-white hover:text-black self-center"
                            >
                                Learn more
                            </a>
                        </div>
                    ))}
                </div>
            </section>



            <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 xl:px-0" data-aos="fade-up">
                <h1 className="text-6xl text-center mb-12">HOT NEW PRODUCTS</h1>
                <div className="max-w-[1160px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center pb-20">
                    {headphonesData.products.map((product, index) => (
                        <div key={index} className="w-[350px] h-[500px] flex flex-col justify-between bg-black/10 backdrop-blur-3xl rounded-2xl p-10 shadow-[0px_4px_30px_rgba(255,255,255,0.1)] border border-black/10">
                            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
                            <motion.h1 className="text-4xl tracking-wide text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }}>
                                {product.name}
                            </motion.h1>
                            <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.5 }} className="mt-4 text-lg text-black-300 leading-relaxed text-center">
                                {product.description}
                            </motion.p>
                            <a href="/products" className="mt-6 inline-block border-2 border-white text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-gray-300 hover:text-black self-center">
                                Learn more
                            </a>
                        </div>
                    ))}
                </div>
            </section>


        </div>
    );
}
