import { Resend } from "resend";
import VerificationEmail from "@/emails/verification-email";

type EmailProps = {
  to: string;
  url: string;
  userName: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async ({
  to,
  url,
  userName,
}: EmailProps) => {
  await resend.emails.send({
    from: process.env.EMAIL_FROM!,
    to,
    subject: "Welcome to betterauth-next",
    react: <VerificationEmail verificationUrl={url} userName={userName} />,
  });
};
