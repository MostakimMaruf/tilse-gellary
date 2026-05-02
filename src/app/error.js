"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">

      <h1 className="text-7xl font-bold text-gray-800">404</h1>
      <h2 className="text-2xl font-semibold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2">
        Sorry, the page you are looking for doesn’t exist.
      </p>

      <Link href="/">
        <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
          Go Home
        </button>
      </Link>

    </div>
  );
}