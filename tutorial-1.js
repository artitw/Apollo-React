https://codesandbox.io/s/nn9y2wzyw4

npm install apollo-boost react-apollo graphql

import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

import { gql } from "apollo-boost";
// or you can use `import gql from 'graphql-tag';` instead

...

client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));