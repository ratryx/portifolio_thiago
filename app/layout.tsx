import type { Metadata } from 'next';
import { Manrope, Inter, JetBrains_Mono } from 'next/font/google';
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
  title: 'Thiago Bettin Ramos — Desenvolvedor de Software',
  description:
    'Estudante de desenvolvimento de software e desenvolvedor com foco em back-end, automações, integrações de banco de dados e arquitetura de sistemas.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body bg-base-900 text-ice-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
