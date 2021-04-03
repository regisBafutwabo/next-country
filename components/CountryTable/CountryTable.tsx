import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import Link from 'next/link';
import {Country} from '../../generated/graphql';
import {CountryTableProps} from './CountryTable.interface';
import {TableHeadRow} from './styles';

export const CountryTable = (props: CountryTableProps) => {
  const {countries} = props;

  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();

  return (
    <TableContainer component={Paper}>
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
                  {country.flag?.emoji}
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
      </Table>
    </TableContainer>
  );
};
