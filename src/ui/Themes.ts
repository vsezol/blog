import { createMuiTheme } from '@material-ui/core/styles';

export const Light = createMuiTheme({
  palette: {
    type: 'light',
    secondary: {
      main: '#ffffff'
    },
    primary: {
      main: "#1e1e1e"
    }
  },
});

export const Dark = createMuiTheme({
  palette: {
    type: 'dark',
    secondary: {
      main: '#1e1e1e'
    },
  },
});