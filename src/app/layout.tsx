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
      <head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-X8S6R8BDXB"></script>

  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-X8S6R8BDXB');
      `,
    }}
  />
</head>
      <body>{children}</body>
    </html>
  );
}