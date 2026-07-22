import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Manrope } from 'next/font/google';
import './globals.css';

const display = Manrope({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
});

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'Thiago Bettin Ramos — Desenvolvedor Web Full Stack',
    template: '%s | Thiago Bettin Ramos',
  },
  description:
    'Portfólio de Thiago Bettin Ramos, desenvolvedor web full stack com atuação em front-end, back-end, automações, integrações e aplicações completas.',
  keywords: [
    'Thiago Bettin Ramos',
    'desenvolvedor web full stack',
    'desenvolvedor frontend',
    'desenvolvedor backend',
    'Python',
    'JavaScript',
    'React',
    'Node.js',
    'Django',
    'PostgreSQL',
    'automações',
    'integrações',
  ],
  authors: [{ name: 'Thiago Bettin Ramos' }],
  creator: 'Thiago Bettin Ramos',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Thiago Bettin Ramos — Desenvolvedor Web Full Stack',
    description:
      'Front-end, back-end, automações e integrações reunidos na construção de aplicações web completas.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thiago Bettin Ramos — Desenvolvedor Web Full Stack',
    description:
      'Front-end, back-end, automações e integrações reunidos na construção de aplicações web completas.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} bg-base-900 font-body text-ice-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
