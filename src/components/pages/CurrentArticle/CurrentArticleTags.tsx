// styles
import { cn } from "@/app/utils/cn";
import Link from "next/link";

const CurrentArticleTags = () => {
  const arr = ["Projects", "Architectural projects", "Sustainable Design "];
  return (
    <div className="flex items-center px-[60px] py-12 text-white">
      {arr.map((tag, index) => (
        <div key={index} className={cn("flex items-center")}>
          <Link href={""}>{tag}</Link>
          {index < arr.length - 1 && (
            <div className="mx-5 h-5 w-px bg-[#5B5C5D]"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CurrentArticleTags;
