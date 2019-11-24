import { Query } from "react-apollo";
import { gql, ApolloClient } from "apollo-boost";

const client = new ApolloClient({
  uri: 'https://dog-graphql-api.glitch.me/graphql'
});

const ExchangeRates = () => (
  <Query
    query={gql`
      {
        rates(currency: "USD") {
          currency
          rate
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>{currency}: {rate}</p>
        </div>
      ));
    }}
  </Query>
);
