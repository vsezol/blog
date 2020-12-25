import { createMuiTheme } from '@material-ui/core/styles';

export const Light = createMuiTheme({
  palette: {
    type: 'light',
    secondary: {
      main: '#EDEEF0',
    },
    primary: {
      main: '#0093A0',
    },
    info: {
      main: '#efd81d',
    },
  },
});

export const Dark = createMuiTheme({
  palette: {
    type: 'dark',
    secondary: {
      main: '#293338',
    },
    primary: {
      main: '#0093A0',
    },
    info: {
      main: '#efd81d',
    },
  },
});
