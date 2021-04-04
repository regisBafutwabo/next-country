import {Card, Grid, styled} from '@material-ui/core';

export const CardComponent = styled(Card)({
  width: '100%',
  height: 'auto',
});

export const Row = styled(Grid)({
  padding: '15px 20px',
  display: 'flex',
  flexDirection: 'row',
});

export const Label = styled(Grid)({
  fontWeight: 'bold',
  textAlign: 'left',
});

export const Value = styled(Grid)({});
