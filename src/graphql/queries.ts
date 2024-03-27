import { gql } from "@apollo/client";

// Define GraphQL query
export const GET_CHARACTERS = gql`
  query GetCharacters($name: String!) {
    characters(filter: { name: $name }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
        episode {
          id
          name
        }
      }
    }
  }
`;
