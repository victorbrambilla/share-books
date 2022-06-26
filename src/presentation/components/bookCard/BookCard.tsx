import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import bookImg from '@/public/images/book.jpg';
import React from 'react';

import { BookModel } from '@/domain/models';

interface IProps {
  book: BookModel;
}
export const BookCard = ({ book }: IProps) => {
  return (
    <Card
      sx={{
        margin: '20px',
        maxWidth: '300px',
        minWidth: '300px',
        borderRadius: '10px',
      }}
    >
      <CardActionArea>
        <CardMedia
          height='200px'
          sx={{
            objectFit: 'contain',
            backgroundColor: '#f5f5f5',
          }}
          component='img'
          image={bookImg.src}
          alt={book.name}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {book.name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Disponíveis: {book.stock}
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
