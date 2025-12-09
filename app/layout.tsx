import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Open_Sans } from "next/font/google";
import Navbar from "./components/layout/Navbar";
import Scroll from "./components/ui/Scroll";

export const metadata: Metadata = {
  title: "Blethershot",
  description: "Implemented a modern social application with a focus on user experience, built with React and Next.js, styled with Tailwind CSS, and incorporating secure authentication through Clerk and data management with Prisma.",
};

const open_sans = Open_Sans({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${open_sans.className}`}>
          <Scroll />

          <nav className="w-full bg-white/70 backdrop-blur-xl border-b border-[#e5e7eb] shadow-[0_8px_24px_rgba(0,0,0,0.06)] px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-32 fixed z-20">
            <Navbar />
          </nav>
        </body>
      </html>
    </ClerkProvider>
  );
}
