// styles
import { cn } from "@/app/utils/cn";

// components
import Tags from "./Components/Tags";
import News from "./Components/News";

// types
import type { Articles } from "@/types/types";

// data
import { GET_ARTICLES } from "@/lib/queries/strapiData";
import client from "@/lib/graphql-client";

const Articles = async () => {
  const data: Articles = await client.request(GET_ARTICLES, {
    sort: ["publishedAt:desc"],
    filters: {
      tags: {
        system_title: {
          contains: "",
        },
      },
    },
  });

  const articles = data.articles;
  const tags = data.tags.map((tag) => tag.system_title);

  return (
    <section
      id="articles"
      className={cn(
        "-mt-[1px] overflow-hidden bg-black pb-[70px] text-white",
        "sm:pb-52",
      )}
    >
      <Tags tags={tags} />
      <News articles={articles} />
    </section>
  );
};

export default Articles;
