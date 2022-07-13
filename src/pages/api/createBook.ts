import { makeRemoteRegisterBook } from '@/main/factories/usecases/books/makeRemoteUpdateBookById';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method === 'POST') {
    const body = req.body;
    const book = await makeRemoteRegisterBook().perform(body);
    console.log(book);
    res.status(200).json({ book });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
