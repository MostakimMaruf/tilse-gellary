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

  // ✅ Get session (stable way)
  useEffect(() => {
    authClient.getSession().then((res) => {
      setSession(res.data);
      setAuthLoading(false);
    });
  }, []);

  // ✅ Redirect if not logged in
  useEffect(() => {
    if (!authLoading && session === null) {
      router.push("/auth/signin");
    }
  }, [authLoading, session, router]);

  // ✅ Fetch tile
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

  // ⏳ Auth loading
  if (authLoading) {
    return <div className="p-10 text-center">Checking authentication...</div>;
  }

  // ⏳ Data loading
  if (loading) {
    return <div className="p-10 text-center">Loading tile details...</div>;
  }

  // ❌ Not found
  if (!tile) {
    return <div className="p-10 text-center">Tile not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
      
      {/* Image */}
      <div>
        <Image
          src={imgSrc}
          alt={tile.title || "Tile image"}
          width={600}
          height={600}
          className="rounded-lg w-full object-cover"
          onError={() => setImgSrc(placeholder)}
        />
      </div>

      {/* Details */}
      <div>
        <span className="text-sm text-blue-600 uppercase">
          {tile.category}
        </span>

        <h1 className="text-4xl font-bold mt-2">
          {tile.title}
        </h1>

        <p className="text-gray-600 mt-4">
          {tile.description}
        </p>

        <div className="mt-6 space-y-2">
          <p>Material: {tile.material}</p>
          <p>Dimensions: {tile.dimensions}</p>
          <p>
            Status:{" "}
            <span className={tile.inStock ? "text-green-600" : "text-red-600"}>
              {tile.inStock ? "Available" : "Out of Stock"}
            </span>
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-6">${tile.price}</h2>
      </div>
    </div>
  );
}