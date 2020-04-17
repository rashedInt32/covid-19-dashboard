import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  colors: {
    primary: '#6236ff',
    primaryLight: 'rgba(98, 54, 255, 0.2)',
    secondary: '#1a1053',
    tartiary: '#817c9b',
    danger: '#f9345e',
    success: '#1cb142',
    successLight: 'rgba(28,177,66, 0.3)',
    warning: '#fa6400',
    lightBg: '#f8fbff',
    white: '#ffffff',
    grey: '#bdbdbd',
  },
  borderRadiusBase: '8px',
  borderRadiusLarge: '20px',
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'],
  },
});
