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
    { title: "Play Like Never Before™", description: "BRAVIA captures the awesome graphics and soundscapes of today's games. Want more? Pair with a PlayStation®5 console for absolute immersion.", image: "/images/bravia/ps5.png" }
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
        <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition">
          Explore the Latest Sony Bravia TV
        </button>
      </section>


      <section ref={triggerRef} className="relative h-screen w-full overflow-hidden bg-black">
  <div ref={scrollContainerRef} className="flex w-[600vw] h-full">
    {contentData.map((content, index) => (
      <div key={index} className="w-screen h-full flex-shrink-0 flex flex-col items-center justify-center p-10 text-center panel">
        <h2 className="text-4xl mb-4">{content.title}</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6 text-gray-500">{content.description}</p>
        

        {content.video ? (
          <video 
            src={content.video} 
            autoPlay 
            loop 
            muted 
            className="w-[1200px] h-[600px] rounded-xl shadow-lg mx-auto object-cover"
          />
        ) : (
          <Image 
            src={content.image} 
            alt={content.title} 
            width={1200} 
            height={600} 
            className="w-[1200px] h-[600px] rounded-xl shadow-lg mx-auto object-cover"
          />
        )}
      </div>
    ))}
  </div>
</section>




      <section className="py-20 bg-black text-center h-screen flex items-center justify-center">
        <div>
          <h2 className="text-4xl font-bold">Experience More</h2>
          <p className="text-lg mt-4 max-w-3xl mx-auto">
            Discover more about Sony Bravia technology and elevate your home entertainment setup.
          </p>
        </div>
      </section>
    </div>
  );
}
