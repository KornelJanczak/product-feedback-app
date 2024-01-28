import type { Metadata } from "next";
import { Jost } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import AuthProvider from "@/providers/session-provider";

export const jost = Jost({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Product Feedback",
  description: "Create your own section!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  console.log(session, "SE SJA");

  return (
    <html lang="en">
      <body
        className={`${jost.className} bg-darkWhite`}
        suppressHydrationWarning={true}
      >
        <AuthProvider session={session}>
          <Toaster position="top-center" />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
