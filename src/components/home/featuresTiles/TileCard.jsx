"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import placeholder from "./placeholder.png";

const TileCard = ({ tile }) => {
  const [imgSrc, setImgSrc] = useState(tile?.image || placeholder);

  return (
    <div className=" border border-gray-300 shadow-2xl rounded-xl p-3 hover:shadow-xl transition duration-300 group bg-white">
      <div className="relative w-full h-48 overflow-hidden rounded-lg">
        <Image
          src={imgSrc}
          alt={tile?.title || "Tile Image"}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
          onError={() => setImgSrc(placeholder)}
        />

        {!tile?.inStock && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            Out of Stock
          </span>
        )}
      </div>

      <div className="mt-3 space-y-1">
        <h3 className="text-lg font-semibold line-clamp-1">
          {tile?.title || tile?.name}
        </h3>

        <p className="text-sm text-gray-500 capitalize">{tile?.category}</p>

        <p className="text-base font-bold text-black">${tile?.price}</p>
      </div>

      <Link href={`/tiles/${tile?._id}`}>
        <button className="mt-3 w-full py-2 bg-gray-800 text-white rounded-lg hover:bg-cyan-500 transition">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default TileCard;
