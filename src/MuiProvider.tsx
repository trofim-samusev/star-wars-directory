import { FC } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

export const MuiProvider: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles styles={{ body: { backgroundColor: '#fafafa' } }} />
    {children}
  </ThemeProvider>
);
