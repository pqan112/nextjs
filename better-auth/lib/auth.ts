import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./db";
import { nextCookies } from "better-auth/next-js";
import { sendVerificationEmail } from "./send-verification-email";
import { admin, twoFactor } from "better-auth/plugins";
import { sendOtpEmail } from "./send-otp-email";
import { sendResetPasswordEmail } from "./send-reset-password-email";
import { ac, roles } from "./permission";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ url }) => {
      void sendResetPasswordEmail({
        to: "anpham1122000@gmail.com",
        subject: "Reset Password",
        url,
      });
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url }) => {
      void sendVerificationEmail({
        to: "anpham1122000@gmail.com",
        url,
        userName: user.name,
      });
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      prompt: "select_account",
    },
  },
  rateLimit: {
    enabled: true,
    window: 10,
    max: 3,
  },
  plugins: [
    admin({
      ac,
      roles,
      defaultRole: "user",
      adminRoles: ["admin", "superadmin"],
    }),
    nextCookies(),
    twoFactor({
      skipVerificationOnEnable: true,
      otpOptions: {
        async sendOTP({ otp }) {
          sendOtpEmail({ to: "anpham1122000@gmail.com", otp });
        },
      },
    }),
  ],
});
