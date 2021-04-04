import {gql} from '@apollo/client';

export const getCountries = gql`
  query GetCountries(
    $first: Int
    $orderBy: [_CountryOrdering]
    $offset: Int
    $name: String
  ) {
    Country(first: $first, orderBy: $orderBy, offset: $offset, name: $name) {
      name
      alpha3Code
      flag {
        svgFile
      }
    }
  }
`;
