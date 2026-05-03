"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
  const router = useRouter();
  const { data: session, isPending, error } = authClient.useSession();

  useEffect(() => {
    if (!isPending && (!session || error)) {
      router.replace("/auth/signin"); // replace better than push
    }
  }, [isPending, session, error, router]);

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading profile...
      </div>
    );
  }

  if (!session) return null;

  const user = session.user;

  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 py-12 px-4">

  <div className="max-w-4xl mx-auto">

    {/* 👤 Profile Card */}
    <div className="relative bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl p-8 overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute -top-10 -right-10 w-56 h-56 bg-cyan-200/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-indigo-200/30 rounded-full blur-3xl"></div>

      <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">

        {/* Avatar */}
        <div className="relative group">
          <div className="w-32 h-32 rounded-full p-0.75 bg-linear-to-tr from-cyan-500 to-indigo-500 shadow-lg">
            <Image
              src={"https://i.postimg.cc/yxrRc1P4/images.png"}
              alt="Profile"
              width={128}
              height={128}
              className="rounded-full object-cover"
            />
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-sm transition">
            
          </div>
          
        </div>

        {/* Info */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl font-bold text-slate-800">
            {user?.name || "User"}
          </h1>

          <p className="text-slate-500 mt-1">{user?.email}</p>

          <div className="mt-5 flex flex-wrap gap-3 justify-center md:justify-start">
            <button className="px-5 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition shadow-md">
              Edit Profile
            </button>

            <button className="px-5 py-2 border border-slate-300 text-slate-600 rounded-full hover:bg-slate-100 transition">
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* 📊 Stats Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">

      {[
        { label: "Orders", value: 12 },
        { label: "Wishlist", value: 5 },
        { label: "Reviews", value: 3 },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white/80 backdrop-blur border border-white/40 p-6 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1 text-center"
        >
          <h3 className="text-2xl font-bold text-indigo-600">{item.value}</h3>
          <p className="text-slate-500 mt-1">{item.label}</p>
        </div>
      ))}

    </div>

    {/* 📦 Activity Timeline */}
    <div className="mt-10 bg-white/80 backdrop-blur border border-white/40 rounded-2xl shadow p-6">

      <h2 className="text-xl font-semibold mb-6 text-slate-800">
        Recent Activity
      </h2>

      <div className="space-y-4">

        {[
          "Ordered Marble White Tile",
          "Added Ceramic Blue Tile to wishlist",
          "Reviewed Wooden Finish Tile",
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition"
          >
            <div className="w-2.5 h-2.5 mt-2 rounded-full bg-indigo-500"></div>
            <p className="text-slate-600">{item}</p>
          </div>
        ))}

      </div>
    </div>

  </div>
</div>
  );
}
