import React from 'react'
import Link from "next/link";

export default function Banner() {
  return (
 <div className="min-h-[90vh] flex items-center justify-center bg-linear-to-br from-slate-700 via-slate-800 to-slate-700 px-4">

      {/* Container */}
      <div className="w-full max-w-285 mx-auto text-center text-white space-y-8">

        {/* Badge */}
        <p className="inline-block px-4 py-1 text-xs tracking-widest uppercase bg-white/10 border border-white/20 rounded-full">
          Premium Tile Collection
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Design Spaces with <br />
          <span className="text-cyan-400">Modern Tile Gallery</span>
        </h1>

        {/* Description */}
        <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg">
          Explore premium ceramic, marble, wooden, and designer tiles.
          Build beautiful interiors with elegant textures and modern aesthetics.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

          <Link
            href="/tiles"
            className="px-7 py-3 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition shadow-lg"
          >
            Browse Tiles
          </Link>

          {/* <Link
            href="/auth/register"
            className="px-7 py-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition"
          >
            Join Community
          </Link> */}

        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-6 pt-10 max-w-xl mx-auto text-center">

          <div>
            <h3 className="text-2xl font-bold">500+</h3>
            <p className="text-white/60 text-sm">Tile Designs</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">50+</h3>
            <p className="text-white/60 text-sm">Categories</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">24/7</h3>
            <p className="text-white/60 text-sm">Support</p>
          </div>

        </div>

      </div>
    </div>
  )
}
