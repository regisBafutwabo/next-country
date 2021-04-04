import {theme} from '../../styles/theme';
import {styled, TableRow} from '@material-ui/core';

export const TableHeadRow = styled(TableRow)({
  backgroundColor: theme.palette.secondary.main,
  paddingTop: 30,
});
