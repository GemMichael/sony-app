"use client";

import Link from "next/link";

const tvs = [
  {
    id: "bravia-xr-a90j",
    name: "Sony Bravia XR A90J",
    description: "4K OLED with Acoustic Surface Audio+.",
    image: "/images/bravia banner.webp",
  },
  {
    id: "bravia-xr-a80k",
    name: "Sony Bravia XR A80K",
    description: "4K OLED with Cognitive Processor XR.",
    image: "/images/bravia banner.webp",
  },
  {
    id: "bravia-xr-x95k",
    name: "Sony Bravia XR X95K",
    description: "4K Mini LED with XR Contrast Booster.",
    image: "/images/bravia banner.webp",
  },
  {
    id: "bravia-xr-x95ke",
    name: "Sony Bravia XR X95K",
    description: "4K Mini LED with XR Contrast Booster.",
    image: "/images/bravia banner.webp",
  },
];

export default function AllTVsPage() {
  return (
    <section className="bg-black text-white min-h-screen py-16 px-6">
      <div className="max-w-[1160px] mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-12">Sony TVs</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tvs.map((tv) => (
            <Link key={tv.id} href={`/tv/${tv.id}`}>
              <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <img src={tv.image} alt={tv.name} className="rounded-lg shadow" />
                <h2 className="text-2xl font-bold mt-4">{tv.name}</h2>
                <p className="text-gray-400 mt-2">{tv.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
