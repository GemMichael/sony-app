"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Tv() {
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
    { title: "Your home. Your cinema.", description: "Every detail, every colour, exactly as the creator intended. BRAVIA captures the full depth of the story, delivering rich, authentic visuals that pull you deeper into every scene.", image: "/images/bravia/Bravia_99.png" },
    { title: "Unparalled brightness, incomparably beautiful colours", description: "Step into a new realm of realism. Unlike other TVs, our expanded colour volume keeps images vivid and saturated even at high luminance levels, so you see pictures just as the creators intended.", image: "/images/bravia/Bravia_999.png" },
    { title: "Our most cinematic sound. World's first TV with Beam Tweeter.", description: "Immerse yourself in expansive cinema-like sound. With the world's first up-firing Beam Tweeter in a TV and two frame tweeters, you'll hear sound from the screen, just like you do at the cinema.", video: "https://sony.scene7.com/is/content/sonyglobalsolutions/71_BRAVIA9_AMAplus-Concept_10s_16x9_30fps-1?$originalDimensions$" },
    { title: "With BRAVIA Theatre, home becomes cinema", description: "Fill every corner of your room with soul-stirring cinematic sound. Pairing BRAVIA with BRAVIA Theatre brings the emotion and excitement of the movie theatre home, an unmatched audio-visual experience", image: "/images/bravia/Bravia_999.png" },
    { title: "Entertainment you love. With help from Google.", description: "Google TV™ brings together movies, shows, and more from across your apps and subscriptions and organises them just for you.", image: "/images/bravia/Bravia_9999.png" },
    { title: "Harmonic Presence. Blends in naturally.", description: "Everything in harmony. Our new TV designs grace your living space with shapes, materials, colours and surface treatments that blend beautifully with interior décor, walls and home theatre products.", video: "https://sony.scene7.com/is/content/sonyglobalsolutions/79_BRAVIA9_Design_12s_16x9_30fps?$originalDimensions$" },
    { title: "Play Like Never Before™", description: "BRAVIA captures the awesome graphics and soundscapes of today's games. Want more? Pair with a PlayStation®5 console for absolute immersion.", image: "/images/bravia/ps5.png" },
    { title: "Love the planet, smart for all", description: "BRAVIA is designed to harmonise with people's needs while respecting natural resources. We're accelerating our accessibility initiatives, enabling people who are blind or deaf to use Sony's devices, and expanding our environmental initiatives by incorporating recycled plastic into our products. Entertainment becomes more inclusive and enjoyable for all.", image: "/images/bravia/planet.jpg" }
  ];

  const tableData = [
    ["Dimensions and Weight", "", ""],
    ["Screen Size (Inch, measured diagonally", "75", "85"],
    ["Screen Size (Cm, measured diagonally", "189", "215"],
    ["Weight of package carton (Gross)", "56 kg", "68 kg"],
    ["Connectivity", "", ""],
    ["Wi-fi standard", "Wi-fi Certified 802.11a/b/g/n/ac/ax", "Wi-fi Certified 802.11a/b/g/n/ac/ax"],
    ["Wi-fi frequency", "2.4GHz/5GHz", "2.4GHz/5GHz"],
    ["Ethernet inputs", "1(side)", "1(side)"],
    ["Picture", "", ""],
    ["Picture Processor", "XR Processor", "XR Processor"],
  ];

  return (
    <div className="text-white font-inter">


      <section className="h-screen w-full bg-black relative overflow-hidden">
        <video ref={videoRef} autoPlay loop muted className="w-full h-full object-cover">
          <source src="https://sony.scene7.com/is/content/sonyglobalsolutions/Sony_FY24_TV_Category-PT-d?$originalDimensions$" type="video/mp4" />
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
          Come together around the screen and immerse together in the scene with true-to-life picture and surround sound made for movies.
        </motion.p>
        <a
          href="/tvlandingpage"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition"
        >
          Explore the Latest Sony Bravia TV
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
          Discover more about Sony Bravia technology and elevate your home entertainment setup.
        </p>

        <div className="overflow-x-auto">
          <table className="border-collapse border border-gray-500 text-white">
            <thead>
              <tr>
                <th className="border border-gray-500 px-4 py-2">2 models</th>
                <th className="border border-gray-500 px-4 py-2">189 cm (75") K-75XR90</th>
                <th className="border border-gray-500 px-4 py-2">215 cm (85") K-85XR90</th>
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
