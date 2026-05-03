import React from "react";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-linear-to-br from-slate-700 via-slate-800 to-slate-900 px-4 overflow-hidden">
  
  {/* Glow Effects */}
  <div className="absolute w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full top-10 left-10"></div>
  <div className="absolute w-72 h-72 bg-purple-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

  {/* Container */}
  <div className="relative w-full max-w-5xl mx-auto text-center text-white space-y-8">
    
    {/* Badge */}
    <p className="inline-block mt-5 px-4 py-1 text-xs tracking-widest uppercase bg-white/10 border border-white/20 rounded-full backdrop-blur-md">
      Premium Tile Collection
    </p>

    {/* Heading */}
    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
      Transform Your Space <br />
      <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
        With Modern Tile Gallery
      </span>
    </h1>

    {/* Description */}
    <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
      Discover premium ceramic, marble & designer tiles crafted to elevate your interiors with modern elegance and timeless style.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
      <Link
        href="/tiles"
        className="px-7 py-3 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition shadow-lg hover:shadow-cyan-500/30"
      >
        Browse Tiles
      </Link>

    
    </div>

    {/* Stats Section */}
    <div className="grid grid-cols-3 gap-6 pt-10 max-w-xl mx-auto text-center mb-5">
      
      <div className="bg-white/5 border border-white/10 rounded-xl py-4 backdrop-blur-md">
        <h3 className="text-2xl font-bold text-cyan-400">500+</h3>
        <p className="text-white/60 text-sm">Tile Designs</p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-xl py-4 backdrop-blur-md">
        <h3 className="text-2xl font-bold text-cyan-400">50+</h3>
        <p className="text-white/60 text-sm">Categories</p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-xl py-4 backdrop-blur-md">
        <h3 className="text-2xl font-bold text-cyan-400">24/7</h3>
        <p className="text-white/60 text-sm">Support</p>
      </div>

    </div>

  </div>
</div>
  );
}
