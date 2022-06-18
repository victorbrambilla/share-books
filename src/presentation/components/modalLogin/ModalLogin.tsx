import React, { useRef, useState } from 'react';
import Sheet, { SheetRef } from 'react-modal-sheet';
import { Close } from '@mui/icons-material';
import { Backdrop, Button, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import { SigninComponent } from '../auth/signinComponent';
import { SignupComponent } from '../auth/signupComponent';

interface IProps {
  isLogin: boolean;
}

export const ModalLogin = ({ isLogin }: IProps) => {
  const ref = useRef<SheetRef>();
  const snapTo = (i: number) => ref.current?.snapTo(i);
  const [isOpen, setOpen] = useState(false);
  const [isSignOut, setIsSignOut] = useState(false);
  return (
    <>
      {isLogin ? (
        <Button onClick={() => setOpen(true)} color='inherit'>
          Login
        </Button>
      ) : (
        <Button
          onClick={() => {
            setOpen(true), setIsSignOut(true);
          }}
          color='secondary'
          variant='contained'
        >
          Register
        </Button>
      )}

      {/* Opens to 400 since initial index is 1 */}
      <Backdrop
        sx={{
          zIndex: 'modal',
        }}
        onClick={() => setOpen(false)}
        open={isOpen}
      ></Backdrop>
      <Sheet
        ref={ref}
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        snapPoints={[0.6, 400]}
        initialSnap={isSignOut ? 0 : 1}
      >
        {/*@ts-ignore */}
        <Sheet.Container
          style={{
            background: 'transparent',
            boxShadow: 'none',
          }}
        >
          {/*@ts-ignore */}
          <Sheet.Content
            style={{
              maxWidth: '681px',
              background: '#fff',
              width: '100%',
              display: 'flex',
              alignSelf: 'center',
              borderTopRightRadius: '15px',
              borderTopLeftRadius: '15px',
              overflowY: 'hidden',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                bgcolor: '#eb988e',
                height: '100px',
                alignItems: 'center',
                padding: '0px 10px',
                color: 'white',
                fontWeight: '700',
                fontSize: '30px',
                justifyContent: 'space-between',
              }}
            >
              {isSignOut ? 'Registro' : 'Login'}
              <IconButton aria-label='delete' onClick={() => setOpen(false)}>
                <Close
                  sx={{
                    color: 'white',
                  }}
                />
              </IconButton>
            </Box>
            {isSignOut ? (
              <SignupComponent handleSetIsSignOut={setIsSignOut} />
            ) : (
              <SigninComponent handleSetIsSignOut={setIsSignOut} />
            )}
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </>
  );
};
