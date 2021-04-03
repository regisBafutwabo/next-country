import {createApolloClient} from '../lib';
import {getCountries} from '../lib/apollo/queries';
import {CountryTable} from '../components';

const Index = (props: any) => {
  const {countries} = props;

  return <CountryTable countries={countries.Country} />;
};

export async function getServerSideProps() {
  const apolloClient = createApolloClient();

  const countries = await apolloClient.query({
    query: getCountries,
    variables: {
      offset: 0,
      first: 50,
      orderBy: 'name_asc',
    },
    fetchPolicy: 'cache-first',
  });

  return {
    props: {
      countries: countries.data,
    },
  };
}

export default Index;
