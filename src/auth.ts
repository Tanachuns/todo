import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  //adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GitHub({
      clientId: process.env.GH_CLIENT_ID as string,
      clientSecret: process.env.GH_CLIENT_SECRET as string,
    }),
  ],
  // pages: {
  //   signIn: "/login",
  // },
});
