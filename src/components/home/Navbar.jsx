"use client"
// import { auth } from '@/lib/auth'
import { authClient } from '@/lib/auth-client'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
function Navbar() {
const { data: session, isPending, error } = authClient.useSession();
const signOut = async () => {
  await authClient.signOut();
}
  return (
       <div className="navbar bg-gray-50 backdrop-blur-md shadow-md px-4 sticky top-0 z-50">
      
      {/* LEFT - LOGO */}
      <div className="navbar-start">
        <Link href="/" className="text-3xl font-bold text-cyan-400">
          🧩 TileGallery
        </Link>
      </div>

      {/* CENTER - MENU */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1 font-medium">
          <li>
            <Link href="/" className="hover:text-cyan-400">Home</Link>
          </li>
          <li>
            <Link href="/tiles" className="hover:text-cyan-400">All Tiles</Link>
          </li>
          <li>
            <Link href="/profile" className="hover:text-cyan-400">My Profile</Link>
          </li>
        </ul>
      </div>

      {/* RIGHT - AUTH */}
      <div className="navbar-end gap-2">
        {!session ? (
          <Link
            href="/auth/signin"
            className="btn bg-cyan-400 text-white btn-sm rounded-full"
          >
            Login
          </Link>
        ) : (
          <>
            <Link
              href="/profile"
              className="btn btn-ghost btn-sm"
            >
              <Image
                src={"https://i.postimg.cc/yxrRc1P4/images.png"}
                alt="Profile"
                width={32}
                height={32}
                className="rounded-full"
              />
            </Link>

            <button
              onClick={() => signOut()}
              className="btn btn-outline btn-error btn-sm rounded-full"
            >
              Logout
            </button>
          </>
        )}
      </div>

      {/* MOBILE MENU */}
      <div className="lg:hidden ml-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} className="btn btn-ghost">
            ☰
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 z-1 p-2 shadow bg-white rounded-box w-52"
          >
            <li><Link href="/">Home</Link></li>
            <li><Link href="/tiles">All Tiles</Link></li>
            <li><Link href="/profile">My Profile</Link></li>

            {!session ? (
              <li>
                <Link href="/auth/signin">Login</Link>
              </li>
            ) : (
              <li>
                <button onClick={() => signOut()}>Logout</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar