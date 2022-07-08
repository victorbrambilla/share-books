import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import instituteImg from '@/public/images/institute.jpg';
import React from 'react';

import { InstituteModel } from '@/domain/models';

interface IProps {
  institute: InstituteModel;
}
export const InstituteCard = ({ institute }: IProps) => {
  return (
    <Card
      sx={{
        margin: '20px',
        maxWidth: '300px',
        minWidth: '300px',
        borderRadius: '10px',
        height: '400px',
      }}
    >
      <CardActionArea>
        <CardMedia
          component='img'
          height='200'
          image={instituteImg.src}
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {institute.name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {institute.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary' variant='contained'>
          Ver
        </Button>
      </CardActions>
    </Card>
  );
};
