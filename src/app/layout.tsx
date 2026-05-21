import "./globals.css";

export const metadata = {
  title: "YouDent",
  description: "Odontología estética y profesional en CDMX",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}