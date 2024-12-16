"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const routes = [
  { path: "/coding", label: "Coding" },
  { path: "/videography", label: "Videography" },
];

const TopNavigation = () => {
  const pathname = usePathname();

  return (
    <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex gap-8 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg">
        {routes.map(({ path, label }) => (
          <Link
            key={path}
            href={path}
            className={cn(
              "text-lg font-medium transition-colors",
              pathname === path
                ? "text-[#6F4343] font-semibold"
                : "text-gray-500 hover:text-gray-700"
            )}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopNavigation;
