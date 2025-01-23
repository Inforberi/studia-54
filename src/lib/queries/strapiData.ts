import { gql } from "graphql-request";

export const GET_HOME_PAGE_STRAPI_DATA = gql`
  query HomePage {
    homePage {
      hero {
        decritpion
        foreground {
          alternativeText
          url
        }
        background {
          alternativeText
          url
        }
      }
    }
  }
`;

export const GET_ARTICLES = gql`
  query Articles($sort: [String], $filters: ArticleFiltersInput) {
    articles(sort: $sort, filters: $filters) {
      tags {
        system_title
      }
      Hero {
        title
        description
        background {
          url
          alternativeText
        }
      }
      publishedAt
      seo {
        slug
      }
      documentId
    }
    tags {
      system_title
    }
  }
`;

export const GET_ARTICLE = gql`
  query Article($documentId: ID!) {
    article(documentId: $documentId) {
      Hero {
        title
        id
        description
        background {
          url
          alternativeText
        }
      }
      content {
        ... on ComponentUiGridText {
          text
          width {
            value
          }
        }
        ... on ComponentUiGridTextUnderImage {
          image {
            alternativeText
            url
          }
          text
        }
        ... on ComponentUiGridTextOverImage {
          image {
            url
            alternativeText
          }
          text
          text_position {
            position
          }
        }
        ... on ComponentUiGridImage {
          image {
            url
            alternativeText
          }
          width {
            value
          }
        }
        ... on Error {
          message
        }
      }
      tags {
        seo {
          slug
        }
      }
    }
  }
`;
