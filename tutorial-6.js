const DogPhoto = ({ breed }) => (
  <Query
    query={GET_DOG_PHOTO}
    variables={{ breed }}
    skip={!breed}
    pollInterval={500}
  >
    {({ loading, error, data, startPolling, stopPolling }) => {
      if (loading) return null;
      if (error) return `Error! ${error}`;

      return (
        <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
      );
    }}
  </Query>
);