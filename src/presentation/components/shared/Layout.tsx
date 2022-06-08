import { AppBar, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#EEB4AD',
      },
      secondary: {
        main: '#716A87',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            color: 'white',
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main style={{ maxWidth: '100%' }}>{children}</main>
      <AppBar
        sx={{
          backgroundColor: 'primary',
          height: '100px',
          bottom: 0,
          position: 'aboslute',
          zIndex: '99',
          top: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Footer
      </AppBar>
    </ThemeProvider>
  );
}
