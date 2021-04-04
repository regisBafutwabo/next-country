import {Country} from '../../generated/graphql';

export interface CountryTableProps {
  countries: Country[];
  page: number;
  rowsCount: number;
  handleChangePage: (event: any, newPage: number) => void;
  handleRowsChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
