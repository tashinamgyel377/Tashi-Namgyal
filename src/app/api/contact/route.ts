// app/api/contact/route.ts

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY); // use env for security

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, message } = body;

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // must be verified in Resend
      to: 'tashinamgyel377@gmail.com',
      subject: `New message from ${email}`,
      html: `<p><strong>From:</strong> ${email}</p><p>${message}</p>`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
