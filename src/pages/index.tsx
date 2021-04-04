import {useEffect, useState} from 'react';
import {CircularProgress, Container, Typography} from '@material-ui/core';

import {CountryTable, Header, CenterContainer} from 'components';
import {
  Country,
  useGetCountriesLazyQuery,
  _CountryOrdering,
} from 'generated/graphql';

const Home = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const [
    getCountries,
    {data: countries, loading, error},
  ] = useGetCountriesLazyQuery();

  const onChangePage = (_: any, newPage: number) => {
    setPage(newPage);
  };

  const onChangeRows = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const showData = () => {
    if (loading) {
      return (
        <CenterContainer>
          <CircularProgress />
        </CenterContainer>
      );
    }
    if (error) {
      return (
        <CenterContainer>
          <Typography color="error">
            Oops 😧 something went wrong while Querying the data.
          </Typography>
        </CenterContainer>
      );
    }
    if (countries) {
      return (
        <CountryTable
          countries={countries.Country as Country[]}
          page={page}
          rowsCount={rowsPerPage}
          handleChangePage={onChangePage}
          handleRowsChange={onChangeRows}
        />
      );
    }
    return <></>;
  };

  useEffect(() => {
    getCountries({
      variables: {
        offset: page * rowsPerPage,
        first: rowsPerPage,
        orderBy: _CountryOrdering.NameAsc,
      },
    });
  }, [page, rowsPerPage]);

  return (
    <>
      <Header title="&#127757; Countries" />
      <Container>{showData()}</Container>
    </>
  );
};

export default Home;
