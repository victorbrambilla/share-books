import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      /** The user's postal address. */
      id: number;
      email: string;
      name: string;
      userName: string;
    };
  }

  interface User {
    id: number;
    email: string;
    name: string;
    userName: string;
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
