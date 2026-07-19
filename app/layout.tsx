import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AFUPM',
  description: 'Associação de Futebol da Universidade Portuguesa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
