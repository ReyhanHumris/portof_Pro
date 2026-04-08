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
  description: "Portofolio Raihaan Humris, Fullstack Systems Architect - Engineering the Digital Monolith. Layanan pengembangan website profesional.",
  keywords: ["Raihaan Humris", "Fullstack Engineer", "Web Developer", "Software Engineer", "Frontend Developer", "Backend Developer", "Next.js", "React", "Portfolio", "Jasa Pembuatan Website"],
  authors: [{ name: "Raihaan Humris" }],
  creator: "Raihaan Humris",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://raihaanhumris.vercel.app", 
    title: "Raihaan Humris | Fullstack Engineer",
    description: "Portofolio Raihaan Humris, Fullstack Systems Architect - Engineering the Digital Monolith. Ahli dalam pengembangan website.",
    siteName: "Raihaan Humris Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raihaan Humris | Fullstack Engineer",
    description: "Portofolio Raihaan Humris, Fullstack Systems Architect - Engineering the Digital Monolith. Ahli dalam pengembangan website.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`dark ${manrope.variable}`}>
      <head>
        <link rel="icon" href="https://raihaan-personal.vercel.app/favicon.ico" />
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
