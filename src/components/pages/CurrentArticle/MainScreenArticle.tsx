// styles
import { cn } from "@/app/utils/cn";

// hooks
import Image from "next/image";

interface MainScreenArticleProps {
  src: string;
  title: string;
  text: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const MainScreenArticle = ({ src, title, text }: MainScreenArticleProps) => {
  return (
    <div className="relative flex h-[740px] items-center px-[60px] text-white">
      <Image
        src={src}
        alt={`${BASE_URL}${src}`}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className={cn("z-10 flex items-center justify-between gap-[200px]")}>
        <h1 className="max-w-[890px] text-5xl font-bold leading-relaxed">
          {title}
        </h1>
        <p className="max-w-lg">{text}</p>
      </div>
    </div>
  );
};

export default MainScreenArticle;
