import {useRouter} from 'next/dist/client/router';
import {useGetCountryByNameQuery} from '../../generated/graphql';

const CountryInfo = () => {
  const router = useRouter();

  const {data, loading, error} = useGetCountryByNameQuery({
    variables: {name: router.query.name as string},
  });

  if (data) {
    return <>ready.</>;
  }
  if (loading) {
    return <>loading...</>;
  }
  if (error) {
    return <>ooppsss...</>;
  }

  return <>{router.query.name}</>;
};

export default CountryInfo;
