// src/components/SideMenu.tsx
import React from "react";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Computer,
  Brush,
  Megaphone,
  BarChart,
  BookOpen,
  LifeBuoy,
} from "lucide-react";

// A reusable navigation link component
const NavLink = ({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <a
    href="#"
    className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
  >
    {icon}
    <span className="ml-4 font-medium">{children}</span>
  </a>
);

export const SideMenu = () => {
  return (
    <SheetContent side="left" className="w-80 p-0 flex flex-col">
      <SheetHeader className="p-6 pb-4">
        <SheetTitle>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v15H6.5A2.5 2.5 0 0 1 4 14.5v-10A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            </div>
            <span className="text-2xl font-bold text-gray-800">E-tutor</span>
          </div>
        </SheetTitle>
      </SheetHeader>

      <Separator />

      {/* Main Navigation Links */}
      <nav className="flex-1 p-4 space-y-1">
        <p className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Categories
        </p>
        <NavLink icon={<Computer size={20} />}>Web Development</NavLink>
        <NavLink icon={<Brush size={20} />}>Design</NavLink>
        <NavLink icon={<Megaphone size={20} />}>Marketing</NavLink>
        <NavLink icon={<BarChart size={20} />}>Data Science</NavLink>
        <NavLink icon={<BookOpen size={20} />}>Personal Development</NavLink>
      </nav>

      <Separator />

      {/* Logged-out state: Auth buttons */}
      <div className="p-6 mt-auto">
        <p className="text-sm text-gray-600 mb-4">
          New to E-tutor? Create an account to start learning.
        </p>
        <div className="flex flex-col space-y-2">
          <Button variant="default">Sign In</Button>
          <Button variant="secondary">Create Account</Button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="p-6 border-t">
        <NavLink icon={<LifeBuoy size={20} />}>Help & Support</NavLink>
      </div>
    </SheetContent>
  );
};
