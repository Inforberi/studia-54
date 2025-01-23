export interface HomePageStrapiData {
  homePage: {
    hero: {
      decritpion: string;
      foreground: {
        alternativeText: string;
        url: string;
      };
      background: {
        alternativeText: string;
        url: string;
      };
    };
  };
}

export interface Articles {
  articles: {
    tags: { system_title: string }[];
    Hero: {
      title: string;
      description: string;
      background: {
        url: string;
        alternativeText: string;
      };
    };
    publishedAt: string;
    seo: { slug: string };
    documentId: string;
  }[];
  tags: { system_title: string }[];
}

export interface ArticlesWithoutTags {
  tags: { system_title: string }[];
  Hero: {
    title: string;
    description: string;
    background: {
      url: string;
      alternativeText: string;
    };
  };
  publishedAt: string;
  seo: { slug: string };
  documentId: string;
}

export interface Article {
  article: {
    Hero: {
      title: string;
      id: string;
      description: string;
      background: {
        url: string;
        alternativeText: string | null;
      };
    };
    content: [
      {
        image: {
          url: string;
          alternativeText: string | null;
        };
        width: {
          value: string;
        };
      },
      {
        text: string;
        width: {
          value: string;
        };
      },
      {
        image: {
          alternativeText: string | null;
          url: string;
        };
        text: string;
      },
      {
        image: {
          alternativeText: null;
          url: string;
        };
        text: string;
      },
      {
        image: {
          url: string;
          alternativeText: null;
        };
        text: string;
        text_position: {
          position: string;
        };
      },
    ];
  };
}

// export type SearchParams = { [key: string]: string | string[] | undefined };
export type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;
