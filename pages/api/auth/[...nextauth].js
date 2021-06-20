import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers: [
    Providers.Okta({
      clientId: process.env.OKTA_CLIENTID,
      clientSecret: process.env.OKTA_CLIENTSECRET,
      domain: process.env.OKTA_DOMAIN,
    }),
  ],
  callbacks: {
    async redirect(url, baseUrl) {
      return `${baseUrl}/content`; //specify where to redirect after login
    },
  },
};

export default (req, res) => NextAuth(req, res, options);
