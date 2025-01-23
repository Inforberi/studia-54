"use client";

// styles
import { cn } from "@/app/utils/cn";

// hooks
import Image from "next/image";
import { useRouter } from "next/navigation";

interface PreviewArticleProps {
  slug?: string;
  src: string;
  title: string;
  text: string;
  documentID: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const PreviewArticle = ({
  title,
  src,
  text,
  // slug,
  documentID,
}: PreviewArticleProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${documentID}`);
  };

  return (
    <div className="cursor-pointer leading-relaxed" onClick={handleClick}>
      <div className="relative -z-[1px] mb-[30px] aspect-video max-w-screen-3xl">
        <Image src={`${BASE_URL}${src}`} alt={title} fill />
      </div>
      <div className="relative z-10">
        <h3 className={cn("mb-5 text-[32px]")}>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default PreviewArticle;
