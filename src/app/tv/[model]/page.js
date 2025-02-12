"use client";

import { useParams } from "next/navigation";
import specs from "./specs.json";
import Link from "next/link";

const ModelPage = () => {
  const { model } = useParams();


  const tv = specs.find((tv) => tv.model === model);

  if (!tv) {
    return <div>TV model not found</div>;
  }

  return (
    <>
      <section className="bg-black text-white min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90"></div>
        <div className="max-w-[1160px] w-full mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl font-extrabold">{tv.name}</h1>
          <p className="text-xl mt-4 max-w-lg mx-auto">{tv.description}</p>
        </div>
      </section>

      <section className="bg-gray-100 text-black py-20 px-6">
        <div className="max-w-[1160px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src={tv.image} alt={tv.name} className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-4xl font-bold">Specifications</h2>
            <ul className="mt-6 space-y-3">
              {tv.specifications.map((spec, index) => (
                <li key={index}>✔️ {spec}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Experience Sony Bravia XR</h2>
          <p className="text-lg text-gray-400 mt-4">Shop now and transform your home entertainment.</p>
          <Link href="/tv" className="mt-6 inline-block bg-white text-black px-6 py-3 rounded-full text-lg font-bold hover:bg-gray-300 transition-all duration-300">
            Back to All TVs
          </Link>
        </div>
      </section>
    </>
  );
};

export default ModelPage;
