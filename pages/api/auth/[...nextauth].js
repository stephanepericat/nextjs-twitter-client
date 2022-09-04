import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";

export default NextAuth({
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
      version: "2.0",
      profile({ data }) {
        return {
          id: data.id,
          name: data.name,
          email: null,
          image: data.profile_image_url,
          username: data.username,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token;
      }

      if (profile) {
        token.userid = profile.data?.id;
        token.username = profile.data?.username;
      }

      return token;
    },

    async session({ session, token }) {
      const { userid, username } = token;

      session.user.id = userid;
      session.user.username = username;

      return session;
    },
  },
});
