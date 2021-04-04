import {GetServerSideProps} from 'next';
import Head from 'next/head';

import {createApolloClient} from 'apollo';
import {getCountryInfo} from 'apollo/queries';
import {CenterContainer, CountryInfo, Header} from 'components';
import {Country} from 'generated/graphql';

const CountryDetail = (props: any) => {
  const {countryInfo} = props;
  const country: Country = countryInfo?.Country[0];

  return (
    <>
      <Head>
        <title>{country.name}</title>
      </Head>
      <Header title={`${country.flag?.emoji} ${country.name}`} />
      <CenterContainer>
        <CountryInfo Country={country} />
      </CenterContainer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const apolloClient = createApolloClient();

  const countries = await apolloClient.query({
    query: getCountryInfo,
    variables: {
      name: context.params.name,
    },
  });

  return {
    props: {
      countryInfo: countries?.data,
    },
  };
};

export default CountryDetail;
