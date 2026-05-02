import { db } from "@/lib/auth";

export async function GET() {
  try {
    const tiles = await db.collection("tiles").find().limit(4).toArray();
    return new Response(JSON.stringify(tiles), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching tiles:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch tiles" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
