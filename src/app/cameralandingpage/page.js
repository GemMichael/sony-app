"use client";
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, useScroll, useTransform } from "framer-motion";


export default function Cameralandingpage() {

    const videoRef = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (videoRef.current) {
                    if (entry.isIntersecting) {
                        videoRef.current.play(); 
                    } else {
                        videoRef.current.pause(); 
                    }
                }
            },
            { threshold: 0.5 } 
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current); 
            }
        };
    }, []);
    return (
        <div className="text-white font-inter">
            <section className="h-screen w-full bg-black relative overflow-hidden">
                <video ref={videoRef} autoPlay loop muted className="w-full h-full object-cover">
                    <source src="https://sony.scene7.com/is/content/sonyglobalsolutions/Sony_FY24_HAV_Category-PT-d-1?$originalDimensions$" type="video/mp4" />
                </video>
                <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
            </section>


            <section className="text-center py-20 px-4 bg-black">
                <motion.h1 className="text-5xl  tracking-wide" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true }}>Cinema is Coming Home</motion.h1>
                <motion.p initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }} className="mt-6 text-lg max-w-3xl mx-auto tracking-wide">Come together around the screen and immerse together in the scene with true-to-life picture and surround sound made for movies. Make the movies move you closer, see them in a new light, hear them in a new way. Fill the room with stories and make your living room a truly living space.</motion.p>
                <button className="mt-6 px-6 py-3 bg-gold-500 text-black font-semibold rounded-lg hover:bg-gold-400 transition">Explore the Latest Sony Bravia TV</button>
            </section>

            <section className="py-20 flex justify-center bg-black">
                <Image src="/images/bravia banner2.webp" alt="Sony TV" width={1200} height={600} className="rounded-xl shadow-lg" />
            </section>



            <section className="py-20 px-4 max-w-5xl mx-auto bg-white text-black "data-aos="zoom-in-up">
                <motion.h1 className="text-4xl text-center mb-10 tracking-wide" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }}>Bring the magic of the cinema home</motion.h1>
                <motion.p className="text-center text-lg mb-10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}>
                    Feel the emotion and excitement of the movies in your home. BRAVIA fills every corner of your space with soul-stirring cinematic sound and beautifully detailed pictures.
                </motion.p>
                <div className="grid gap-10">
                    {[
                        {
                            title: "Experience cinematic 360 Spatial Sound",
                            text: "Surrounded by multiple phantom speakers within a cinema-style surround sound field, it's like you're there in the movie.",
                            video: "/videos/Sony_cinema.mp4"
                        },
                        {
                            title: "True to the creators' vision",
                            text: "With exceptional visuals and emmersive sound, Sony ensures that the creators' vision is faithfully reproduced.",
                            video: "/videos/Bravia_picture.mp4"
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row items-center gap-6 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <video
                                key={item.video}
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
                                <motion.h1 className="text-xl mb-2" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true }}>{item.title}</motion.h1>
                                <motion.p className="text-lg" 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: true, amount: 0.5 }}>{item.text}</motion.p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>




            <section className="bg-white text-black min-h-screen flex flex-col items-center justify-center px-6 xl:px-0" data-aos="fade-up">
                <h1 className="text-6xl text-center mb-12">SCREEN TYPE AND SIZE</h1>
                <div className="max-w-[1160px] w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                    <div className="w-[350px] h-[500px] flex flex-col justify-between bg-white/90 backdrop-blur-3xl rounded-2xl p-10 shadow-[0px_4px_30px_rgba(0,_0,_0,_0.1)] border border-gray-400">
                        <img src="/images/Bravia_Led.webp" alt="Headphones" className="w-full h-40 object-cover rounded-lg" />
                        <motion.h1 className="text-4xl  tracking-wide text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }}>Mini LED and Full Array LED</motion.h1>
                        <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.5 }} className="mt-4 text-lg text-black-300 leading-relaxed text-center">Experience true-to-life contrast with incredible brightness and dazzling light.</motion.p>
                        <a href="/products" className="mt-6 inline-block border-2 border-black text-black px-6 py-2 rounded-full transition-all duration-300 hover:bg-gray-300 hover:text-black self-center">Learn more</a>
                    </div>

                    <div className="w-[350px] h-[500px] flex flex-col justify-between bg-white/90 backdrop-blur-3xl rounded-2xl p-10 shadow-[0px_4px_30px_rgba(0,_0,_0,_0.1)] border border-gray-400">
                        <img src="/images/Bravia_Oled.png" alt="Speakers" className="w-full h-40 object-cover rounded-lg" />
                        <motion.h1 className="text-4xl  tracking-wide text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }}>OLED</motion.h1>
                        <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.5 }} className="mt-4 text-lg text-black-300 leading-relaxed text-center">Enjoy pure blacks, vibrant colours and immersive sound to match the picture.</motion.p>
                        <a href="/products" className="mt-6 inline-block border-2 border-black text-black px-6 py-2 rounded-full transition-all duration-300 hover:bg-gray-300 hover:text-black self-center">Learn more</a>
                    </div>

                    <div className="w-[350px] h-[500px] flex flex-col justify-between bg-white/90 backdrop-blur-3xl rounded-2xl p-10 shadow-[0px_4px_30px_rgba(0,_0,_0,_0.1)] border border-gray-400">
                        <img src="/images/Bravia_bigscreen.png" alt="Earbuds" className="w-full h-40 object-cover rounded-lg" />
                        <motion.h1 className="text-4xl  tracking-wide text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }}>Big screen TVs</motion.h1>
                        <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.5 }} className="mt-4 text-lg text-black-300 leading-relaxed text-center">Get closer to your favourite entertainment with breathtaking depth and detail.</motion.p>
                        <a href="/products" className="mt-6 inline-block border-2 border-black text-black px-6 py-2 rounded-full transition-all duration-300 hover:bg-gray-300 hover:text-black self-center">Learn more</a>
                    </div>
                </div>
            </section>



            <section className="bg-white text-black min-h-screen flex flex-col items-center justify-center px-6 xl:px-0" data-aos="fade-up">
                <h1 className="text-6xl text-center mb-12">FIND YOUR INTEREST</h1>
                <div className="max-w-[1160px] w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                    <div className="w-[350px] h-[500px] flex flex-col justify-between bg-white/90 backdrop-blur-3xl rounded-2xl p-10 shadow-[0px_4px_30px_rgba(0,_0,_0,_0.1)] border border-gray-400">
                        <img src="/images/Bravia_gaming.png" alt="Headphones" className="w-full h-40 object-cover rounded-lg" />
                        <motion.h1 className="text-4xl  tracking-wide text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }}>Gaming</motion.h1>
                        <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.5 }} className="mt-4 text-lg text-black-300 leading-relaxed text-center">High-impact gaming BRAVIA TVs are designed to provide optimal performance with PlayStation 5® consoles.</motion.p>
                        <a href="/products" className="mt-6 inline-block border-2 border-black text-black px-6 py-2 rounded-full transition-all duration-300 hover:bg-gray-300 hover:text-black self-center">Learn more</a>
                    </div>

                    <div className="w-[350px] h-[500px] flex flex-col justify-between bg-white/90 backdrop-blur-3xl rounded-2xl p-10 shadow-[0px_4px_30px_rgba(0,_0,_0,_0.1)] border border-gray-400">
                        <img src="/images/Bravia_google.png" alt="Speakers" className="w-full h-40 object-cover rounded-lg" />
                        <motion.h1 className="text-4xl  tracking-wide text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }}>Google TV™</motion.h1>
                        <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.5 }} className="mt-4 text-lg text-black-300 leading-relaxed text-center">No more jumping from app to app. Google TV brings together your movies and shows from across your subscription, so they're in one place.</motion.p>
                        <a href="/products" className="mt-6 inline-block border-2 border-black text-black px-6 py-2 rounded-full transition-all duration-300 hover:bg-gray-300 hover:text-black self-center">Learn more</a>
                    </div>

                    <div className="w-[350px] h-[500px] flex flex-col justify-between bg-white/90 backdrop-blur-3xl rounded-2xl p-10 shadow-[0px_4px_30px_rgba(0,_0,_0,_0.1)] border border-gray-400">
                        <img src="/images/Bravia_XR.png" alt="Earbuds" className="w-full h-40 object-cover rounded-lg" />
                        <motion.h1 className="text-4xl  tracking-wide text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }}>Processor</motion.h1>
                        <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.5 }} className="mt-4 text-lg text-black-300 leading-relaxed text-center">Our Processor XR makes the difference, reproducing pictures and sound as you see and hear them in the real world.</motion.p>
                        <a href="/products" className="mt-6 inline-block border-2 border-black text-black px-6 py-2 rounded-full transition-all duration-300 hover:bg-gray-300 hover:text-black self-center">Learn more</a>
                    </div>
                </div>
            </section>


            <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 xl:px-0" data-aos="fade-up">
                <h1 className="text-6xl text-center mb-12">HOT NEW PRODUCTS</h1>
                <div className="max-w-[1160px] w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                    <div className="w-[350px] h-[500px] flex flex-col justify-between bg-black/10 backdrop-blur-3xl rounded-2xl p-10 shadow-[0px_4px_30px_rgba(255,255,255,0.1)] border border-black/10">
                        <img src="/images/Bravia_9.webp" alt="Headphones" className="w-full h-40 object-cover rounded-lg" />
                        <motion.h1 className="text-4xl  tracking-wide text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }}>BRAVIA 9</motion.h1>
                        <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.5 }} className="mt-4 text-lg text-black-300 leading-relaxed text-center">XR Processor | Mini LED | 4K Ultra HD | High Dynamic Range (HDR) | Smart TV (Google TV)</motion.p>
                        <a href="/products" className="mt-6 inline-block border-2 border-white text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-gray-300 hover:text-black self-center">Learn more</a>
                    </div>

                    <div className="w-[350px] h-[500px] flex flex-col justify-between bg-black/10 backdrop-blur-3xl rounded-2xl p-10 shadow-[0px_4px_30px_rgba(255,255,255,0.1)] border border-black/10">
                        <img src="/images/Bravia_8.webp" alt="Speakers" className="w-full h-40 object-cover rounded-lg" />
                        <motion.h1 className="text-4xl  tracking-wide text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }}>BRAVIA 8</motion.h1>
                        <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.5 }} className="mt-4 text-lg text-black-300 leading-relaxed text-center">XR Processor | OLED | 4K Ultra HD | High Dynamic Range (HDR) | Smart TV (Google TV)</motion.p>
                        <a href="/products" className="mt-6 inline-block border-2 border-white text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-gray-300 hover:text-black self-center">Learn more</a>
                    </div>

                    <div className="w-[350px] h-[500px] flex flex-col justify-between bg-black/10 backdrop-blur-3xl rounded-2xl p-10 shadow-[0px_4px_30px_rgba(255,255,255,0.1)] border border-black/10">
                        <img src="/images/Bravia_7.webp" alt="Earbuds" className="w-full h-40 object-cover rounded-lg" />
                        <motion.h1 className="text-4xl  tracking-wide text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }}>BRAVIA 7</motion.h1>
                        <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.5 }} className="mt-4 text-lg text-black-300 leading-relaxed text-center">XR Processor | Mini LED | 4K Ultra HD | High Dynamic Range (HDR) | Smart TV (Google TV)</motion.p>
                        <a href="/products" className="mt-6 inline-block border-2 border-white text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-gray-300 hover:text-black self-center">Learn more</a>
                    </div>
                </div>
            </section>

            <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 xl:px-0" data-aos="fade-up">
                <h1 className="text-6xl text-center mb-12">HOT NEW PRODUCTS</h1>
                <div className="max-w-[1160px] w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                    <div className="w-[350px] h-[500px] flex flex-col justify-between bg-black/10 backdrop-blur-3xl rounded-2xl p-10 shadow-[0px_4px_30px_rgba(255,255,255,0.1)] border border-black/10">
                        <img src="/images/Soundbar_1.webp" alt="Headphones" className="w-full h-40 object-cover rounded-lg" />
                        <motion.h1 className="text-4xl  tracking-wide text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }}>BRAVIA Theatre Quad</motion.h1>
                        <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.5 }} className="mt-4 text-lg text-black-300 leading-relaxed text-center">BRAVIA Theatre Quad | Flagship Home Theatre System | 360 Spatial Sound Mapping | Dolby Atmos®/DTS:X®</motion.p>
                        <a href="/products" className="mt-6 inline-block border-2 border-white text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-gray-300 hover:text-black self-center">Learn more</a>
                    </div>

                    <div className="w-[350px] h-[500px] flex flex-col justify-between bg-black/10 backdrop-blur-3xl rounded-2xl p-10 shadow-[0px_4px_30px_rgba(255,255,255,0.1)] border border-black/10">
                        <img src="/images/Soundbar_9.webp" alt="Speakers" className="w-full h-40 object-cover rounded-lg" />
                        <motion.h1 className="text-4xl  tracking-wide text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }}>BRAVIA Theatre Bar 9</motion.h1>
                        <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.5 }} className="mt-4 text-lg text-black-300 leading-relaxed text-center">Flagship Single Soundbar | 360 Spatial Sound Mapping | Dolby Atmos®/DTS:X®</motion.p>
                        <a href="/products" className="mt-6 inline-block border-2 border-white text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-gray-300 hover:text-black self-center">Learn more</a>
                    </div>

                    <div className="w-[350px] h-[500px] flex flex-col justify-between bg-black/10 backdrop-blur-3xl rounded-2xl p-10 shadow-[0px_4px_30px_rgba(255,255,255,0.1)] border border-black/10">
                        <img src="/images/Sounbar_8.webp" alt="Earbuds" className="w-full h-40 object-cover rounded-lg" />
                        <motion.h1 className="text-4xl tracking-wide text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }}>BRAVIA Theatre Bar 8</motion.h1>
                        <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.5 }} className="mt-4 text-lg text-black-300 leading-relaxed text-center">Single Soundbar | 360 Spatial Sound Mapping | Dolby Atmos®/DTS:X® </motion.p>
                        <a href="/products" className="mt-6 inline-block border-2 border-white text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-gray-300 hover:text-black self-center">Learn more</a>
                    </div>
                </div>
            </section>
        </div>
    );
}
