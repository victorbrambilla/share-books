import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth';
import { PrismaClient } from '@prisma/client';
import { confirmPasswordHash } from '../../../presentation/helpers/confirmPasswordHash';

const prisma = new PrismaClient();

type Iuser = {
  id: number | null;
  name: string | null;
  userName: string | null;
  email: string | null;
};

let userAccount: Iuser;

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize({ email, password }: any): Promise<any> {
        try {
          if (!email || !password) {
            return null;
          }
          const user = await prisma.user.findFirst({
            where: {
              email: email,
            },
          });

          if (user !== null) {
            const res = await confirmPasswordHash(password, user.password);
            if (res === true) {
              userAccount = {
                id: user.id,
                userName: user.userName,
                name: user.name,
                email: user.email,
              };

              return userAccount;
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
    maxAge: 3600, //1 hour
  },

  pages: {
    signIn: '../../signin',
    error: '/auth/error', // Error code passed in query string as ?
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          user,
        };
      }
      return token;
    },

    async session({ session, token }) {
      if (token.user) {
        session.user = token.user;
      }
      return session;
    },
  },
});
