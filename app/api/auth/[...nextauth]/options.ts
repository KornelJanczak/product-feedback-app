import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcryptjs from "bcryptjs";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  pages: {
    signIn: "/login",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        console.log(credentials);

        try {
          const { email, password } = credentials as {
            email: string;
            password: string;
          };

          console.log(email, password);
          const user = await prisma?.user.findFirst({
            where: {
              email,
            },
          });

          if (!user) return null;

          const passwordMatch = await bcryptjs.compare(
            password,
            user.password as string
          );

          if (!passwordMatch) return null;

          return user;
        } catch {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider == "credentials") return user;

      if (account?.provider === "github") {
        try {
          const existingUser = await prisma.user.findFirst({
            where: {
              email: user.email as string,
            },
          });

          if (existingUser) return existingUser;

          const newUser = await prisma.user.create({
            data: {
              userName: user.name!,
              email: user.email!,
            },
          });

          return newUser as any;
        } catch {
          return false;
        }
      }
    },
    async jwt({ token }) {
      const dbUser = await prisma.user.findFirst({
        where: {
          email: token.email as string,
        },
      });

      if (!dbUser) return token;

      return {
        id: dbUser.id,
        email: dbUser.email,
        name: dbUser.userName,
      };
    },

    async session({ token, session }) {
      if (token) {
        return {
          ...session,
          user: {
            email: token.email,
            name: token.name,
            id: token.id,
          },
        };
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // if (url.startsWith("/")) return `${baseUrl}`;
      // // Allows callback URLs on the same origin
      // else if (new URL(url).origin === baseUrl) return baseUrl;
      // return baseUrl;
      return "/";
    },
  },
};

export default NextAuth(authOptions);
