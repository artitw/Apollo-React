const DogPhoto = ({ breed }) => (
  <Query
    query={GET_DOG_PHOTO}
    variables={{ breed }}
    skip={!breed}
  >
    {({ loading, error, data, refetch }) => {
      if (loading) return null;
      if (error) return `Error! ${error}`;

      return (
        <div>
          <img
            src={data.dog.displayImage}
            style={{ height: 100, width: 100 }}
          />
          <button onClick={() => refetch()}>Refetch!</button>
        </div>
      );
    }}
  </Query>
);