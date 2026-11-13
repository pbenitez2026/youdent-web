import Script from "next/script";

export function Analytics() {
  // Preserve production measurement, without sending preview / QA visits to the clinic's accounts.
  if (process.env.VERCEL_ENV !== "production") return null;
  return <>
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-X8S6RBBDXB" strategy="afterInteractive"/>
    <Script id="youdent-google-analytics" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-X8S6RBBDXB');`}</Script>
    <Script id="youdent-meta-pixel" strategy="afterInteractive">{`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','4311418345784316');fbq('track','PageView');`}</Script>
  </>;
}
