// /app/api/notify/route.ts

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "pranav9728@gmail.com",
    subject: "New Portfolio Visit!",
    html: `<p>Hey Pranav! Someone just viewed your portfolio at ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>`,
  });

  return Response.json({ success: true });
}
