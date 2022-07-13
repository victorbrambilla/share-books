import React from 'react';
import { BookModel } from '@/domain/models';
import { Box } from '@mui/system';
import { Button, Container, IconButton, Typography } from '@mui/material';
import { PlusOne } from '@mui/icons-material';
import { BookCard } from '@/presentation/components/bookCard/BookCard';
import ModalBooks from '@/presentation/components/modalBook/ModalBooks';

interface IProps {
  books: BookModel[];
}

export const BooksPage = ({ books }: IProps) => {
  console.log(books);
  return (
    <>
      <Container
        sx={{
          padding: '24px',
        }}
      >
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Typography variant='h4'>Livros</Typography>

          <ModalBooks book={null} />
        </Box>
        <Box
          sx={{
            marginTop: '48px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          {books.map((book: BookModel) => (
            <BookCard key={book.id} book={book} />
          ))}
        </Box>
      </Container>
    </>
  );
};
