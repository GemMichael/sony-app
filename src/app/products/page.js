import React from 'react'
import Link from 'next/link';

export default function Products() {
  return (
    <>

      <section className="bg-black text-white min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90"></div>
        <div className="max-w-[1160px] w-full mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl ">Sony Bravia 8 K-77XR80</h1>
          <p className="text-xl mt-4 max-w-lg mx-auto">
          Feel Every Pixel, Hear Every Moment.
          </p>
        </div>
      </section>


      <section className="bg-white text-black py-16 px-6">
        <div className="max-w-[1160px] w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <h2 className="text-xl font-bold mt-4">SLIM AND CHIC DESIGN</h2>
            <p className="text-gray-600">Harmonic Presence | Slim One Slate</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mt-4">PURE BLACKS FOR REMARKABLE CONTRAST</h2>
            <p className="text-gray-600">XR OLED Contrast Booster</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mt-4">SOUND FROM THE SCREEN</h2>
            <p className="text-gray-600">Acoustic Surface Audio+™</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mt-4">LEVEL UP YOUR GAMING</h2>
            <p className="text-gray-600">Perfect for PlayStation 5</p>
          </div>
        </div>
      </section>


      <section className="bg-gray-100 text-black py-20 px-6">
        <div className="max-w-[1160px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/images/bravia/Bravia8_77inch.webp" alt="Sony Bravia Detail" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-4xl font-bold">Brilliant Colors. Breathtaking Clarity.</h2>
            <p className="text-lg text-gray-700 mt-4">
              The Sony Bravia XR OLED TV delivers unparalleled contrast, true-to-life colors, and immersive sound quality, powered by the latest Cognitive Processor XR.
            </p>
            <ul className="mt-6 space-y-3">
              <li>✔️ 120Hz refresh rate for smooth motion</li>
              <li>✔️ IMAX Enhanced & Dolby Vision support</li>
              <li>✔️ Google TV & Hands-free voice control</li>
            </ul>
          </div>
        </div>
      </section>


      <section className="bg-white text-black py-16 px-6">
        <div className="max-w-[1160px] w-full mx-auto">
          <h2 className="text-3xl font-bold text-center">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            <img src="/images/bravia banner.webp" alt="Bravia TV 1" className="rounded-lg shadow-lg hover:scale-105 transition-all duration-300" />
            <img src="/images/bravia banner.webp" alt="Bravia TV 2" className="rounded-lg shadow-lg hover:scale-105 transition-all duration-300" />
            <img src="/images/bravia banner.webp" alt="Bravia TV 3" className="rounded-lg shadow-lg hover:scale-105 transition-all duration-300" />
          </div>
        </div>
      </section>


      <section className="bg-gray-800 text-white py-16 px-6">
        <div className="max-w-[1160px] w-full mx-auto">
          <h2 className="text-3xl font-bold text-center">Compare Models</h2>
          <table className="w-full mt-8 border-collapse border border-gray-600">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="p-4">Feature</th>
                <th className="p-4">Bravia XR A90J</th>
                <th className="p-4">Bravia XR A80K</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border border-gray-600">Display Type</td>
                <td className="p-4 border border-gray-600">OLED</td>
                <td className="p-4 border border-gray-600">OLED</td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-600">Refresh Rate</td>
                <td className="p-4 border border-gray-600">120Hz</td>
                <td className="p-4 border border-gray-600">120Hz</td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-600">Audio</td>
                <td className="p-4 border border-gray-600">Acoustic Surface Audio+</td>
                <td className="p-4 border border-gray-600">Acoustic Surface Audio</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>


      <section className="bg-black text-white py-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Experience Sony Bravia XR</h2>
          <p className="text-lg text-gray-400 mt-4">Shop now and transform your home entertainment.</p>
          <Link href="/tv" className="mt-6 inline-block bg-white text-black px-6 py-3 rounded-full text-lg font-bold hover:bg-gray-300 transition-all duration-300">
            Buy Now
          </Link>
        </div>
      </section>
    </>
  )
}
