import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { PropsWithChildren } from "react";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.graphcdn.app/",
  cache: new InMemoryCache(),
});

export const _ApolloProvider = (props: PropsWithChildren) => {
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};
