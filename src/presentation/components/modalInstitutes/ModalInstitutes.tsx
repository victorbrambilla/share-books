import React, { useRef, useState } from 'react';
import Sheet, { SheetRef } from 'react-modal-sheet';
import { AddCircle, Close } from '@mui/icons-material';
import { Backdrop, Box, IconButton } from '@mui/material';
import { FormInstitute } from './FormInstitute';

export const ModalInstitutes = () => {
  const ref = useRef<SheetRef>();
  const snapTo = (i: number) => ref.current?.snapTo(i);
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <IconButton
        onClick={() => {
          setOpen(true);
        }}
      >
        <AddCircle
          sx={{
            color: 'white',
            fontSize: '32px',
          }}
        />
      </IconButton>
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
        snapPoints={[900, 800, 200, 0]}
        initialSnap={1}
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
                minHeight: '100px',
                alignItems: 'center',
                padding: '0px 10px',
                color: 'white',
                fontWeight: '700',
                fontSize: '30px',
                justifyContent: 'space-between',
              }}
            >
              Cadastrar Instituto
              <IconButton aria-label='delete' onClick={() => setOpen(false)}>
                <Close
                  sx={{
                    color: 'white',
                  }}
                />
              </IconButton>
            </Box>
            <FormInstitute />
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </>
  );
};
