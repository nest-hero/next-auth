import NextAuth, { NextAuthOptions } from 'next-auth'
import Google from 'next-auth/providers/google'
import Github from 'next-auth/providers/github'
import Twitter from 'next-auth/providers/twitter'
import Facebook from 'next-auth/providers/facebook'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { AppConfig } from '@/config/app.config'
import { PrismaClient } from '@prisma/client'
import { decode, sign } from 'jsonwebtoken'

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },

  jwt: {
    encode(params) {
      return sign(params.token, params.secret)
    },
    decode(params) {
      return decode(params.token, params.secret)
    },
  },

  secret: '123456',

  adapter: PrismaAdapter(prisma),

  callbacks: {},

  providers: [
    Google({
      clientId: AppConfig.google.clientId,
      clientSecret: AppConfig.google.clientSecret,
    }),
    Github({
      clientId: '',
      clientSecret: '',
    }),
    Twitter({
      clientId: '',
      clientSecret: '',
      version: '2.0',
    }),
    Facebook({
      clientId: '',
      clientSecret: '',
    }),
  ],
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
