import React from 'react';
import { BookModel } from '@/domain/models';
import { useReactHorizontalScrollingDrag } from '@/presentation/hooks/use-react-horizontal-scrolling-drag';
import { Box, Typography } from '@mui/material';
import { Slider } from '../slider/Slider';
import { BookCard } from '../bookCard/BookCard';

interface IProps {
  books: BookModel[];
}
export const Books = ({ books }: IProps) => {
  const { dragStart, dragStop, handleDrag } = useReactHorizontalScrollingDrag();

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
          Livros
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
      <Box mt={2}>
        {books && (
          <Slider
            dragStop={dragStop}
            onMouseDown={() => dragStart}
            onMouseUp={() => dragStop}
            onMouseMove={handleDrag}
          >
            {books.map((book: BookModel) => (
              <BookCard book={book} />
            ))}
          </Slider>
        )}
      </Box>
    </Box>
  );
};
