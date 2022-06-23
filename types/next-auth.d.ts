import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      /** The user's postal address. */
      id: number | null;
      email: string | null;
      name: string | null;
      userName: string | null;
    };
  }

  interface User {
    id: number | null;
    email: string | null;
    name: string | null;
    userName: string | null;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: User;
    name?: string | null;
    email?: string | null;
    picture?: string | null;
    sub?: string;
  }
}
