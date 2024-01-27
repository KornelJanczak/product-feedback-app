import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

export const jost = Jost({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Product Feedback",
  description: "Create your own section!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.className} bg-darkWhite`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
