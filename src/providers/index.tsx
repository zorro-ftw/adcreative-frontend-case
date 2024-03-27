import { PropsWithChildren } from "react";
import { _ApolloProvider } from "./apollo-provider";

export const Providers = (props: PropsWithChildren) => {
  return <_ApolloProvider>{props.children}</_ApolloProvider>;
};
