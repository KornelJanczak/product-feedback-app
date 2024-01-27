import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

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
      <body className={jost.className}>{children}</body>
    </html>
  );
}
