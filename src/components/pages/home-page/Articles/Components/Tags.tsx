"use client";

// styles
import { cn } from "@/app/utils/cn";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

interface TagsProps {
  tags: string[];
}

const Tags = ({ tags }: TagsProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [currentTeg, setCurrentTeg] = useState(searchParams.get("tag") || "");

  const handleTagClick = (tag: string) => {
    router.push(`/?tag=${tag}`);
    setCurrentTeg(tag);
  };

  return (
    <div
      className={cn(
        "mb-[60px] mt-px border-y-[1px] border-[#5B5C5D] p-5",
        "lg:px-10",
        "xl:mb-[70px] xl:px-[60px] xl:py-12",
      )}
    >
      <div className="overflow-hidden">
        <div className={cn("flex items-center overflow-x-auto")}>
          {tags.map((tag, index) => (
            <div key={index} className="flex items-center p-px">
              <button
                onClick={() => {
                  handleTagClick(tag);
                }}
                className={cn(
                  "block whitespace-nowrap px-7 py-4 text-sm transition-[outline] duration-300",
                  "xl:px-12 xl:py-6 xl:text-lg",
                  currentTeg === tag &&
                    "rounded-full outline outline-1 outline-white hover:outline-hover active:ring-white",
                )}
              >
                {tag}
              </button>
              {index < tags.length - 1 && (
                <div
                  className={cn(
                    "inline-block w-px bg-[#5b5c5d]",
                    "xl:mx-5 xl:h-9",
                  )}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;
