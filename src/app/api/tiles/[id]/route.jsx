import { db } from "@/lib/auth";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
const { id } = await params;

  try {
    const tile = await db
      .collection("tiles")
      .findOne({ _id: new ObjectId(id) });
      // console.log("tile: ", tile)
    if (!tile) {
      return new Response(
        JSON.stringify({ error: "Tile not found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(JSON.stringify(tile), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error fetching tile:", error);

    return new Response(
      JSON.stringify({ error: "Failed to fetch tile" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}