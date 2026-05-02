"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";


export default function ProfilePage() {
const { data: session, isPending, error } = authClient.useSession();
    const user = session?.user;
  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading profile...
      </div>
    );
  }
  if (error || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Error loading profile.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8">

        {/* 👤 Header */}
        <div className="flex flex-col md:flex-row items-center gap-6">

          {/* Avatar */}
          <div className="relative w-32 h-32">
            <Image
              src={user.image || "/images/avatar.png"}
              alt="Profile"
              fill
              className="rounded-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-500">{user.email}</p>

            <button className="mt-3 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Edit Profile
            </button>
          </div>
        </div>

        {/* 📊 Stats */}
        <div className="grid grid-cols-3 gap-6 text-center mt-10">

          <div>
            <h3 className="text-xl font-bold">12</h3>
            <p className="text-gray-500 text-sm">Orders</p>
          </div>

          <div>
            <h3 className="text-xl font-bold">5</h3>
            <p className="text-gray-500 text-sm">Wishlist</p>
          </div>

          <div>
            <h3 className="text-xl font-bold">3</h3>
            <p className="text-gray-500 text-sm">Reviews</p>
          </div>

        </div>

        {/* 📦 Recent Activity */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold mb-4">
            Recent Activity
          </h2>

          <ul className="space-y-3 text-gray-600">
            <li>🧾 Ordered Marble White Tile</li>
            <li>❤️ Added Ceramic Blue Tile to wishlist</li>
            <li>⭐ Reviewed Wooden Finish Tile</li>
          </ul>
        </div>

      </div>

    </div>
  );
}