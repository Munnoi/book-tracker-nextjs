"use client";
import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="py-10 mx-10 flex items-center justify-between">
      <h1
        onClick={() => router.push("/")}
        className="font-bold text-3xl text-primary-200"
      >
        Book Tracker
      </h1>
      <div className="flex items-center gap-5">
        <Link
          href={"/"}
          className="relative font-semibold text-secondary-200 group inline-block"
        >
          Home
          <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-secondary-200"></span>
        </Link>
        <Link
          href={"/books"}
          className="font-semibold text-secondary-200 relative inline-block group"
        >
          All Books
          <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-secondary-200"></span>
        </Link>
        <Link
          href={"/add-book"}
          className="font-semibold text-secondary-200 relative inline-block group"
        >
          Add Book
          <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-secondary-200"></span>
        </Link>
        <CgProfile
          size={30}
          className="text-secondary-200 cursor-pointer"
          onClick={() => router.push("/profile")}
        />
      </div>
    </nav>
  );
};

export default Navbar;
