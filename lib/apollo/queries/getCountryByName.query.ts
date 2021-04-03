import {gql} from '@apollo/client';

export const getCountryByName = gql`
  query GetCountryByName($name: String) {
    Country(name: $name) {
      area
      capital
      gini
      location {
        longitude
        latitude
      }
      nativeName
      population
      callingCodes {
        name
      }
      currencies {
        symbol
        name
      }
      flag {
        emoji
      }
      subregion {
        name
      }
      officialLanguages {
        name
      }
      borders {
        name
      }
    }
  }
`;
