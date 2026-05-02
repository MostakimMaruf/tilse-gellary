"use client";

import TileCard from "@/components/home/featuresTiles/TileCard";
import { useEffect, useState } from "react";

export default function AllTilesPage() {
  const [tiles, setTiles] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/featuretile")
      .then((res) => res.json())
      .then((data) => setTiles(data));
  }, []);

  const filteredTiles = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search tiles..."
        className="w-full p-3 border rounded-lg mb-8"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 🧱 Tiles Grid */}
      <div className="grid md:grid-cols-4 gap-6">
        {filteredTiles.map((tile) => (
          <TileCard key={tile.id} tile={tile} />
        ))}
      </div>

    </div>
  );
}