const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

const DogPhoto = ({ breed }) => (
  <Query query={GET_DOG_PHOTO} variables={{ breed }}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error! ${error}`;

      return (
        <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
      );
    }}
  </Query>
);