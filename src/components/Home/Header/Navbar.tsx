// src/components/Navbar.tsx
import React from "react";
// Import Menu icon and Sheet components
import { Search, Bell, Heart, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { SideMenu } from "../general/SideMenu"; // Import your new SideMenu

const Navbar = () => {
  return (
    <Sheet>
      {" "}
      {/* 1. Wrap the entire component in the Sheet */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Left Side: Logo and Browse */}
          <div className="flex items-center space-x-4">
            {" "}
            {/* Reduced space-x */}
            {/* 2. Add the SheetTrigger with a menu icon */}
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                {" "}
                {/* Hidden on medium screens and up */}
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
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
            {/* The Browse Dropdown can be hidden on small screens */}
            <div className="hidden md:flex">
              {/* This is where your previous DropdownMenu for "Browse" was. 
                  You can keep it or remove it, as the sidebar handles this now.
                  For this example, I'll assume you keep it for desktop. 
              */}
            </div>
          </div>

          {/* Middle: Search Bar (conditionally hidden) */}
          <div className="relative flex-1 max-w-xl hidden sm:block">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <Input
              type="text"
              placeholder="What do you want to learn..."
              className="pl-10 h-11"
            />
          </div>

          {/* Right Side: Icons and Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-6">
            <div className="flex items-center space-x-4 text-gray-600">
              <Bell size={24} className="cursor-pointer hover:text-primary" />
              <Heart size={24} className="cursor-pointer hover:text-primary" />
              <ShoppingCart
                size={24}
                className="cursor-pointer hover:text-primary"
              />
            </div>
            <div className="hidden lg:flex items-center space-x-2">
              {" "}
              {/* Hidden on smaller screens */}
              <Button variant="secondary">Create Account</Button>
              <Button variant="default">Sign In</Button>
            </div>
          </div>
        </div>
      </div>
      {/* 3. Place the SideMenu component here */}
      <SideMenu />
    </Sheet>
  );
};

export default Navbar;
