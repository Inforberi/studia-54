"use client";
// styles
import { cn } from "@/app/utils/cn";
import { useState } from "react";

const BurgerMenuButton = () => {
  const burgerLines = [
    "rotate-45 translate-y-1",
    "-rotate-45 -translate-y-[2px]",
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <button
      onClick={toggleMenu}
      className={cn(
        "flex h-8 w-8 grid-cols-1 flex-col justify-center gap-[5px]",
        "lg:hidden",
      )}
    >
      {burgerLines.map((line) => (
        <span
          key={line}
          className={cn(
            "transition-transform-opacity h-px w-full transform rounded-md bg-black duration-300",
            isMenuOpen && line,
          )}
        />
      ))}
    </button>
  );
};

export default BurgerMenuButton;
