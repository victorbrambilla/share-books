import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth';
import { PrismaClient } from '@prisma/client';
import { confirmPasswordHash } from '../../../helpers/confirmPasswordHash';

const prisma = new PrismaClient();

type Iuser = {
  id: number | null;
  name: string | null;
  userName: string | null;
  email: string | null;
  password?: string | null;
};
let userAccount: Iuser;

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'credentials',
      async authorize(credentials: Iuser) {
        try {
          const user = await prisma.user.findFirst({
            where: {
              email: credentials.email,
            },
          });

          if (user !== null) {
            const res = await confirmPasswordHash(
              credentials.password,
              user.password
            );
            if (res === true) {
              userAccount = {
                id: user.id,
                userName: user.userName,
                name: user.name,
                email: user.email,
              };

              return user;
            } else {
              console.log('Hash not matched logging in');
              return null;
            }
          } else {
            console.log('Hash not matched logging in');
            return null;
          }
        } catch (err) {
          console.log('Authorize error:', err);
        }
      },
    }),
  ],

  session: {
    strategy: 'jwt',
    maxAge: 36000, //1 hour
  },

  pages: {
    signIn: '../../signin',
    error: '/auth/error', // Error code passed in query string as ?
  },

  callbacks: {
    async session({ session }) {
      session.user = {
        id: userAccount.id,
        userName: userAccount.userName,
        name: userAccount.name,
        email: userAccount.email,
      };
      return session;
    },
  },
});
