import { signOut, useSession } from 'next-auth/react';
import { IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ModalLogin } from '../modalLogin/ModalLogin';
import {
  AccountCircle,
  ArrowDropDown,
  ArrowDropDownCircleOutlined,
} from '@mui/icons-material';
import ModalProfile from '../ModalProfile/ModalProfile';

export default function Header() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <Box sx={{ flexGrow: 1 }} component={'header'}>
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
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              bgcolor: !session ? '#eb988e' : 'transparent',
              padding: '5px 7px',
              borderRadius: '25px',
            }}
          >
            {!session ? (
              // <Button color='inherit'>Login</Button>
              <ModalLogin isLogin={true} />
            ) : (
              <ModalProfile />
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
