import type { MetadataRoute } from "next";
import { clinic } from "@/lib/clinic";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: clinic.name,
    short_name: "YouDent",
    description: "Odontología integral en Del Valle Sur, Ciudad de México",
    lang: "es-MX",
    start_url: "/",
    scope: "/",
    display: "browser",
    background_color: "#eeeae4",
    theme_color: "#eeeae4",
    icons: [
      {src:"/icons/youdent-192.png",sizes:"192x192",type:"image/png",purpose:"any"},
      {src:"/icons/youdent-512.png",sizes:"512x512",type:"image/png",purpose:"any"},
    ],
  };
}
