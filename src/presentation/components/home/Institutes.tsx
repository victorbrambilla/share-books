import React, { useEffect, useState } from 'react';
import axios from 'axios';
import instituteImg from '@/public/images/institute.jpg';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { NextPage } from 'next';
import { Slider } from '../slider/Slider';
import { InstituteModel } from '@/domain/models';
import { useReactHorizontalScrollingDrag } from '@/presentation/hooks/use-react-horizontal-scrolling-drag';

export function Institutes() {
  const { dragStart, dragStop, dragging, handleDrag } =
    useReactHorizontalScrollingDrag();
  const [institutes, setInstitutes] = useState<[InstituteModel]>();

  useEffect(() => {
    axios.get('/api/getInstitutes').then((res) => {
      console.log(res.data.institutes);
      setInstitutes(res.data.institutes);
    });
  }, []);

  return (
    <Box
      sx={{
        padding: '24px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography color={'secondary'} fontSize={'22px'} fontWeight={'bold'}>
          Institutos
        </Typography>
        <Typography
          color={'secondary'}
          fontSize={'18px'}
          fontWeight={'bold'}
          sx={{ cursor: 'pointer' }}
          variant='subtitle1'
        >
          Ver todos
        </Typography>
      </Box>
      <Box>
        {institutes && (
          <Slider
            dragStop={dragStop}
            onMouseDown={() => dragStart}
            onMouseUp={() => dragStop}
            onMouseMove={handleDrag}
          >
            {institutes.map((institute) => (
              <Card
                sx={{
                  margin: '20px',
                  maxWidth: '400px',
                  minWidth: '300px',
                  borderRadius: '10px',
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component='img'
                    height='140'
                    image={instituteImg.src}
                    alt='green iguana'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      Lizard
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size='small' color='primary' variant='contained'>
                    Ver
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Slider>
        )}
      </Box>
    </Box>
  );
}
