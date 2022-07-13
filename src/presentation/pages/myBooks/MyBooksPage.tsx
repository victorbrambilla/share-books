import React from 'react';
import { BookModel } from '@/domain/models';
import { BookCard } from '@/presentation/components/bookCard/BookCard';
import { Box, Container, Typography } from '@mui/material';

interface IProps {
  books: BookModel[];
}

export const MyBooksPage = ({ books }: IProps) => {
  return (
    <Container
      sx={{
        padding: '24px',
      }}
    >
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Typography variant='h4'>Meus Livros</Typography>
      </Box>
      <Box
        sx={{
          marginTop: '48px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '24px',
          justifyContent: 'space-between',
        }}
      >
        {books.map((book: BookModel) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Box>
    </Container>
  );
};
