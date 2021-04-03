import {gql} from '@apollo/client';

export const getCountries = gql`
  query GetCountries($first: Int, $orderBy: [_CountryOrdering], $offset: Int) {
    Country(first: $first, orderBy: $orderBy, offset: $offset) {
      name
      alpha3Code
      flag {
        emoji
      }
    }
  }
`;
