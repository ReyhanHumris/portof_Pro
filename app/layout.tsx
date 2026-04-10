import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Raihaan Humris | Fullstack Engineer",
    template: "%s | Raihaan Humris"
  },
  description: "Portofolio Raihaan Humris, Fullstack Systems Architect - Engineering the Digital Monolith. Layanan pengembangan website profesional di NTT.",
  keywords: ["Raihaan Humris", "Fullstack Engineer", "Web Developer", "Software Engineer", "Next.js", "Portfolio"],
  authors: [{ name: "Raihaan Humris" }],
  creator: "Raihaan Humris",
  
  // 1. SOLUSI LOGO: Menimpa favicon bawaan Vercel
  icons: {
    icon: [
      { url: "/favicon.ico", href: "/favicon.ico" }, // Favicon utama
    ],
    apple: [
      { url: "/favicon.ico", href: "/favicon.ico" }, // Untuk shortcut di iOS
    ],
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://raihaanhumris.vercel.app", 
    title: "Raihaan Humris | Fullstack Engineer",
    description: "Portofolio Raihaan Humris, Fullstack Systems Architect.",
    siteName: "Raihaan Humris Portfolio",
    images: [
      {
        url: "/IMG_2081.CR2.jpg", // Ini yang akan muncul di hasil pencarian Google
        width: 1200,
        height: 630,
        alt: "Raihaan Humris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raihaan Humris | Fullstack Engineer",
    description: "Portofolio Raihaan Humris.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Raihaan Humris",
    "image": "https://raihaanhumris.vercel.app/logo.png",
    "jobTitle": "Fullstack Engineer",
    "url": "https://raihaanhumris.vercel.app",
    "sameAs": [
      "https://github.com/raihaanhumris",
      "https://linkedin.com/in/raihaanhumris"
    ]
  };

  return (
    <html lang="id" className={`dark ${manrope.variable}`}>
      <head>
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <style>
          {`
            .material-symbols-outlined {
              font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
            }
          `}
        </style>
      </head>
      <body className={`${manrope.className} bg-surface text-on-surface antialiased flex flex-col min-h-screen`}>
        {children}
      </body>
    </html>
  );
}