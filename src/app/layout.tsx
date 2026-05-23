import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Clínica YouDent",
  description:
    "Clínica dental en CDMX con atención cercana, diagnóstico claro y tratamientos personalizados en estética dental, implantes, ortodoncia y endodoncia.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X8S6R8BDXB"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X8S6R8BDXB');
          `}
        </Script>
      </head>

      <body>{children}</body>
    </html>
  );
}