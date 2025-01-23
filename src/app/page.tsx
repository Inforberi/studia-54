// components
import Articles from "@/components/pages/home-page/Articles/Articles";
import MainScreen from "@/components/pages/home-page/main-screen/MainScreen";

// data
import {
  GET_HOME_PAGE_STRAPI_DATA,
  GET_ARTICLES,
} from "@/lib/queries/strapiData";
import client from "../lib/graphql-client";

// types
import type { HomePageStrapiData, SearchParams } from "@/types/types";

export const generateStaticParams = async () => {
  const data: Articles = await client.request(GET_ARTICLES);

  return data.articles.map((article) => ({
    // slug: article.seo.slug,
    documentId: article.documentId,
  }));
};

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const searchParam = await searchParams;

  const data: HomePageStrapiData = await client.request(
    GET_HOME_PAGE_STRAPI_DATA,
  );

  const hero = data?.homePage?.hero;

  return (
    <>
      <MainScreen
        houseImageSrc={hero.background.url}
        houseImageAlt={hero.background.alternativeText}
        architectureImageSrc={hero.foreground.url}
        architectureImageAlt={hero.foreground.alternativeText}
        description={hero.decritpion}
      />
      <Articles searchParam={searchParam.tag} />
    </>
  );
}
