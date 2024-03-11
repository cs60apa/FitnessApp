import { Slot, Stack } from "expo-router";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
const client = new ApolloClient({
  uri: "https://saogoncalo.stepzen.net/api/filled-alpaca/__graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      "apikey saogoncalo::stepzen.io+1000::3f66d4c62e2147267026c6977bc4be155b4fd6c27aa45fc8720c9f731e965795",
  },
});

const RootLayout = () => {
  return (
    <ApolloProvider client={client}>
      <Stack />
    </ApolloProvider>
  );
};

export default RootLayout;
