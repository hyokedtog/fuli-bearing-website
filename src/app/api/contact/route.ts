import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const TO_EMAILS = ['fuxuepu@gmail.com'];

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await req.json();
  const { name, email, company, phone, product, quantity, message } = body;

  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
  }

  const { error: insertError } = await supabase
    .from('inquiries')
    .insert({ name, email, company, phone, product, quantity, message });

  if (insertError) {
    console.error('Supabase insert error:', insertError);
    return NextResponse.json({ error: 'Failed to save inquiry' }, { status: 500 });
  }

  const subject = `[Bearing Inquiry] ${company ? company + ' — ' : ''}${name}`;

  const html = `
    <h2>New Bearing Inquiry from FULI Website</h2>
    <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;background:#f5f5f5;">Name</td><td style="padding:8px;border:1px solid #ddd;">${name}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;background:#f5f5f5;">Email</td><td style="padding:8px;border:1px solid #ddd;">${email}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;background:#f5f5f5;">Company</td><td style="padding:8px;border:1px solid #ddd;">${company || '—'}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;background:#f5f5f5;">Phone / WhatsApp</td><td style="padding:8px;border:1px solid #ddd;">${phone || '—'}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;background:#f5f5f5;">Product Interested</td><td style="padding:8px;border:1px solid #ddd;">${product || '—'}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;background:#f5f5f5;">Quantity</td><td style="padding:8px;border:1px solid #ddd;">${quantity || '—'}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;background:#f5f5f5;">Message</td><td style="padding:8px;border:1px solid #ddd;">${message || '—'}</td></tr>
    </table>
    <p style="margin-top:16px;color:#888;font-size:12px;">Sent via fuli-bearing-website.vercel.app</p>
  `;

  try {
    const { error } = await resend.emails.send({
      from: 'FULI Website <onboarding@resend.dev>',
      to: TO_EMAILS,
      replyTo: email,
      subject,
      html,
    });

    if (error) {
      console.error('[contact] resend error:', error);
    }
  } catch (error) {
    console.error('[contact] resend exception:', error);
  }

  return NextResponse.json({ ok: true });
}
