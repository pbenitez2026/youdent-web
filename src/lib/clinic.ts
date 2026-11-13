export const clinic = {
  name: "YouDent CDMX",
  url: "https://www.clinicayoudent.com",
  whatsapp: "525625937193",
  displayPhone: "+52 56 2593 7193",
  email: "infopacientes@youdent.com.mx",
  address: "Félix Cuevas 301, piso 1, consultorio 107",
  neighborhood: "Del Valle Sur · Benito Juárez · CDMX",
  postalCode: "03104",
  maps: "https://maps.app.goo.gl/ALvf7W4xujUBQLzs9",
  instagram: "https://www.instagram.com/youdentcdmx",
  facebook: "https://www.facebook.com/youdentcdmx",
  rating: "4.9",
  hours: ["Lunes a viernes · 8:00 a 19:00", "Sábados · 8:00 a 16:00"],
} as const;

const messages = {
  valoracion: "Hola, YouDent. Me gustaría agendar una valoración dental.",
  ortodoncia: "Hola, YouDent. Quisiera consultar las opciones de ortodoncia y agendar una valoración.",
  endodoncia: "Hola, YouDent. Quisiera información para una valoración de endodoncia.",
  implantes: "Hola, YouDent. Me gustaría conocer las opciones de implantes dentales para mi caso.",
  periodoncia: "Hola, YouDent. Quisiera agendar una valoración de mis encías.",
  cirugia: "Hola, YouDent. Quisiera información para una valoración con cirugía maxilofacial.",
  restauraciones: "Hola, YouDent. Quisiera una valoración para una restauración dental.",
  escaneo: "Hola, YouDent. Quisiera saber si el escaneo intraoral puede ser útil para mi valoración.",
  equipo: "Hola, YouDent. Quisiera información para una valoración con su equipo.",
} as const;

export type ContactIntent = keyof typeof messages;
export function whatsappUrl(intent: ContactIntent = "valoracion") {
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(messages[intent])}`;
}

export const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${clinic.url}/#clinica`,
  name: clinic.name,
  url: clinic.url,
  image: `${clinic.url}/media/equipo-consultorio.webp`,
  logo: `${clinic.url}/brand/youdent-oficial.svg`,
  telephone: `+${clinic.whatsapp}`,
  email: clinic.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: clinic.address,
    addressLocality: "Benito Juárez",
    addressRegion: "Ciudad de México",
    postalCode: clinic.postalCode,
    addressCountry: "MX",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "16:00" },
  ],
  hasMap: clinic.maps,
  sameAs: [clinic.instagram, clinic.facebook],
};
