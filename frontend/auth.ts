import NextAuth from 'next-auth';
import type { NextAuthConfig } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import Google from "next-auth/providers/google";

const credentialsConfig = {
  name: "Credentials",
  credentials: {
    username: { label: "Username", type: "text", placeholder: "jsmith" },
    password: { label: "Password", type: "password", placeholder: "********" }
  },
  async authorize(credentials: any, req: any) {
    const user = {
      id: "1", username: "smith", email: "", password: "password"
    };
    if (user) {
      return user;
    } else {
      throw new Error("user not found");
    }
  }
}

const config = {
  providers: [
    CredentialsProvider(credentialsConfig),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }) // Add closing parenthesis here
  ],
  secret: process.env.AUTH_SECRET
} satisfies NextAuthConfig;

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth(config);