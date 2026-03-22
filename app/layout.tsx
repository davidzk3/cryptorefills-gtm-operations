import "./globals.css";

export const metadata = {
  title: "Cryptorefills GTM Command System",
  description: "Operator-grade GTM system for Cryptorefills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}