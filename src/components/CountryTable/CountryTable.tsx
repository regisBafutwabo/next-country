import {
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import Link from 'next/link';
import {Country} from '../../generated/graphql';
import {CountryTableProps} from './CountryTable.interface';
import {TableHeadRow} from './styles';

export const CountryTable = (props: CountryTableProps) => {
  const {
    countries,
    page,
    rowsCount,
    handleChangePage,
    handleRowsChange,
  } = props;

  return (
    <TableContainer component={Paper} elevation={3}>
      <Table>
        <TableHead>
          <TableHeadRow>
            <TableCell>Flag</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Code</TableCell>
          </TableHeadRow>
        </TableHead>
        <TableBody>
          {countries[0] &&
            countries.map((country: Country) => (
              <TableRow key={country.alpha3Code} hover>
                <TableCell component="th" scope="row">
                  <Avatar src={country.flag?.svgFile} alt={country.name} />
                </TableCell>
                <TableCell component="th" scope="row">
                  <Link href={`/country/${country.name}`}>{country.name}</Link>
                </TableCell>
                <TableCell component="th" scope="row">
                  {country.alpha3Code}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 50]}
              colSpan={3}
              count={250}
              rowsPerPage={rowsCount}
              page={page}
              SelectProps={{
                inputProps: {'aria-label': 'rows per page'},
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleRowsChange}
              // ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
