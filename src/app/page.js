"use client";

export default function Home() {
  return (
    <>
      <section className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="max-w-[1160px] w-full mx-auto px-6">
          <h1 className="text-8xl text-center">
            Welcome to SONY
          </h1>
          <p className="text-xl mt-10 text-center">Refined Innovation. Empowering Your World with Modern Elegance</p>
        </div>
      </section>
      <section className="bg-white text-black min-h-screen flex items-center justify-center">
        <div className="max-w-[1160px] w-full mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold underline decoration-black tracking-wide">
            Explore Our Products
          </h1>
          <p className="mt-4 text-center">
            Discover the latest innovations and technologies at Sony.
          </p>
        </div>
      </section>
      <section className="bg-black text-white min-h-screen flex items-center justify-center px-6 xl:px-0">
        <div className="max-w-[1160px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:pl-10 bg-gray/10 backdrop-blur-xl rounded-2xl p-10 shadow-[0px_4px_30px_rgba(255,255,255,0.1)] border border-white/10">
            <h1 className="text-5xl font-semi-bold tracking-wide">Bravia Televisions</h1>
            <p className="mt-4 text-lg max-w-md text-gray-300 leading-relaxed">
              Transform your living room into a cinematic masterpiece with the all-new Sony Bravia TV. Where every detail comes to life.
            </p>
            <div className="mt-6">
              <a href="/products" className="mt-6 inline-block border-2 border-white text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-white hover:text-black">
                Explore more
              </a>
            </div>
          </div>
          <div className="relative w-full flex flex-col items-center gap-6">
            <div className="relative w-full max-w-sm">
              <img src="/images/bravia banner.webp" alt="Bravia TV 1" className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.6)]" />
            </div>
            <div className="relative w-full max-w-sm translate-x-6">
              <img src="/images/bravia banner1.webp" alt="Bravia TV 2" className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.6)]" />
            </div>
            <div className="relative w-full max-w-sm -translate-x-6">
              <img src="/images/bravia banner2.webp" alt="Bravia TV 3" className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.6)]" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-800 text-white min-h-screen flex items-center justify-center px-6 xl:px-0">
        <div className="max-w-[1160px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:pl-10 bg-black/10 backdrop-blur-xl rounded-2xl p-10 shadow-[0px_4px_30px_rgba(255,255,255,0.1)] border border-black/10">
            <h1 className="text-4xl font-bold">Soundbars</h1>
            <p className="mt-4 text-lg max-w-md text-gray-300 leading-relaxed">
              Bring everyone together with a sound experience that’s immersive, clear, and powerful. Sony Soundbars redefine what it means to enjoy home entertainment.
            </p>
            <a href="/products" className="mt-6 inline-block border-2 border-white text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-white hover:text-black">
                Explore more
              </a>
          </div>
          <div className="relative w-full flex flex-wrap gap-1 justify-center">
            <div className="relative w-2/3">
              <img src="/images/soundbar banner.webp" alt="Soundbar 1" className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="relative w-1/2 -mt-4">
              <img src="/images/soundbar banner1.webp" alt="Soundbar 2" className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="relative w-3/4 -mt-6">
              <img src="/images/soundbar banner2.jpg" alt="Soundbar 3" className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-black min-h-screen flex items-center justify-center px-6 xl:px-0">
        <div className="max-w-[1160px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:pl-10 bg-white/90 backdrop-blur-3xl rounded-2xl p-10 shadow-[0px 4px 30px rgba(0, 0, 0, 0.1)] border border-gray-400">
            <h1 className="text-3xl font-semibold">Headphones</h1>
            <p className="mt-4 text-lg max-w-md text-black-300 leading-relaxed">
              From artificial intelligence to next-gen gaming, Sony continues to break boundaries with innovative products.
            </p>
            <a href="/products" className="mt-6 inline-block border-2 border-black text-black px-6 py-2 rounded-full transition-all duration-300 hover:bg-gray-300 hover:text-black">
                Explore more
              </a>
          </div>
          <div className="relative w-full grid grid-cols-3 grid-rows-1 gap-4">
            <div className="relative col-span-2">
              <img src="/images/headphone banner 1.jpg" alt="Headphones 1" className="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="relative">
              <img src="/images/headphone banner.jpg" alt="Headphones 2" className="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="relative">
              <img src="/images/headphone banner.jpg" alt="Headphones 3" className="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white min-h-screen flex items-center justify-center px-6 xl:px-0">
        <div className="max-w-[1160px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:pl-10 bg-gray/10 backdrop-blur-xl rounded-2xl p-10 shadow-[0px_4px_30px_rgba(255,255,255,0.1)] border border-white/10">
            <h1 className="text-3xl font-semibold">Speakers</h1>
            <p className="mt-4 text-lg max-w-md text-gray-300 leading-relaxed">
              Sony is committed to delivering exceptional quality in all its products, ensuring reliability and performance.
            </p>
            <a href="/products" className="mt-6 inline-block border-2 border-white text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-white hover:text-black">
                Explore more
              </a>
          </div>
          <div className="relative w-full flex flex-col gap-4 items-center">
            <div className="relative w-2/3">
              <img src="/images/speakers banner.png" alt="Speaker 1" className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="relative w-3/4 -mt-6">
              <img src="/images/speakers banner 1.png" alt="Speaker 2" className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="relative w-1/2 -mt-6">
              <img src="/images/speakers banner 2.png" alt="Speaker 3" className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-black min-h-screen flex items-center justify-center px-6 xl:px-0">
        <div className="max-w-[1160px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:pl-10 bg-white/90 backdrop-blur-3xl rounded-2xl p-10 shadow-[0px 4px 30px rgba(0, 0, 0, 0.1)] border border-gray-400">
            <h1 className="text-3xl font-semibold">Cameras</h1>
            <p className="mt-4 text-lg max-w-md text-black-300 leading-relaxed">
              Join us in the journey to explore the future of technology, with our vision for the next generation of innovation.
            </p>
            <a href="/products" className="mt-6 inline-block border-2 border-black text-black px-6 py-2 rounded-full transition-all duration-300 hover:bg-gray-300 hover:text-black">
                Explore more
              </a>
          </div>
          <div className="relative w-full grid grid-cols-2 grid-rows-2 gap-4">
            <div className="col-span-1 row-span-2">
              <img src="/images/camera banner.webp" alt="Camera 1" className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="col-span-1">
              <img src="/images/camera banner.webp" alt="Camera 2" className="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="col-span-1">
              <img src="/images/camera banner.webp" alt="Camera 3" className="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
