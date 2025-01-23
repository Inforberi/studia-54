// components
import CurrentArticleTags from "@/components/pages/CurrentArticle/CurrentArticleTags";
import MainScreenArticle from "@/components/pages/CurrentArticle/MainScreenArticle";
import ProjectDescription from "@/components/pages/CurrentArticle/ProjectDescription/ProjectDescription";
import Recommend from "@/components/pages/CurrentArticle/Recommend";

// data
import { GET_ARTICLE } from "@/lib/queries/strapiData";
import client from "@/lib/graphql-client";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const ArticlePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const data: any = await client.request(GET_ARTICLE, {
    documentId: slug,
  });

  if (!data) {
    return <div>Статья не найдена</div>;
  }

  return (
    <div className="bg-black">
      <MainScreenArticle
        src={`${BASE_URL}${data.article.Hero.background.url}`}
        title={data.article.Hero.title}
        text={data.article.Hero.description}
      />
      <CurrentArticleTags />
      <ProjectDescription />
      <Recommend />
    </div>
  );
};

export default ArticlePage;
