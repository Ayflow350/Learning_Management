// src/components/ui/BackToTopButton.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    // === THIS IS THE ONLY CHANGE ===
    // The classes for positioning have been updated
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
      {isVisible && (
        <Button
          size="icon"
          onClick={scrollToTop}
          className="h-12 w-12 rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:scale-110 animate-in fade-in-50"
        >
          <ArrowUp className="h-6 w-6" />
          <span className="sr-only">Go to top</span>
        </Button>
      )}
    </div>
  );
};

export default BackToTopButton;
