"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Reusable NavLink component
const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative py-3 text-sm font-medium transition-colors duration-200 ${
        isActive ? "text-white" : "text-gray-300 hover:text-white"
      }`}
    >
      {isActive && (
        <span className="absolute top-0 left-0 w-full h-0.5 bg-primary"></span>
      )}
      {children}
    </Link>
  );
};

// The main Header component
const Header = () => {
  return (
    <header className="bg-[#1D2026] text-white">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo or placeholder for alignment */}
        <div>
          {/* You could add a logo here if you want one visible on all screen sizes */}
        </div>

        {/* === THIS IS THE MAIN CHANGE === */}
        {/* The entire navigation and right-side elements are now inside a single div */}
        {/* It is hidden by default and only becomes visible on medium screens (`md:flex`) and up */}
        <div className="hidden md:flex items-center justify-between flex-1">
          {/* Navigation Links */}
          <nav className="flex items-center gap-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/courses">Courses</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/become-instructor">Become an Instructor</NavLink>
          </nav>

          {/* Right: Currency/Language Selectors */}
          <div className="flex items-center gap-x-6 text-sm">
            <button className="flex items-center gap-x-1 text-gray-300 hover:text-white">
              <span>USD</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
            <button className="flex items-center gap-x-1 text-gray-300 hover:text-white">
              <span>English</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
