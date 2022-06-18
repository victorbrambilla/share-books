import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { NextPage } from 'next';
import axios from 'axios';
import { Slider } from '../slider/Slider';
import { InstituteModel } from '@/domain/models';
import { useReactHorizontalScrollingDrag } from '@/presentation/hooks/use-react-horizontal-scrolling-drag';

export const Institutes: NextPage = () => {
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
        <Typography fontSize={'22px'} fontWeight={'bold'}>
          Institutes
        </Typography>
        <Typography
          color={'#f35713'}
          fontSize={'18px'}
          fontWeight={'bold'}
          sx={{ cursor: 'pointer' }}
          variant='subtitle1'
        >
          See all
        </Typography>
      </Box>
      {institutes && (
        <Slider
          dragStop={dragStop}
          onMouseDown={() => dragStart}
          onMouseUp={() => dragStop}
          onMouseMove={handleDrag}
        >
          {Array.from(institutes).map((institute) => (
            <Card sx={{ maxWidth: 345, margin: '20px' }}>
              <CardMedia
                component='img'
                height='140'
                image='/static/images/cards/contemplative-reptile.jpg'
                alt='green iguana'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Lizard
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
          ))}
        </Slider>
      )}
    </Box>
  );
};
