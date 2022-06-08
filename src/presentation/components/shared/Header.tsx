import { signOut, useSession } from 'next-auth/react';
import { IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import logo from '@/public/images/logo.svg';

export default function Header() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h6'
            component='div'
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              color: 'white',
            }}
          >
            Share Books
            <Image src={logo} width={50} height={50} />
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              bgcolor: '#eb988e',
              padding: '5px 7px',
              borderRadius: '25px',
            }}
          >
            {!session ? (
              <Button color='inherit'>Login</Button>
            ) : (
              <Typography
                variant='subtitle2'
                component='div'
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  alignItems: 'center',
                  color: 'white',
                }}
              >
                Hello,{' '}
              </Typography>
            )}

            <IconButton onClick={() => signOut()}>
              <LogoutIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
