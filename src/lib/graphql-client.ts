import { GraphQLClient } from "graphql-request";

const GRAPHQL_URL = process.env.GRAPHQL_URL;
const STRAPI_KEY = process.env.STRAPI_KEY;

const client = new GraphQLClient(`${GRAPHQL_URL}`, {
  headers: {
    Authorization: `Bearer ${STRAPI_KEY}`,
  },
});

export default client;
