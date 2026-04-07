import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, summary } = await request.json();

    if (!name || !email || !summary) {
      return NextResponse.json(
        { error: 'Nama, Email, dan Ringkasan diperlukan' },
        { status: 400 }
      );
    }

    const phoneNumber = '628233934478';
    
    const message = `Halo, saya tertarik untuk mendiskusikan sebuah proyek.\n\n*Detail Kontak:*\nNama: ${name}\nEmail: ${email}\n\n*Ringkasan Proyek:*\n${summary}`;
    
    // Encode the message to be URL safe
    const encodedMessage = encodeURIComponent(message);
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return NextResponse.json({ url: whatsappUrl });
    
  } catch (error) {
    console.error('WhatsApp API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
