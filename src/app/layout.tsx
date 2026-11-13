import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@/components/analytics";
import { clinic } from "@/lib/clinic";
import "./globals.css";
import "./editorial.css";
import "./desktop-scale.css";

const sans = localFont({src:"./fonts/Manrope-latin.woff2",variable:"--font-manrope",weight:"200 800",display:"swap"});
const editorial = localFont({src:"./fonts/Fraunces-Italic-latin.woff2",variable:"--font-fraunces",weight:"100 900",style:"italic",display:"swap",preload:false});
const warmEditorial = localFont({src:"./fonts/Newsreader-Italic.woff2",variable:"--font-newsreader",weight:"200 800",style:"italic",display:"swap"});
const production=process.env.VERCEL_ENV === "production";

export const metadata: Metadata = {
  metadataBase: new URL(clinic.url),
  title: "YouDent | Odontología integral en Del Valle Sur, CDMX",
  description: "Conoce al equipo de YouDent en Del Valle Sur: ortodoncia, endodoncia, implantes, periodoncia y restauraciones. Agenda tu valoración por WhatsApp.",
  alternates: {canonical:"/"},
  openGraph: {type:"website",locale:"es_MX",url:"/",siteName:clinic.name,title:"YouDent | Especialistas en Del Valle Sur, CDMX",description:"Odontología integral, un equipo de especialistas y tecnología que puedes conocer. Del Valle Sur, CDMX.",images:[{url:"/og-youdent.png",width:1200,height:630,alt:"Equipo de YouDent en su consultorio de Del Valle Sur"}]},
  twitter: {card:"summary_large_image",title:"YouDent | Odontología integral en Del Valle Sur",images:["/og-youdent.png"]},
  applicationName: clinic.name,
  icons: {
    icon: [
      {url:"/favicon.ico?v=youdent-20261112",type:"image/x-icon",sizes:"16x16 32x32 48x48 64x64"},
      {url:"/icons/favicon-32.png?v=youdent-20261112",type:"image/png",sizes:"32x32"},
      {url:"/favicon.svg?v=youdent-20261112",type:"image/svg+xml",sizes:"any"},
    ],
    shortcut: "/favicon.ico?v=youdent-20261112",
    apple: [{url:"/apple-touch-icon.png?v=youdent-20261112",type:"image/png",sizes:"180x180"}],
  },
  robots: production ? {index:true,follow:true} : {index:false,follow:false},
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="es-MX" className={`${sans.variable} ${editorial.variable} ${warmEditorial.variable}`}><body>{children}<Analytics/></body></html>;
}
