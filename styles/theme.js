
   
import { ThemeProvider } from 'styled-components';

import defaultTheme from "../themes/defaultTheme";
import GlobalStyles from './globals';

const Theme = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;