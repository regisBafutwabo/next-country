import {Box, styled} from '@material-ui/core';
import {theme} from '../../styles';

export const Container = styled(Box)({
  width: '100%',
  backgroundColor: theme.palette.grey[100],
  boxShadow: theme.shadows[3],
  marginBottom: 60,
  padding: 15,
  textAlign: 'center',
});
