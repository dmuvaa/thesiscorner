// import NextAuth from 'next-auth';

// export const config = {
//   // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
//   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// // };
// import { NextApiRequest, NextApiResponse } from 'next';
// import { getSession } from 'next-auth/client';

// export const middleware = async (req: NextApiRequest, res: NextApiResponse, next: () => void) => {
//     try {
//         const session = await getSession({ req });
//         if (!session) {
//             res.status(401).json({ error: 'Unauthorized' });
//             return;
//         }
//         // Add any additional middleware logic here
//         next();
//     } catch (error) {
//         console.error('Middleware error:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };
export { auth as middleware } from "@/auth"