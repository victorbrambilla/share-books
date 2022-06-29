import React, { useEffect } from 'react';
import { InstituteModel } from '@/domain/models';
import { makeRemoteGetInstitutesByAdminId } from '@/main/factories/usecases/institute/makeRemoteGetInstitutesByAdminId';
import {
  AccountCircle,
  AddCircle,
  ArrowDropDown,
  Logout,
} from '@mui/icons-material';
import { Box, Drawer, IconButton, Typography } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
import { ModalInstitutes } from '../modalInstitutes/ModalInstitutes';
import axios from 'axios';

export default function ModalProfile() {
  const { data: session } = useSession();
  const [open, setOpen] = React.useState(false);
  const [institute, setInstitute] = React.useState<InstituteModel>();

  useEffect(() => {
    console.log('as');
    axios
      .get('/api/getInstituteByAdminId', {
        params: {
          adminId: session?.user.id,
        },
      })
      .then((res) => {
        setInstitute(res.data.findInstitute);
      });
  }, []);

  return (
    <React.Fragment>
      <IconButton onClick={() => setOpen(true)}>
        <AccountCircle
          fontSize='large'
          sx={{
            color: 'white',
          }}
        />
        <Typography
          variant='body2'
          component='span'
          sx={{
            color: 'white',
            marginLeft: '5px',
          }}
        >
          {session?.user.name}
        </Typography>
        <ArrowDropDown
          sx={{
            color: 'white',
          }}
        />
      </IconButton>
      <Drawer
        sx={{
          borderRadius: '10px',
        }}
        anchor={'right'}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'rgb(241 195 189 / 43%)',
            width: '400px',
            height: '100%',
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'end',
            }}
          >
            <Typography
              sx={{
                fontSize: '32px',
                fontWeight: 'bold',
                margin: '30px',
                alignItems: 'center',
                color: 'white',
                bgcolor: '#eb988e',
                padding: '5px 15px',
                borderRadius: '25px',
                height: 'min-content',
              }}
              variant='h5'
            >
              Perfil
            </Typography>
          </Box>
          <Box
            display='flex'
            alignItems={'center'}
            justifyContent={'end'}
            bgcolor='#eb988e'
            padding={'5px 20px'}
          >
            <Typography
              sx={{
                fontSize: '26px',
              }}
              color={'white'}
              variant='h5'
            >
              {institute ? 'Editar Instituto' : 'Cadastrar Instituto'}
            </Typography>
            <ModalInstitutes dataInstitute={institute ? institute : null} />
          </Box>
          <Box
            display='flex'
            alignItems={'center'}
            justifyContent={'end'}
            bgcolor='#eb988e'
            padding={'5px 20px'}
            mt={'20px'}
          >
            <Typography
              sx={{
                fontSize: '26px',
              }}
              color={'white'}
              variant='h5'
            >
              Editar perfil
            </Typography>
            <IconButton>
              <AddCircle
                sx={{
                  color: 'white',
                  fontSize: '32px',
                }}
              />
            </IconButton>
          </Box>
          <Box
            display='flex'
            alignItems={'center'}
            justifyContent={'end'}
            bgcolor='#eb988e'
            padding={'5px 20px'}
            bottom={'0'}
            position={'absolute'}
            width={'100%'}
          >
            <Typography fontSize={'26px'} color={'white'} variant='h5'>
              Sair
            </Typography>
            <IconButton
              onClick={() => {
                signOut();
              }}
            >
              <Logout
                sx={{
                  color: 'white',
                  fontSize: '32px',
                }}
              />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </React.Fragment>
  );
}
