import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import { getServerSession } from "next-auth/next";

// Configuration for NextAuth
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  // Add any additional options here, such as callbacks, pages, etc.
};

// Default export for NextAuth API route
export default NextAuth(authOptions);

// Helper function to get the session
export const getAuth = async (req, res) => {
  return await getServerSession(req, res, authOptions);
};
