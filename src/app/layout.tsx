import type { Metadata } from "next";
import { Mulish, Roboto } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
	title: "Car Dealer Website",
	description: "A sick car dealer website with AI.",
};

const mulish = Mulish({
	weight: "variable",
	subsets: ["latin"],
	variable: "--font-heading",
	display: "swap",
});

const roboto = Roboto({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-body",
	display: "swap",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mulish.variable} ${roboto.variable} antialiased`}
      >
      <NextTopLoader showSpinner={false} />
        <NuqsAdapter>{children}</NuqsAdapter>
      <Toaster position="top-right" />
      </body>
    </html>
  );
}
