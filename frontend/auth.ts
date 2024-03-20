import NextAuth from 'next-auth';
import type { NextAuthConfig } from 'next-auth';
// import { authConfig } from './auth.config';
import CredentialsProvider from 'next-auth/providers/credentials';
// import Google from "next-auth/providers/google";

// export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
//   ...authConfig,
//   providers: [
//     Credentials({
//       // The name to display on the sign in form (e.g. "Sign in with...")
//       name: "Credentials",
//       // `credentials` is used to generate a form on the sign in page.
//       // You can specify which fields should be submitted, by adding keys to the `credentials` object.
//       // e.g. domain, username, password, 2FA token, etc.
//       // You can pass any HTML attribute to the <input> tag through the object.
//       credentials: {
//         username: { label: "Username", type: "text", placeholder: "jsmith" },
//         password: { label: "Password", type: "password", placeholder: "********"}
//       },
//     async authorize(credentials: any, req: any) {
//         // Add logic here to look up the user from the credentials supplied
//         const user = { id: "1", username: "smith", email: "jsmith@example.com", password: "password" }

//         if (user) {
//             // Any object returned will be saved in `user` property of the JWT
//             return user
//         } else {
//             // If you return null then an error will be displayed advising the user to check their details.
//             return null

//             // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
//         }
//     }
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
// });
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
      return null;
    }
  }
}

const config = {
  providers: [
    CredentialsProvider(credentialsConfig),
    // Google({
    //   clientId: process.env.AUTH_GOOGLE_ID,
    //   clientSecret: process.env.AUTH_GOOGLE_SECRET,
    //   authorization: {
    //     params: {
    //       prompt: "consent",
    //       access_type: "offline",
    //       response_type: "code"
    //     }
    //   }
    // }) // Add closing parenthesis here
  ]
} satisfies NextAuthConfig;

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth(config);