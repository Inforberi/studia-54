// styles
import { cn } from "@/app/utils/cn";

// components
import PreviewArticle from "@/components/shared/PreviewArticle/PreviewArticle";

// types
import type { ArticlesWithoutTags } from "@/types/types";

interface NewsProps {
  articles: ArticlesWithoutTags[];
}

const News = ({ articles }: NewsProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-x-[30px] gap-y-[60px] px-5",
        "sm:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]",
        "lg:gap-y-[70px] lg:px-10",
        "xl:px-[60px]",
        "2xl:grid-cols-3",
      )}
    >
      {articles.map((newsItem, index) => (
        <PreviewArticle
          documentID={newsItem.documentId}
          // slug={newsItem.seo.slug}
          key={index}
          src={newsItem.Hero.background.url}
          title={newsItem.Hero.title}
          text={newsItem.Hero.description}
        />
      ))}
    </div>
  );
};

export default News;
