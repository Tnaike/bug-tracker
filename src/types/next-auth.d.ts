import 'next-auth';

declare module 'next-auth' {
  interface User {
    email: string | null;
    name: string | null;
  }
  interface Session {
    user: User & {
      email: string;
      name: string;
    };
    token: {
      email: string;
    };
  }
}
