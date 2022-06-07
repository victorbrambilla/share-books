import React from 'react';
import Image from 'next/image';
import pic from '@/../public/images/login.svg';
import { NextPage } from 'next';
import { Box } from '@mui/material';
import { SigninComponent } from '@/components/auth/signinComponent';
import { SignupComponent } from '@/components/auth/signupComponent';

const Login: NextPage = () => {
  const [handleSign, setHandleSign] = React.useState(false);
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 164px)',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          marginRight: '50px',
          display: 'flex',
        }}
      >
        <Image src={pic} alt='loginPic' />
        {!handleSign ? (
          <SigninComponent handleSign={setHandleSign} />
        ) : (
          <SignupComponent handleSign={setHandleSign} />
        )}
      </Box>
    </Box>
  );
};

export default Login;
