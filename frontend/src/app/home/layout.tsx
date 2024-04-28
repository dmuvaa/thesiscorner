/** @format */
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
    title: {
        template: "%s | Home",
        default: "Thesis Corner",
        absolute: "Thesis Corner",
    },
    description: "Homepage for Thesis Corner. Your one-stop shop for all things Writing and Editing.",
};

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SessionProvider session={null}>
            <section>
                <Navbar />
                {children}
            </section>
        </SessionProvider>
        // <section>
        //     <Navbar />
        //     {children}
        // </section>
    );
}
