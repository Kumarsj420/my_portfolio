import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

import Header from "./components/header";
import Sidebar from "./components/sidebar";
import BottomMenu from "./components/bmenu";


const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "About Me | Suraj Kumar – Web Developer & Portfolio",
  description: "About Me | Suraj Kumar – Next.js Web Developer & Designer",
};

if (typeof window !== "undefined") {
  const origConsoleError = console.error;
  console.error = (...args) => {
    if (args[0] instanceof Error && args[0].name === "AbortError") {
      return; 
    }
    origConsoleError(...args);
  };
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} bg-zinc-900`}
       >
        <div className="fixed  h-screen w-full -z-10 max-w-7xl px-4 py-10 sm:px-6 lg:px-8  left-1/2 -translate-x-1/2 flex gap-x-8">
          <div className="w-64 hidden lg:block"></div>
          <div className="bg-texture h-full w-full"></div>
        </div>
        <div className="flex min-h-full flex-col">
          <Header />
          <div className="mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8">
            <aside className="sticky top-[116px] hidden w-64 shrink-0 lg:block ">
              <Sidebar />
            </aside>
            <main className="flex-1 pb-16 lg:pb-0">
              {children}
            </main>
          </div>
        </div>
        <BottomMenu />
      </body>
    </html>
  );
}
