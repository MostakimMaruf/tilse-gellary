// components/FeaturedTiles.jsx
import TileCard from "./TileCard";

const FeaturedTiles = async () => {
const res = await fetch(
    `${process.env.BETTER_AUTH_URL}/api/tiles?limit=4`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    return <div className="max-w-6xl mx-auto p-10 text-center">Failed to load featured tiles.</div>;
  }

const tiles = await res.json();

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Featured Tiles
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {tiles.map((tile) => (
          <TileCard key={tile._id} tile={tile} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedTiles;