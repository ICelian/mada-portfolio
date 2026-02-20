import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
import { NextRequest } from 'next/server';
import { createElement } from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, contact, message } = body;

    if (!name || !contact || !message) {
      return Response.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM || 'Mada4Bang Collab <onboarding@resend.dev>',
      to: ['mada4bangpro@gmail.com'],
      subject: `Nouveau message de ${name}`,
      react: createElement(EmailTemplate, { name, contact, message }),
      replyTo: contact.includes('@') ? contact : undefined,
    });

    if (error) {
      console.error('Resend error:', JSON.stringify(error));
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error('API error:', error);
    return Response.json(
      { 
        error: 'Erreur lors de l\'envoi du message',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}
