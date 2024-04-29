"use server";

import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
// import dynamic from 'next/dynamic';
import { auth } from '@/auth';

// const redirect = dynamic(() => import('next/router').then((router) => router.default), { ssr: false });


export async function authenticate(prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', formData, { callbackUrl: "/home/order" });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}

export const signProvider = async () => {

    await signIn("google", { callbackUrl: '/home/order'});
}

export const signUserOut = async () => {
    await signOut();
}

export const user = async () => {
    const session = await auth();
    const user = session?.user;
    const name = user?.name;
    const image = user?.image;
    const email = user?.email;
    return { name, image, email };
}