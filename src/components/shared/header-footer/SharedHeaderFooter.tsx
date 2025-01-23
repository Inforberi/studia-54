"use client";

// styles
import { cn } from "@/app/utils/cn";

// hooks
import Link from "next/link";
import { usePathname } from "next/navigation";

// components
import BurgerMenuButton from "./Header/BurgerMenuButton";

interface SharedHeaderFooterProps {
  as: "header" | "footer";
}

const SharedHeaderFooter = ({ as }: SharedHeaderFooterProps) => {
  const pathname = usePathname();

  const testArray = ["Projects", "News", "Blog", "Contacts"];
  return (
    <div
      className={cn(
        "mx-auto flex max-w-screen-3xl items-center justify-between px-5",
        "lg:px-10",
        "xl:pl-[60px] xl:pr-40",
        as === "header" ? "text-black" : "text-white",
      )}
    >
      <div className={cn("flex items-end gap-x-4")}>
        <Link className={cn("text-4xl")} href="/">
          architecture
        </Link>
        {as === "footer" && (
          <p className="text-[#5B5C5D]">(с) 2025, all rights reserved</p>
        )}
      </div>
      <div
        className={cn(
          "hidden items-center gap-6 divide-x divide-[#9c9393]",
          "lg:flex",
        )}
      >
        <div className="flex items-center gap-[35px]">
          {testArray.map((item, index) => (
            <Link
              className={cn(
                "transition-colors hover:text-hover",
                as === "header" &&
                  pathname.startsWith(`/${item.toLowerCase()}`) &&
                  "hover:underline-hover underline decoration-2 underline-offset-4",
              )}
              href={`/${item.toLowerCase()}`}
              key={index}
            >
              {item}
            </Link>
          ))}
        </div>
        <a
          className={cn(
            "inline-block pl-6 transition-opacity hover:opacity-70",
          )}
          href="tel:+79118183410"
        >
          +7 (911) 818-34-10
        </a>
      </div>
      {as === "header" && <BurgerMenuButton />}
    </div>
  );
};

export default SharedHeaderFooter;
