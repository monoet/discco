import type { Metadata } from 'next';
import { Oswald, Inter } from 'next/font/google';
import './globals.css';

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DISCCO! — conexión creativa',
  description:
    'DISCCO! es un estudio creativo con tres ramas: branding y diseño, desarrollo web, y producción musical. Tres disciplinas, una misma conexión creativa.',
  keywords: ['branding', 'diseño', 'desarrollo web', 'producción musical', 'estudio creativo'],
  authors: [{ name: 'DISCCO!' }],
  openGraph: {
    title: 'DISCCO! — conexión creativa',
    description: 'Branding, web y música. Tres disciplinas, una misma conexión creativa.',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DISCCO! — conexión creativa',
    description: 'Branding, web y música. Tres disciplinas, una misma conexión creativa.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${oswald.variable} ${inter.variable}`}>
      <body className={`${inter.variable} ${oswald.variable} bg-discco-paper text-discco-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
