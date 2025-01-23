// components
import Articles from "@/components/pages/home-page/Articles/Articles";
import MainScreen from "@/components/pages/home-page/main-screen/MainScreen";

// data
import { GET_HOME_PAGE_STRAPI_DATA } from "@/lib/queries/strapiData";
import client from "../lib/graphql-client";

// types
import type { HomePageStrapiData } from "@/types/types";
import { Suspense } from "react";

export default async function Home() {
  const data: HomePageStrapiData = await client.request(
    GET_HOME_PAGE_STRAPI_DATA,
  );

  const hero = data?.homePage?.hero;

  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <MainScreen
          houseImageSrc={hero.background.url}
          houseImageAlt={hero.background.alternativeText}
          architectureImageSrc={hero.foreground.url}
          architectureImageAlt={hero.foreground.alternativeText}
          description={hero.decritpion}
        />
        <Articles />
      </Suspense>
    </>
  );
}
