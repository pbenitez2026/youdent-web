import type { MetadataRoute } from "next";
import { clinic } from "@/lib/clinic";
export default function robots(): MetadataRoute.Robots {
  return process.env.VERCEL_ENV === "production"
    ? {rules:{userAgent:"*",allow:"/"},sitemap:`${clinic.url}/sitemap.xml`}
    : {rules:{userAgent:"*",disallow:"/"}};
}
