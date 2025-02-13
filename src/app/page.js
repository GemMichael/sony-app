"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";


const products = [
  { id: 1, title: "1000X SERIES", href: "/tv", imgSrc: "/images/1000x.webp", alt: "Camera 1" },
  { id: 2, title: "INZONE M10s", href: "/tv", imgSrc: "/images/M10s.webp", alt: "Camera 1" },
  { id: 3, title: "BRAVIA 9", href: "/tv", imgSrc: "/images/Bravia_9.webp", alt: "Camera 1" },
  { id: 4, title: "Bravia Theatre Bar 9", href: "/tv", imgSrc: "/images/Soundbar_9.webp", alt: "Camera 1" },
  { id: 5, title: "BRAVIA 8", href: "/tv", imgSrc: "/images/Bravia_8.webp", alt: "Camera 1" },
  { id: 6, title: "Bravia Theatre Bar 8", href: "/tv", imgSrc: "/images/Sounbar_8.webp", alt: "Camera 1" },
  { id: 7, title: "LinkBuds Fit", href: "/tv", imgSrc: "/images/linkBud.webp", alt: "Camera 1" },
];

const text = "Refined Innovation. Empowering Your World with Modern Elegance".split(" ");

export default function Home() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;


    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        carousel.scrollLeft += e.deltaY * 1.5;
      }
    };

    let isDown = false;
    let startX;
    let scrollLeft;

    const handleTouchStart = (e) => {
      isDown = true;
      startX = e.touches[0].pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    };

    const handleTouchMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.touches[0].pageX - carousel.offsetLeft;
      const walk = (x - startX) * 1; 
      carousel.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
      isDown = false;
    };

    carousel.addEventListener("wheel", handleWheel, { passive: false });
    carousel.addEventListener("touchstart", handleTouchStart, { passive: true });
    carousel.addEventListener("touchmove", handleTouchMove, { passive: false });
    carousel.addEventListener("touchend", handleTouchEnd);

    return () => {
      carousel.removeEventListener("wheel", handleWheel);
      carousel.removeEventListener("touchstart", handleTouchStart);
      carousel.removeEventListener("touchmove", handleTouchMove);
      carousel.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);


  return (
    <>
      <section className="bg-black text-white min-h-screen flex items-center justify-center" data-aos="fade-up">
        <div className="max-w-[1160px] w-full mx-auto px-6">
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl md:text-6xl lg:text-8xl text-center">
            Welcome to SONY
          </motion.h1>
          <motion.p className="text-l md:text-l lg:text-xl mt-10 text-center tracking-wide">
            {text.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 1 }}
                className="inline-block mr-2"
                viewport={{ once: true }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.p>
        </div>
      </section>
      <section className="bg-white text-black min-h-screen flex flex-col items-center justify-center" data-aos="fade-up">
      <div className="max-w-[1160px] w-full mx-auto px-6 text-center">
        <motion.h1
          className="text-4xl font-bold underline decoration-black tracking-wide mt-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Explore Our Products
        </motion.h1>
        <p className="mt-4 text-center">Discover the latest innovations and technologies at Sony.</p>
      </div>

      <div className="relative mt-10 w-full flex justify-center">
        <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white via-transparent to-transparent pointer-events-none" />
        <div
          ref={carouselRef}
          className="w-full max-w-6xl overflow-x-hidden flex gap-6 py-10 px-4 scroll-smooth no-scrollbar"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="min-w-[350px] bg-white shadow-lg rounded-xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <Link href={product.href} target="_blank">
                <img src={product.imgSrc} alt={product.alt} className="w-full h-60 object-cover" />
                <div className="p-4 text-center font-semibold">{product.title}</div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white via-transparent to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
      <section className="bg-black text-white min-h-screen flex items-center justify-center px-6 xl:px-0" data-aos="fade-up">
        <div className="max-w-[1160px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:pl-10 bg-gray/10 backdrop-blur-xl rounded-2xl p-10 shadow-[0px_4px_30px_rgba(255,255,255,0.1)] border border-white/10">
            <motion.h1 className="text-5xl font-semi-bold tracking-wide" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }} >Bravia Televisions</motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
              className="mt-4 text-lg max-w-md text-gray-300 leading-relaxed"
            >
              Experience the brilliance of Sony Bravia TVs—breathtaking clarity, vibrant colors, and immersive sound. Elevate your home entertainment with cutting-edge technology and sleek design.
            </motion.p>
            <div className="mt-6">
              <a href="/tvlandingpage" className="mt-6 inline-block border-2 border-white text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-white hover:text-black">
                Explore more
              </a>
            </div>
          </div>
          <div className="relative w-full grid grid-cols-2 grid-rows-2 gap-4">
            <div className="col-span-1 row-span-2">
              <img src="/images/bravia banner.webp" alt="Camera 1" className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:rotate-2" />
            </div>
            <div className="col-span-1">
              <img src="/images/bravia banner1.webp" alt="Camera 2" className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:-rotate-3" />
            </div>
            <div className="col-span-1">
              <img src="/images/bravia banner2.webp" alt="Camera 3" className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:rotate-6" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-800 text-white min-h-screen flex items-center justify-center px-6 xl:px-0" data-aos="fade-up">
        <div className="max-w-[1160px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:pl-10 bg-black/10 backdrop-blur-xl rounded-2xl p-10 shadow-[0px_4px_30px_rgba(255,255,255,0.1)] border border-black/10">
            <motion.h1 className="text-5xl font-semi-bold tracking-wide" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }} >Soundbars</motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
              className="mt-4 text-lg max-w-md text-gray-300 leading-relaxed"
            >
              Upgrade your audio with Sony Soundbars—crystal-clear dialogue, deep bass, and immersive surround sound in a sleek design. Perfect for movies, music, and gaming, Sony brings every sound to life. Transform your space today!
            </motion.p>
            <a href="/soundbarlandingpage" className="mt-6 inline-block border-2 border-white text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-white hover:text-black">
              Explore more
            </a>
          </div>
          <div className="relative w-full grid grid-cols-2 grid-rows-2 gap-4">
            <div className="col-span-1 row-span-2">
              <img src="/images/bravia banner.webp" alt="Camera 1" className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:rotate-2" />
            </div>
            <div className="col-span-1">
              <img src="/images/bravia banner1.webp" alt="Camera 2" className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:-rotate-3" />
            </div>
            <div className="col-span-1">
              <img src="/images/bravia banner2.webp" alt="Camera 3" className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:rotate-6" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-black min-h-screen flex items-center justify-center px-6 xl:px-0" data-aos="fade-up">
        <div className="max-w-[1160px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:pl-10 bg-white/90 backdrop-blur-3xl rounded-2xl p-10 shadow-[0px 4px 30px rgba(0, 0, 0, 0.1)] border border-gray-400">
            <motion.h1 className="text-5xl font-semi-bold tracking-wide" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }} >Headphones</motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
              className="mt-4 text-lg max-w-md text-black-300 leading-relaxed"
            >
              Upgrade your audio with Sony Soundbars—crystal-clear dialogue, deep bass, and immersive surround sound in a sleek design. Perfect for movies, music, and gaming, Sony brings every sound to life. Transform your space today!
            </motion.p>
            <a href="/headphonelandingpage" className="mt-6 inline-block border-2 border-black text-black px-6 py-2 rounded-full transition-all duration-300 hover:bg-gray-300 hover:text-black">
              Explore more
            </a>
          </div>
          <div className="relative w-full grid grid-cols-2 grid-rows-2 gap-4">
            <div className="col-span-1 row-span-2">
              <img src="/images/bravia banner.webp" alt="Camera 1" className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:rotate-2" />
            </div>
            <div className="col-span-1">
              <img src="/images/bravia banner1.webp" alt="Camera 2" className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:-rotate-3" />
            </div>
            <div className="col-span-1">
              <img src="/images/bravia banner2.webp" alt="Camera 3" className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:rotate-6" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white min-h-screen flex items-center justify-center px-6 xl:px-0" data-aos="fade-up">
        <div className="max-w-[1160px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:pl-10 bg-gray/10 backdrop-blur-xl rounded-2xl p-10 shadow-[0px_4px_30px_rgba(255,255,255,0.1)] border border-white/10">
            <motion.h1 className="text-5xl font-semi-bold tracking-wide" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }} >Speakers</motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
              className="mt-4 text-lg max-w-md text-black-300 leading-relaxed"
            >
              Feel the beat with Sony Speakers—rich bass, clear vocals, and immersive sound that fills any space. Whether at home or on the go, experience music the way it was meant to be heard.
            </motion.p>
            <a href="/speakerlandingpage" className="mt-6 inline-block border-2 border-white text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-white hover:text-black">
              Explore more
            </a>
          </div>
          <div className="relative w-full grid grid-cols-2 grid-rows-2 gap-4">
            <div className="col-span-1 row-span-2">
              <img src="/images/bravia banner.webp" alt="Camera 1" className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:rotate-2" />
            </div>
            <div className="col-span-1">
              <img src="/images/bravia banner1.webp" alt="Camera 2" className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:-rotate-3" />
            </div>
            <div className="col-span-1">
              <img src="/images/bravia banner2.webp" alt="Camera 3" className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:rotate-6" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-black min-h-screen flex items-center justify-center px-6 xl:px-0" data-aos="fade-up">
        <div className="max-w-[1160px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:pl-10 bg-white/90 backdrop-blur-3xl rounded-2xl p-10 shadow-[0px 4px 30px rgba(0, 0, 0, 0.1)] border border-gray-400">
            <motion.h1 className="text-5xl font-semi-bold tracking-wide" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }} >Cameras</motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
              className="mt-4 text-lg max-w-md text-black-300 leading-relaxed"
            >
              From breathtaking landscapes to fast-moving action, Sony Cameras deliver unmatched clarity, speed, and precision. Elevate your photography with advanced sensors, intelligent autofocus, and industry-leading image quality.
            </motion.p>
            <a href="/cameralandingpage" className="mt-6 inline-block border-2 border-black text-black px-6 py-2 rounded-full transition-all duration-300 hover:bg-gray-300 hover:text-black">
              Explore more
            </a>
          </div>
          <div className="relative w-full grid grid-cols-2 grid-rows-2 gap-4">
            <div className="col-span-1 row-span-2">
              <img src="/images/bravia banner.webp" alt="Camera 1" className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:rotate-2" />
            </div>
            <div className="col-span-1">
              <img src="/images/bravia banner1.webp" alt="Camera 2" className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:-rotate-3" />
            </div>
            <div className="col-span-1">
              <img src="/images/bravia banner2.webp" alt="Camera 3" className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:rotate-6" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
