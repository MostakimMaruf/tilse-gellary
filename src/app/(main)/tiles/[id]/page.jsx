"use client";

import Image from "next/image";
import placeholder from "@/components/home/featuresTiles/placeholder.png";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function TileDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const [session, setSession] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  const [tile, setTile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState(placeholder);

  useEffect(() => {
    authClient.getSession().then((res) => {
      setSession(res.data);
      setAuthLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!authLoading && session === null) {
      router.push("/auth/signin");
    }
  }, [authLoading, session, router]);

  useEffect(() => {
    if (!id) return;

    fetch(`/api/tiles/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTile(data);
        setImgSrc(data?.image || placeholder);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (authLoading) {
    return <div className="p-10 text-center">Checking authentication...</div>;
  }

  if (loading) {
    return <div className="p-10 text-center">Loading tile details...</div>;
  }

  if (!tile) {
    return <div className="p-10 text-center">Tile not found</div>;
  }

  return (
   <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10 items-start">
  
  {/* Image */}
  <div className="group overflow-hidden rounded-2xl shadow-md">
    <Image
      src={imgSrc}
      alt={tile.title || "Tile image"}
      width={600}
      height={600}
      className="w-full object-cover rounded-2xl transition duration-500 group-hover:scale-105"
      onError={() => setImgSrc(placeholder)}
    />
  </div>

  {/* Details */}
  <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
    
    {/* Category */}
    <span className="text-xs text-cyan-500 font-semibold uppercase tracking-wider bg-cyan-50 px-3 py-1 rounded-full inline-block">
      {tile.category}
    </span>

    {/* Title */}
    <h1 className="text-3xl md:text-4xl font-bold mt-3 text-gray-800 leading-tight">
      {tile.title}
    </h1>

    {/* Description */}
    <p className="text-gray-500 mt-4 leading-relaxed">
      {tile.description}
    </p>

    {/* Divider */}
    <div className="border-t my-6"></div>

    {/* Info */}
    <div className="space-y-3 text-sm text-gray-700">
      <p>
        <span className="font-semibold text-gray-900">Material:</span>{" "}
        {tile.material}
      </p>

      <p>
        <span className="font-semibold text-gray-900">Dimensions:</span>{" "}
        {tile.dimensions}
      </p>

      <p className="flex items-center gap-2">
        <span className="font-semibold text-gray-900">Status:</span>

        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            tile.inStock
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {tile.inStock ? "Available" : "Out of Stock"}
        </span>
      </p>
    </div>

    {/* Price + Button */}
    <div className="flex items-center justify-between mt-8">
      <h2 className="text-3xl font-bold text-gray-900">
        ${tile.price}
      </h2>

      <button className="bg-cyan-500 text-white px-5 py-2.5 rounded-lg hover:bg-cyan-600 active:scale-95 transition shadow-sm">
        Buy Now
      </button>
    </div>

  </div>
</div>
  );
}