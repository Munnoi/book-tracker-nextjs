"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoBookOutline } from "react-icons/io5";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useRouter, usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/books", label: "All Books" },
  { href: "/books/add", label: "Add Book" },
];

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 mx-4 md:mx-10 mt-4">
      <div className="glass-card px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => router.push("/")}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="p-2 rounded-xl bg-gradient-to-br from-accent to-amber group-hover:scale-110 transition-transform duration-300">
            <IoBookOutline size={24} className="text-white" />
          </div>
          <h1 className="font-bold text-2xl gradient-text hidden sm:block">
            Book Tracker
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  px-4 py-2 rounded-full font-medium text-sm transition-all duration-300
                  ${isActive 
                    ? "bg-gradient-to-r from-accent to-accent-light text-white shadow-lg" 
                    : "text-text-secondary hover:text-white hover:bg-glass-hover"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Profile Button */}
          <button
            onClick={() => router.push("/profile")}
            className="p-2 rounded-full bg-glass hover:bg-glass-hover border border-glass-border transition-all duration-300 hover:scale-105 hidden md:block"
          >
            <CgProfile size={24} className="text-text-secondary hover:text-white transition-colors" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full bg-glass hover:bg-glass-hover border border-glass-border transition-all duration-300 md:hidden"
          >
            {isMobileMenuOpen ? (
              <HiX size={24} className="text-white" />
            ) : (
              <HiMenuAlt3 size={24} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 glass-card p-4 animate-fade-in-up">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    px-4 py-3 rounded-xl font-medium transition-all duration-300
                    ${isActive 
                      ? "bg-gradient-to-r from-accent to-accent-light text-white" 
                      : "text-text-secondary hover:text-white hover:bg-glass-hover"
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
            <button
              onClick={() => {
                router.push("/profile");
                setIsMobileMenuOpen(false);
              }}
              className="px-4 py-3 rounded-xl font-medium text-text-secondary hover:text-white hover:bg-glass-hover transition-all duration-300 flex items-center gap-2"
            >
              <CgProfile size={20} />
              Profile
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
