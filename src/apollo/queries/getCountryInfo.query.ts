import {gql} from '@apollo/client';

export const getCountryInfo = gql`
  query GetCountryInfo($name: String) {
    Country(name: $name) {
      name
      area
      capital
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
        svgFile
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
