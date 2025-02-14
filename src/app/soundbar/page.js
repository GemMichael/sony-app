"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Soundbar() {
  const videoRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const triggerRef = useRef(null);


  useEffect(() => {
    if (!videoRef.current) return;

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

    observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);


  useEffect(() => {
    AOS.init({ duration: 1000 });

    gsap.registerPlugin(ScrollTrigger);
    const container = scrollContainerRef.current;
    if (!container) return;

    let sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${window.innerWidth * (sections.length - 1)}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      }
    });
  }, []);
  const contentData = [
    { title: "Rewriting the rules of surround sound", description: "Go beyond conventional surround sound. Combining physical and phantom speakers, BRAVIA Theatre Bar 9 creates a wider surround sound field for outstanding immersion.", image: "/images/soundbar/Soundbar1.webp" },
    { title: "Makes everywhere the best seat", description: "It doesn't matter which seat you're in. It doesn't even matter what your room's acoustics are like. Sound Field Optimisation lets everyone experience cinema surround sound.", image: "/images/soundbar/Soundbar2.webp" },
    { title: "Innovative acoustic design with 13 speaker units", description: "There's more to great surround sound than signal processing alone. Your physical speakers need to deliver exceptional acoustic performance, too—and BRAVIA Theatre Bar 9 doesn't disappoint.", image: "/images/soundbar/Soundbar3.webp" },
    { title: "So easy to use", description: "BRAVIA Theatre Bar 9 makes surround sound simple. From initial setup to smartphone control, it's all about minimum effort, maximum enjoyment.", image: "/images/soundbar/Soundbar4.webp" },
    { title: "With BRAVIA, home becomes cinema", description: "Bring the emotion and excitement of a cinema home. Pair BRAVIA Theatre Bar 9 with a BRAVIA TV for an unmatched audio-visual experience, immersing you in every scene as never before.", image: "/images/soundbar/Soundbar5.webp" },
    { title: "Experience more with the latest formats", description: "Get the most out of all your entertainment. BRAVIA Theatre Bar 9 supports the latest audio and visual formats, taking movies, games and music to a whole new level.", image: "/images/soundbar/Soundbar6.webp" },
    { title: "From cinema to music venue", description: "Give your music the sound stage it deserves. With BRAVIA Theatre Bar 9 it's easy to stream your favourite tracks and enjoy every detail in high-quality upmixed sound.", image: "/images/soundbar/Soundbar7.webp" },
    { title: "Environment in mind", description: "Sony's home audio products are designed not only for excellent sound experience but also with the environment in mind. We are committed to using less virgin plastic in our products and packaging.", image: "/images/soundbar/Soundbar8.webp" }
  ];

  const tableData = [
    ["Dimensions and Weight", "", ""],
    ["Main unit size - Body only (W X H X D)", "1300 x 64 x 133mm"],
    ["Main unit size - Body only (W X H X D) (Inch) ", "51 1/4 x 2 5/8 x 4 1/2 in", ""],
    ["Weight", "5.5 kg", ""],
    ["Amplifier", "", ""],
    ["Amplifier type", "Digital Amplifier, S-Master HX", ""],
    ["Amplifier channels", "13 ch", ""],
    ["EInterface", "", ""],
    ["Input and output terminals", "S-Center Out", ""],
    ["Wi-fi", "Yes", ""],
  ];

  return (
    <div className="text-white font-inter">


      <section className="h-screen w-full bg-black relative overflow-hidden">
        <video ref={videoRef} autoPlay loop muted className="w-full h-full object-cover">
          <source src="https://sony.scene7.com/is/content/sonyglobalsolutions/Bar_9_Product_Intro_Plate_1920x804?$originalDimensions$" type="video/mp4" />
        </video>
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>

        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>


      <section className="text-center py-20 px-4 bg-black">
        <motion.h1 className="text-5xl tracking-wide"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}>
          Cinema is Coming Home
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="mt-6 text-lg max-w-3xl mx-auto tracking-wide">
          Our top-of-the-range soundbar features 360 Spatial Sound Mapping with 13 speaker units, a new generation of surround technology for immersive, cinematic sound.
        </motion.p>
        <a
          href="/soundbarlandingpage"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition"
        >
          Explore the Latest Soundbar
        </a>
      </section>


      <section ref={triggerRef} className="relative h-screen w-full overflow-hidden bg-black">
        <div ref={scrollContainerRef} className="flex w-[600vw] h-full">
          {contentData.map((content, index) => (
            <motion.div
              key={index}
              className="w-screen h-full flex-shrink-0 flex flex-col items-center justify-center p-10 text-center panel"
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }} 
            >
              <motion.h2 className="text-4xl mb-4" whileHover={{ scale: 1.1, color: "#FFD700" }} // Slight zoom & color change
                transition={{ duration: 0.3 }}>{content.title}</motion.h2>
              <p className="text-lg max-w-2xl mx-auto mb-6 text-gray-500">{content.description}</p>

              {content.video ? (
                <motion.video
                  src={content.video}
                  autoPlay
                  loop
                  muted
                  className="w-[1200px] h-[600px] rounded-xl shadow-lg mx-auto object-cover"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    src={content.image}
                    alt={content.title}
                    width={1200}
                    height={600}
                    className="w-[1200px] h-[600px] rounded-xl shadow-lg mx-auto object-cover"
                  />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>




      <section className="py-20 bg-black text-center flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-6">Specifications</h2>
        <p className="text-lg mb-8 max-w-3xl">
          Discover more about Sony Soundbar and elevate your home entertainment setup.
        </p>

        <div className="overflow-x-auto">
          <table className="border-collapse border border-gray-500 text-white">
            <thead>
              <tr>
                <th className="border border-gray-500 px-4 py-2">Bravia Theatre Bar 9</th>
                <th className="border border-gray-500 px-4 py-2"></th>
                
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, colIndex) => (
                    <td key={colIndex} className="border border-gray-500 px-4 py-2">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
