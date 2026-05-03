// components/FeaturedTiles.jsx
"use client";
import TileCard from "./TileCard";
import { useEffect, useState } from "react";

const FeaturedTiles = () => {
  const [tiles, setTiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/api/tiles?limit=4`)
      .then((res) => res.ok ? res.json() : [])
      .then((data) => {
        setTiles(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-center py-16">Loading featured tiles...</div>;
  }

  return (
    <section className="py-16 px-4  mx-auto bg-gray-100">
      <div className="max-w-6xl mx-auto">
         <h2 className="text-3xl font-bold text-black mb-8 text-center">
        Featured Tiles
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {tiles.map((tile) => (
          <TileCard key={tile._id} tile={tile} />
        ))}
      </div>
      </div>
     
    </section>
  );
};

export default FeaturedTiles;