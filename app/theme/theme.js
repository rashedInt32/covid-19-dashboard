import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  colors: {
    primary: '#6236ff',
    secondary: '#1a1053',
    tartiary: '#817c9b',
    danger: '#f9345e',
    success: '#1cb142',
    warning: '#fa6400',
    lightBg: '#f8fbff',
  },
  borderRadiusBase: '8px',
  borderRadiusLarge: '20px',
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'],
  },
});
