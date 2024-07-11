import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@app/globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "@components/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tracky",
  description: "Track your daily tasks",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
      <SessionProvider session={session}>{children}</SessionProvider></body>
    </html>
  );
}
