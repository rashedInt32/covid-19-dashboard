import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html,
body {
  height: 100%;
  width: 100%;
  background-color: theme.colors.backgroundOne;
}
body {
  font-family: 'sans-serif', Helvetica, Arial, sans-serif;
}
body.fontLoaded {
  font-family: 'Montserrat', 'sans-serif', Helvetica, Arial, sans-serif;
}
#app {
  min-height: 100%;
  min-width: 100%;
}
`;

export default GlobalStyles;
