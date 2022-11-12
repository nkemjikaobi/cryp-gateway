import { ApolloClient, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";

/**
 * The url naturally would be picked from the env
 * This is only temporary till we have different environments
 * If we use env now, deployments will have issues since it wont find the staging url.
 */
const apiGateWayUrl = "https://cryp-api.herokuapp.com/graphql";

const httpLink = createUploadLink({
  uri: apiGateWayUrl,
  credentials: "same-origin",
  // credentials: "include",
});

const authLink = setContext((_, { headers }) => {
  return { headers: { ...headers } };
});

const apolloClient = new ApolloClient({
  uri: apiGateWayUrl,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  name: "Cryp",
  version: "1.0",
});

export default apolloClient;
