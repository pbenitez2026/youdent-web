import type { MetadataRoute } from "next";
import { clinic } from "@/lib/clinic";
export default function sitemap(): MetadataRoute.Sitemap {return [{url:`${clinic.url}/`,changeFrequency:"monthly",priority:1}];}
