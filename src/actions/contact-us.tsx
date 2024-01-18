"use server";

import { Resend } from "resend";

import { ContactTemplate } from "../templates/contact";

export async function contactAdministration({ email }: { email: string }) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not defined");
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Development <noreply@r4zen.dev>",
      to: email,
      subject: "New contact request",
      react: ContactTemplate(),
    });
  } catch (err) {
    console.error(err);
  }
}
