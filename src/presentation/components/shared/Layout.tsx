import { AppBar, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { Slide, ToastContainer } from 'react-toastify';
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
            fontWeight: 'bold',
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main
        style={{
          maxWidth: '100%',
          backgroundColor: 'rgb(241 195 189 / 43%)',
          minHeight: '100vh',
        }}
      >
        {children}
      </main>
      <ToastContainer closeButton={true} />
    </ThemeProvider>
  );
}
