import {createMuiTheme} from '@material-ui/core';
import {red} from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#ddd',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});
