"use client";

import Image from "next/image";
import {
  ClipboardPlus,
  Handshake,
  Sparkles,
  MapPinned,
  Mail,
  Phone,
  ScanSearch,
  MessageCircleQuestion,
  Route,
  HeartHandshake,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const whatsappUrl =
  "https://wa.me/525625937193?text=Hola%20YouDent%2C%20quiero%20agendar%20una%20cita.";

const googleMapsUrl = "https://maps.app.goo.gl/ALvf7W4xujUBQLzs9";


const handleWhatsAppClick = () => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "contact", {
      event_category: "engagement",
      event_label: "whatsapp_click",
    });
  }
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "Contact");
  }
  window.open(whatsappUrl, "_blank");
};
const heroImages = [
  "/images/team_1.jpg",
  "/images/team_2.jpg",
  "/images/team_3.jpg",
  "/images/team_4.jpg",
  "/images/team_5.jpg",
  "/images/team_6.jpg",
];

const teamInfoByImage: Record<
  string,
  { specialty: string; description: string; name: string }
> = {
  "/images/team_2.jpg": {
    specialty: "Periodoncia&  Implantología",
    description: "Salud, estética y cuidado de encías",
    name: "— Dra. Sandra Camacho",
  },
  "/images/team_3.jpg": {
    specialty: "Ortodoncia estética",
    description: "Armonización funcional de la sonrisa",
    name: "— Dra. Christel Ramírez",
  },
  "/images/team_4.jpg": {
    specialty: "Cirugía maxilofacial",
    description: "Diagnóstico y tratamiento quirúrgico especializado",
    name: "— Dr. Marco Maturano",
  },
  "/images/team_5.jpg": {
    specialty: "Odontología familiar",
    description: "Atención dental para niños y adultos",
    name: "— Dra. Verónica Téllez",
  },
  "/images/team_6.jpg": {
    specialty: "Odontología restaurativa",
    description: "Rehabilitación estética y funcional de la sonrisa",
    name: "— Dra. Perla Benítez",
  },
};

const visitInfo = [
  {
    title: "Horarios",
    icon: <Phone strokeWidth={1.7} className="h-4 w-4" />,
    lines: [
      "Lunes a viernes · 8:00 am a 7:00 pm",
      "Sábados · 8:00 am a 4:00 pm",
      "Atención con previa cita.",
    ],
  },
  {
    title: "Ubicación",
    icon: <MapPinned strokeWidth={1.7} className="h-4 w-4" />,
    lines: [
      "Félix Cuevas 301, Piso 1, Consultorio 107.",
      "Col. Del Valle Sur, Benito Juárez, CDMX.",
      "Zona céntrica y de fácil acceso.",
    ],
  },
  {
    title: "Importante",
    icon: <ClipboardPlus strokeWidth={1.7} className="h-4 w-4" />,
    lines: [
      "La valoración es el primer paso para atenderte.",
      "Cada tratamiento requiere diagnóstico presencial.",
      "Así podemos indicarte el plan adecuado para tu caso.",
    ],
  },
];


const processSteps = [
  {
    title: "Valoración profesional",
    text: "Revisamos tu caso y escuchamos tus objetivos.",
    Icon: ScanSearch,
    fill: "bg-[#102A5E]",
  },
  {
    title: "Diagnóstico explicado",
    text: "Entiendes tus opciones, prioridades y tiempos.",
    Icon: MessageCircleQuestion,
    fill: "bg-[#29C1D5]",
  },
  {
    title: "Plan de tratamiento",
    text: "Diseñamos una ruta clara y personalizada.",
    Icon: Route,
    fill: "bg-[#102A5E]",
  },
  {
    title: "Seguimiento cercano",
    text: "Te acompañamos durante cada etapa.",
    Icon: HeartHandshake,
    fill: "bg-[#29C1D5]",
  },
];

const services = [
  {
    title: "Ortodoncia",
    image: "/images/orto.jpg",
    eyebrow: "Alineación estética",
    text: "Armonización funcional y estética de la sonrisa.",
  },
  {
    title: "Endodoncia",
    image: "/images/endo.jpg",
    eyebrow: "Conservación dental",
    text: "Tratamiento para conservar dientes con daño pulpar.",
  },
  {
    title: "Implantes dentales",
    image: "/images/implantes.jpg",
    eyebrow: "Reposición fija",
    text: "Planeación especializada para recuperar función y estabilidad.",
  },
  {
    title: "Periodoncia",
    image: "/images/perio.jpg",
    eyebrow: "Salud de encías",
    text: "Cuidado avanzado de encías, soporte dental y estética gingival.",
  },
  {
    title: "Cirugía maxilofacial",
    image: "/images/maxilo.jpg",
    eyebrow: "Especialidad quirúrgica",
    text: "Diagnóstico y tratamiento quirúrgico especializado.",
  },
  {
    title: "Resinas estéticas",
    image: "/images/resi.jpg",
    eyebrow: "Restauración natural",
    text: "Restauraciones estéticas para mejorar forma, color y función.",
  },
];

const clinicalSequence = [
  {
    step: "01",
    title: "Evaluación",
    image: "/images/cambio3.jpg",
  },
  {
    step: "02",
    title: "Preparación",
    image: "/images/cambio4.jpg",
  },
  {
    step: "03",
    title: "Adhesión",
    image: "/images/cambio5.jpg",
  },
  {
    step: "04",
    title: "Resultado",
    image: "/images/cambio6.jpg",
  },
];

const scannerBenefits = [
  "Sin pastas incómodas",
  "Registro digital preciso",
  "Mejor planeación clínica",
  "Visualización clara para el paciente",
];

const googleReviews = [
  {
    name: "Rosalilia Vélez Varela",
    text: "Excelente atención. Fui atendida con amabilidad y eficiencia; los precios son adecuados.",
  },
  {
    name: "Albino Moreno",
    text: "Súper profesional. Excelente doctora y persona. Horarios flexibles. Súper recomendable.",
  },
  {
    name: "Norma Liliana Anaya",
    text: "Dan un excelente servicio. La Dra. Perla es excelente dentista y muy amable. Recomiendo al 100%.",
  },
  {
    name: "Alejandra Nava",
    text: "El servicio es excelente. Me explicaron muy bien todo lo que iban a hacerme; la Dra. Perla es amable y cuidadosa.",
  },
  {
    name: "Jorge Vidal",
    text: "Muy buena atención, tratamientos bien hechos y sin dolor. Se nota la experiencia y el cuidado en el trabajo dental.",
  },
  {
    name: "Alejandrina Allard",
    text: "La Dra. Perla es excelente dentista. Me explicó con claridad el tratamiento y el consultorio está impecable.",
  },
  {
    name: "Janeth Avila Tapia",
    text: "Excelente atención. La doctora es sumamente profesional y atenta.",
  },
  {
    name: "Isaac García",
    text: "Gran servicio e información clara y precisa sobre el tratamiento. Muy buena ubicación de la clínica.",
  },
  {
    name: "Nelly Avila",
    text: "Excelente atención, lugar muy limpio, con todos los servicios y puntuales. Un espacio que da seguridad.",
  },
  {
    name: "Valeria Reyes",
    text: "La Dra. Perla es súper amable, explica todo muy bien y es muy profesional. Súper recomendable.",
  },
  {
    name: "Mariana Sada",
    text: "Calidad en el servicio, excelente atención y trato, higiene y un consultorio agradable.",
  },
  {
    name: "Ana Valentina López De Cea",
    text: "Perla Benítez es una excelente dentista. Explica y responde dudas, lo cual da tranquilidad; su trabajo es muy prolijo.",
  },
];

const diagnosticPoints = [
  {
    title: "Consulta y valoración clínica",
    text: "Revisamos tu caso, síntomas, objetivos y prioridades antes de indicar un tratamiento.",
    Icon: ClipboardPlus,
  },
  {
    title: "Radiografía panorámica",
    text: "Complementamos la exploración con estudios cuando el diagnóstico lo requiere.",
    Icon: ScanSearch,
  },
  {
    title: "Escáner intraoral 3D",
    text: "Mapeamos estructuras dentales para planear con mayor precisión y comodidad.",
    Icon: Sparkles,
  },
  {
    title: "Plan personalizado",
    text: "Definimos alcance, tiempos y alternativas de tratamiento de forma clara.",
    Icon: Route,
  },
];


function ToothDiagnosticVisual() {
  return (
    <div className="relative mx-auto flex h-[360px] w-full max-w-[420px] items-center justify-center md:h-[430px]">
      <div className="absolute h-[310px] w-[310px] rounded-full bg-white/70 shadow-[0_30px_90px_rgba(15,23,42,0.10)] ring-1 ring-white/80 backdrop-blur-2xl md:h-[370px] md:w-[370px]" />
      <div className="absolute h-[250px] w-[250px] rounded-full border border-[#29C1D5]/20 md:h-[300px] md:w-[300px]" />
      <div className="absolute h-[330px] w-[330px] animate-[orbit_16s_linear_infinite] rounded-full border border-dashed border-[#29C1D5]/25 md:h-[390px] md:w-[390px]" />

      {[0, 1, 2, 3].map((dot) => (
        <span
          key={dot}
          className="absolute h-3 w-3 rounded-full bg-[#29C1D5] shadow-[0_0_25px_rgba(41,193,213,0.65)]"
          style={{
            transform: `rotate(${dot * 90}deg) translateX(165px) rotate(-${dot * 90}deg)`,
          }}
        />
      ))}

      <div className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_45%_30%,rgba(255,255,255,0.95),rgba(41,193,213,0.08)_55%,rgba(107,53,168,0.06)_100%)] blur-[1px] md:h-[285px] md:w-[285px]" />

      <svg
        viewBox="0 0 260 300"
        className="relative z-10 h-[250px] w-[230px] animate-[toothFloat_5.5s_ease-in-out_infinite] drop-shadow-[0_30px_45px_rgba(16,42,94,0.18)] md:h-[310px] md:w-[285px]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="toothBody" x1="62" y1="28" x2="195" y2="276" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.48" stopColor="#F4FCFD" />
            <stop offset="1" stopColor="#DDEFF5" />
          </linearGradient>
          <radialGradient id="toothGlow" cx="42%" cy="20%" r="65%">
            <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="0.55" stopColor="#29C1D5" stopOpacity="0.10" />
            <stop offset="1" stopColor="#102A5E" stopOpacity="0.10" />
          </radialGradient>
          <linearGradient id="rootShade" x1="95" y1="150" x2="180" y2="285">
            <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.0" />
            <stop offset="1" stopColor="#102A5E" stopOpacity="0.10" />
          </linearGradient>
        </defs>

        <path
          d="M130 28C98 28 77 43 64 66C48 94 58 122 70 147C82 174 82 212 89 244C93 264 102 280 116 280C132 280 133 242 141 219C146 204 153 204 158 219C166 242 167 280 184 280C198 280 207 264 211 244C218 211 218 176 231 147C242 122 252 94 236 66C223 43 202 28 170 28C153 28 143 35 130 35C117 35 107 28 130 28Z"
          fill="url(#toothBody)"
          stroke="#FFFFFF"
          strokeWidth="8"
          strokeLinejoin="round"
        />

        <path
          d="M78 82C100 55 114 76 130 76C146 76 160 55 182 82C197 101 194 126 180 144C166 163 148 158 130 158C112 158 94 163 80 144C66 126 63 101 78 82Z"
          fill="url(#toothGlow)"
          opacity="0.9"
        />

        <path
          d="M100 170C112 192 107 238 116 267C130 243 128 207 139 184C148 206 151 243 184 267C193 238 188 192 200 170"
          fill="none"
          stroke="url(#rootShade)"
          strokeWidth="10"
          strokeLinecap="round"
        />

        <path
          d="M83 104C98 82 113 98 130 98C147 98 162 82 177 104"
          fill="none"
          stroke="#29C1D5"
          strokeOpacity="0.18"
          strokeWidth="5"
          strokeLinecap="round"
        />

        <path
          d="M92 66C106 54 119 61 130 63C141 61 154 54 168 66"
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity="0.85"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute bottom-8 left-1/2 z-20 h-3 w-36 -translate-x-1/2 rounded-full bg-[#102A5E]/10 blur-md" />
    </div>
  );
}


function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} fill-none`} aria-hidden="true">
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="3.4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} fill-current`} aria-hidden="true">
      <path d="M14.2 8.2V6.8c0-.7.5-.9.9-.9h2V2.4L14.4 2.4c-3.1 0-4.6 1.9-4.6 4.5v1.3H7.2v3.7h2.6V22h4.1V11.9h2.9l.5-3.7h-3.1Z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={`${className} fill-white`}>
      <path d="M16.04 3C9.46 3 4.12 8.28 4.12 14.78c0 2.58.85 4.96 2.28 6.9L5 29l7.5-1.96a12.1 12.1 0 0 0 3.54.52c6.58 0 11.92-5.28 11.92-11.78S22.62 3 16.04 3Zm0 22.55c-1.1 0-2.18-.17-3.2-.52l-.46-.15-4.45 1.16.84-4.33-.29-.44a10.48 10.48 0 0 1-1.84-5.95c0-5.4 4.45-9.8 9.9-9.8s9.9 4.4 9.9 9.8-4.45 9.8-9.9 9.8Zm5.42-7.35c-.3-.15-1.77-.86-2.04-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.01-1.04 2.47s1.07 2.87 1.22 3.07c.15.2 2.1 3.18 5.08 4.45.71.3 1.26.48 1.69.62.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [startCarousel, setStartCarousel] = useState(false);
  const [showGlass, setShowGlass] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const introRef = useRef<HTMLElement | null>(null);
const [showServices, setShowServices] = useState(false);
const servicesHeaderRef = useRef<HTMLDivElement | null>(null);
  const [showClinical, setShowClinical] = useState(false);
  const clinicalRef = useRef<HTMLElement | null>(null);
  const [showScanner, setShowScanner] = useState(false);
  const scannerRef = useRef<HTMLElement | null>(null);
  const [showLocation, setShowLocation] = useState(false);
  const locationRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const glassTimer = window.setTimeout(() => {
      setShowGlass(true);
    }, 900);

    const carouselTimer = window.setTimeout(() => {
      setStartCarousel(true);
    }, 2800);

    return () => {
      window.clearTimeout(glassTimer);
      window.clearTimeout(carouselTimer);
    };
  }, []);

  useEffect(() => {
    if (!startCarousel) return;

    const interval = window.setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [startCarousel]);
const servicesRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  const container = servicesRef.current;

  if (!container) return;

  let animationFrame: number;

  const autoScroll = () => {
    container.scrollLeft += 0.45;

    if (
      container.scrollLeft + container.clientWidth >=
      container.scrollWidth - 1
    ) {
      container.scrollLeft = 0;
    }

    animationFrame = requestAnimationFrame(autoScroll);
  };

  animationFrame = requestAnimationFrame(autoScroll);

  return () => cancelAnimationFrame(animationFrame);
}, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowIntro(true);
          observer.disconnect();
        }
      },
      { threshold: 0.22 }
    );

    if (introRef.current) {
      observer.observe(introRef.current);
    }

    return () => observer.disconnect();
  }, []);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setShowServices(true);
        observer.disconnect();
      }
    },
    { threshold: 0.25 }
  );

  if (servicesHeaderRef.current) {
    observer.observe(servicesHeaderRef.current);
  }

  return () => observer.disconnect();
}, []);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setShowClinical(true);
        observer.disconnect();
      }
    },
    { threshold: 0.18 }
  );

  if (clinicalRef.current) {
    observer.observe(clinicalRef.current);
  }

  return () => observer.disconnect();
}, []);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setShowScanner(true);
        observer.disconnect();
      }
    },
    { threshold: 0.22 }
  );

  if (scannerRef.current) {
    observer.observe(scannerRef.current);
  }

  return () => observer.disconnect();
}, []);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setShowLocation(true);
        observer.disconnect();
      }
    },
    { threshold: 0.18 }
  );

  if (locationRef.current) {
    observer.observe(locationRef.current);
  }

  return () => observer.disconnect();
}, []);
  const currentTeamInfo = teamInfoByImage[heroImages[currentImage]];

  return (
    <main className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FCFD_18%,#FFFFFF_38%,#F8FCFD_62%,#FFFFFF_100%)] text-[#102033]">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Infant:ital,wght@0,500;0,600;0,700;1,500&family=Manrope:wght@300;400;500;600;700;800;900&family=Sora:wght@400;500;600;700&display=swap");

        body {
          font-family: "Manrope", Arial, sans-serif;
        }
        @keyframes scanLine {
  0%, 100% {
    left: 18%;
    opacity: 0.25;
  }

  50% {
    left: 78%;
    opacity: 1;
  }
}

@keyframes scanGlow {
  0%, 100% {
    opacity: 0.25;
    transform: scale(1);
  }

  50% {
    opacity: 0.75;
    transform: scale(1.08);
  }
}

@keyframes gridMove {
  from {
    background-position: 0 0;
  }

  to {
    background-position: 84px 84px;
  }
}  
@keyframes serviceIntro {
  from {
    opacity: 0;
    transform: translateY(18px);
    filter: blur(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}
@keyframes compareClip {
  0%,
  100% {
    clip-path: inset(0 0 0 66%);
  }
  50% {
    clip-path: inset(0 0 0 28%);
  }
}

@keyframes compareHandle {
  0%,
  100% {
    left: 66%;
  }
  50% {
    left: 28%;
  }
}

.compare-after {
  animation: compareClip 6.5s ease-in-out infinite;
}

.compare-handle {
  animation: compareHandle 6.5s ease-in-out infinite;
}

@keyframes toothFloat {
  0%,
  100% {
    transform: translateY(0) rotate(-1deg);
  }
  50% {
    transform: translateY(-14px) rotate(1deg);
  }
}

@keyframes orbit {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes diagnosticPulse {
  0%,
  100% {
    opacity: 0.45;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.08);
  }
}

@keyframes scannerFloat {
  0%,
  100% {
    transform: translateY(0) rotate(-6deg);
  }
  50% {
    transform: translateY(-10px) rotate(-2deg);
  }
}

@keyframes scannerSweep {
  0%,
  100% {
    transform: translateX(-42%) scaleX(0.72);
    opacity: 0.45;
  }
  50% {
    transform: translateX(42%) scaleX(1);
    opacity: 1;
  }
}

@keyframes softPulse {
  0%,
  100% {
    opacity: 0.45;
    transform: scale(1);
  }
  50% {
    opacity: 0.95;
    transform: scale(1.04);
  }
}

@keyframes reviewsTrack {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

        @keyframes teamTextIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .service-carousel {
          scrollbar-width: none;
        }

        .service-carousel::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <header className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-6 md:py-4">
          <Image
            src="/logo_youdent_transparente.png"
            alt="YouDent"
            width={170}
            height={80}
            priority
            className="h-auto w-[116px] md:w-[135px]"
          />

          <div className="hidden items-center gap-9 text-sm font-bold text-[#102A5E] md:flex">
            <a href="#inicio" className="border-b-2 border-[#6FA8B8] pb-2">
              Inicio
            </a>
            <a href="#diagnostico" className="hover:text-[#6FA8B8]">
              Atención inicial
            </a>
            <a href="#tratamientos" className="hover:text-[#6FA8B8]">
              Servicios
            </a>
            <a href="#ubicacion" className="hover:text-[#6FA8B8]">
              Ubicación
            </a>
            <a href="#nosotros" className="hover:text-[#6FA8B8]">
              Nosotros
            </a>
          </div>

          <a
            href="tel:+525625937193"
            aria-label="Llamar a YouDent"
            className="ml-2 hidden h-12 w-12 items-center justify-center rounded-full bg-white text-[#102A5E] shadow-md transition hover:scale-100 hover:text-[#29C1D5] md:flex"
          >
            <Phone className="h-3.5 w-3.5 rotate-[-12deg]" strokeWidth={2.4} />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            className="hidden items-center gap-2 rounded-full bg-[#102A5E] px-6 py-3 text-sm font-black text-white shadow-lg transition-all hover:scale-105 sm:inline-flex hover:bg-[#29C1D5] hover:text-white hover:shadow-[0_24px_70px_rgba(41,193,213,0.28)]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Cita de diagnóstico
          </a>
        </nav>
      </header>

      <section
        id="inicio"
        className="relative overflow-hidden bg-transparent px-4 pb-8 pt-24 md:px-6 md:pb-10 md:pt-32"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F4FAFC] to-white" />

        <div className="relative mx-auto max-w-7xl">
          {/* HERO MÓVIL LIMPIO */}
          <div className="md:hidden">
            <div className="overflow-hidden rounded-[2rem] border border-[#E4F1F5] bg-white/80 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.10)] backdrop-blur-2xl">
              <div className="rounded-[1.6rem] bg-[linear-gradient(135deg,#F8FCFD_0%,#FFFFFF_55%,#F4EEF9_100%)] p-5">
                <p className="text-[0.68rem] font-black uppercase tracking-[0.28em] text-[#6FA8B8]">
                  Tu sonrisa, nuestra prioridad
                </p>

                <h1 className="mt-4 text-[2.05rem] font-black leading-[1.02] tracking-[-0.055em] text-[#102A5E]">
                  Odontología estética y funcional con atención personalizada
                </h1>

                <p className="mt-4 text-[0.98rem] font-light leading-[1.75] text-slate-600">
                  Confiar tu sonrisa no debería sentirse incierto.
En YouDent unimos diagnóstico preciso, criterio clínico y trato humano desde la primera valoración
                </p>

                <div className="mt-5 flex w-fit items-center gap-2 rounded-full border border-[#DCEAF0] bg-white/85 px-4 py-2 shadow-sm">
                  <span className="text-sm font-black text-[#102A5E]">Google</span>
                  <span className="text-sm font-black text-[#F4A300]">4.9</span>
                  <span className="text-xs tracking-[0.08em] text-[#F4A300]">★★★★★</span>
                </div>

                <div className="mt-5 grid gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#102A5E] px-6 py-4 text-center text-sm font-black text-white shadow-xl transition-all hover:bg-[#29C1D5]"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                      <WhatsAppIcon className="h-5 w-5" />
                    </span>
                    Agendar cita
                  </a>

                  <a
                    href="#tratamientos"
                    className="w-full rounded-full border border-[#DCEAF0] bg-white/80 px-6 py-4 text-center text-sm font-black text-[#102A5E] shadow-sm"
                  >
                    Ver servicios
                  </a>
                </div>
              </div>

              <div className="relative mt-4 h-[410px] overflow-hidden rounded-[1.8rem] bg-[#102A5E] shadow-[0_18px_55px_rgba(16,42,94,0.16)]">
                {heroImages.map((image, index) => (
                  <Image
                    key={image}
                    src={image}
                    alt="Especialista YouDent"
                    fill
                    priority={index === 0}
                    className={`object-cover object-[78%_center] transition-all duration-1000 ease-in-out ${
                      index === currentImage
                        ? "scale-100 opacity-100"
                        : "scale-[1.015] opacity-0"
                    }`}
                  />
                ))}

                <div className="absolute inset-0 bg-gradient-to-t from-[#071A42]/72 via-transparent to-transparent" />

                {currentTeamInfo && (
                  <div
                    key={`mobile-${heroImages[currentImage]}`}
                    className="absolute bottom-5 left-5 right-5"
                    style={{ animation: "teamTextIn 720ms ease-out forwards" }}
                  >
                    <div className="mb-3 h-[3px] w-14 rounded-full bg-[#29C1D5]" />
                    <p className="text-[1.55rem] font-black leading-[1.02] tracking-[-0.04em] text-white">
                      {currentTeamInfo.specialty}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/82">
                      {currentTeamInfo.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* HERO DESKTOP ORIGINAL */}
          <div className="hidden md:block">
            <div className="relative min-h-[500px] overflow-hidden rounded-[2.5rem] shadow-2xl shadow-gray-200">
              {heroImages.map((image, index) => (
                <Image
                  key={image}
                  src={image}
                  alt="Especialista YouDent"
                  fill
                  priority={index === 0}
                  className={`object-cover object-center transition-all duration-1000 ease-in-out ${
                    index === currentImage
                      ? "scale-100 opacity-100"
                      : "scale-[1.015] opacity-0"
                  }`}
                  style={{
                    animation:
                      index === 0 ? "heroPhotoIn 1200ms ease-out forwards" : "",
                  }}
                />
              ))}

              <div className="absolute inset-0 z-[1] bg-[#102A5E]/[0.10]" />

              <div className="absolute inset-y-0 left-0 z-[2] w-[48%] bg-gradient-to-r from-[#102A5E]/45 via-[#102A5E]/20 to-transparent backdrop-blur-[1px]" />

              {currentTeamInfo && (
                <div
                  key={heroImages[currentImage]}
                  className="absolute left-[40%] top-[10%] z-20 max-w-[255px] text-left"
                  style={{
                    animation: "teamTextIn 720ms ease-out forwards",
                  }}
                >
                  <div className="mb-5 h-[2px] w-10 rounded-full bg-[#6FA8B8]/65" />

                  <p
                    className="text-[2.65rem] font-[650] leading-[0.94] tracking-[-0.035em] text-[#102A5E]"
                    style={{
                      fontFamily: '"Sora", sans-serif',
                    }}
                  >
                    {currentTeamInfo.specialty}
                  </p>

                  <div className="mt-4 h-[1px] w-9 rounded-full bg-[#6B35A8]/22" />

                  <p className="mt-4 max-w-[245px] text-[0.92rem] font-normal leading-[1.45] tracking-[-0.005em] text-[#102A5E]/70">
                    {currentTeamInfo.description}
                  </p>

                  <p
                    className="mt-4 text-[0.84rem] font-medium italic tracking-[0.01em] text-[#6B35A8]/72"
                    style={{
                      fontFamily: '"Cormorant Infant", Georgia, serif',
                    }}
                  >
                    {currentTeamInfo.name}
                  </p>
                </div>
              )}

              <div
                className={`absolute left-8 top-[44%] z-20 h-fit w-[33%] -translate-y-1/2 rounded-[1.7rem] border border-white/25 bg-white/16 px-6 py-8 text-white shadow-2xl shadow-[#102A5E]/18 backdrop-blur-2xl transition-all duration-700 ease-out ${
                  showGlass
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-6 opacity-0"
                }`}
              >
                <p className="mb-5 text-center text-xs font-black uppercase tracking-[0.22em] text-white/70">
                  Tu sonrisa, nuestra prioridad
                </p>

                <h1 className="text-center text-xl font-black leading-none tracking-tight drop-shadow-lg">
                  Odontología estética y funcional con atención personalizada
                </h1>

                <div className="mt-6 h-1 w-24 rounded-full bg-[#6FA8B8]" />

                <p className="mt-3 text-center leading-normal text-white/95">
                 Confiar tu sonrisa no debería sentirse incierto.
En YouDent unimos diagnóstico preciso, criterio clínico y trato humano desde la primera valoración
                </p>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  className="mt-3 inline-flex w-fit items-center gap-3 rounded-full px-5 py-3 text-sm font-black text-[#102A5E] shadow-xl shadow-[#102A5E]/10 transition hover:scale-[1.02]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md">
                    <svg viewBox="0 0 24 24" className="h-5 w-5">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
                      />
                    </svg>
                  </span>
                  <span>Google Rating</span>
                  <span className="text-[#F4A300]">4.9</span>
                  <span className="tracking-[0.08em] text-[#F4A300]">★★★★★</span>
                </a>

                <div className="mt-4 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#102A5E] px-6 py-3.5 text-center text-[0.82rem] font-black text-white shadow-xl transition-all hover:scale-105 hover:bg-[#29C1D5] hover:text-white hover:shadow-[0_24px_70px_rgba(41,193,213,0.28)]"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                      <WhatsAppIcon className="h-5 w-5" />
                    </span>
                    Agenda tu cita
                  </a>

                  <a
                    href="#tratamientos"
                    className="rounded-full border border-white/30 bg-white/55 px-7 py-4 text-center text-base font-black text-[#102A5E] shadow-xl backdrop-blur-xl transition hover:scale-105 hover:text-[#6FA8B8]"
                  >
                    Ver servicios
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-30 mx-auto -mt-6 px-0 md:-mt-10 md:px-6">
            <div className="grid gap-3 rounded-[1.8rem] border border-white/70 bg-white/85 p-3 shadow-[0_25px_80px_rgba(15,23,42,0.10)] backdrop-blur-2xl md:grid-cols-3 md:gap-5 md:rounded-[2.2rem] md:p-4">
              {visitInfo.map((item) => (
                <article
                  key={item.title}
                  className="group flex flex-col gap-4 rounded-[1.5rem] border border-white/70 bg-gradient-to-br from-white via-[#F8FBFC] to-[#EEF7FA] px-5 py-5 shadow-[0_15px_45px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)] md:gap-5 md:rounded-[1.8rem] md:px-8 md:py-6"
                >
                  <div className="mb-1 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#D8EAF0] bg-white text-[#6EAFC0] shadow-sm">
                      {item.icon}
                    </span>
                    <h3 className="text-lg font-black tracking-tight text-[#102A5E]">
                      {item.title}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {item.lines.map((line) => (
                      <p
                        key={line}
                        className="text-sm leading-relaxed text-slate-600"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

<section
        id="diagnostico"
        ref={introRef}
        className="relative overflow-hidden bg-transparent px-4 pb-14 pt-16 md:-mt-10 md:px-6 md:pb-20 md:pt-24"
      >
        <div className="absolute -top-20 inset-x-0 bottom-0 bg-[radial-gradient(circle_at_50%_10%,rgba(41,193,213,0.08),transparent_42%),radial-gradient(circle_at_80%_30%,rgba(107,53,168,0.08),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl text-center">
          <p
            className={`text-sm font-black uppercase tracking-[0.42em] text-[#6FA8B8] transition-all duration-[1300ms] ease-out ${
              showIntro
                ? "translate-x-0 opacity-100 blur-0"
                : "-translate-x-14 opacity-0 blur-sm"
            }`}
          >
            Atención inicial y planes
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-[clamp(2rem,10vw,4.8rem)] font-black leading-[1.03] tracking-[-0.05em] text-[#102A5E]">
            <span
              className={`block transition-all delay-200 duration-[1500ms] ease-out ${
                showIntro
                  ? "translate-x-0 opacity-100 blur-0"
                  : "-translate-x-16 opacity-0 blur-sm"
              }`}
            >
              Primero entendemos tu caso,
            </span>
            <span
              className={`block transition-all delay-500 duration-[1500ms] ease-out ${
                showIntro
                  ? "translate-x-0 opacity-100 blur-0"
                  : "-translate-x-16 opacity-0 blur-sm"
              }`}
            >
              después diseñamos tu
            </span>
            <span
              className={`block transition-all delay-800 duration-[1500ms] ease-out ${
                showIntro
                  ? "translate-x-0 opacity-100 blur-0"
                  : "-translate-x-16 opacity-0 blur-sm"
              }`}
            >
              tratamiento
            </span>
          </h2>

          <p
            className={`mx-auto mt-7 max-w-4xl text-[1.05rem] font-light leading-[1.8] text-slate-500 transition-all delay-[1150ms] duration-[1500ms] ease-out ${
              showIntro
                ? "translate-x-0 opacity-100 blur-0"
                : "-translate-x-16 opacity-0 blur-sm"
            }`}
          >
            En YouDent creemos que la claridad también forma parte del
            tratamiento: explicamos tu diagnóstico, tus opciones y el plan antes
            de iniciar.
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {processSteps.map((item, index) => (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-[2.2rem] border border-white/50 bg-white/55 p-8 text-left shadow-[0_18px_50px_rgba(15,23,42,0.10)] backdrop-blur-[18px] ring-1 ring-white/40 transition-all duration-700 ease-out hover:-translate-y-2 hover:border-white/70 hover:shadow-[0_30px_80px_rgba(15,23,42,0.18)] ${
                  showIntro
                    ? "translate-y-0 opacity-100 blur-0"
                    : "translate-y-12 opacity-0 blur-sm"
                }`}
                style={{
                  transitionDelay: `${1350 + index * 220}ms`,
                }}
              >
                <div
                  className={`absolute inset-x-0 bottom-0 h-0 ${item.fill} transition-all duration-700 ease-out group-hover:h-full`}
                />

                <div className="relative z-10">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#DCEAF0] bg-white/90 text-[#102A5E] shadow-sm transition-all duration-700 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white">
                    <item.Icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>

                  <h3 className="text-[1.45rem] font-black leading-tight tracking-[-0.03em] text-[#102A5E] transition-colors duration-700 group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[0.98rem] leading-[1.8] text-slate-500 transition-colors duration-700 group-hover:text-white/80">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="tratamientos" className="relative overflow-hidden bg-transparent px-6 py-[4.5rem] md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(41,193,213,0.14),transparent_34%),radial-gradient(circle_at_88%_12%,rgba(107,53,168,0.10),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div
  ref={servicesHeaderRef}
  className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"
>
            <div>
              <p className={`text-sm font-black uppercase tracking-[0.42em] text-[#6FA8B8] transition-all duration-[1100ms] ease-out ${
  showServices ? "translate-y-0 opacity-100 blur-0" : "translate-y-6 opacity-0 blur-sm"
}`}>
  Servicios
</p>

    <h2 className={`mt-5 max-w-3xl text-[clamp(2.7rem,4.8vw,4.6rem)] font-black leading-[1.02] tracking-[-0.05em] text-[#102A5E] transition-all delay-200 duration-[1300ms] ease-out ${
  showServices ? "translate-y-0 opacity-100 blur-0" : "translate-y-8 opacity-0 blur-sm"
}`}>
  Una visión completa para cada etapa de tu tratamiento
</h2>
            </div>

            <div className="lg:pb-2">
              <p className={`max-w-2xl text-[1.05rem] font-light leading-[1.8] text-slate-500 transition-all delay-500 duration-[1300ms] ease-out ${
  showServices ? "translate-y-0 opacity-100 blur-0" : "translate-y-8 opacity-0 blur-sm"
}`}>
  En YouDent reunimos distintas especialidades para atender cada caso con una visión completa: desde prevención y estética, hasta tratamientos de encía, raíz, mordida, cirugía o rehabilitación.
</p>

              <p className={`mt-5 text-sm font-black uppercase tracking-[0.28em] text-[#29C1D5] transition-all delay-700 duration-[1200ms] ease-out ${
  showServices ? "translate-y-0 opacity-100 blur-0" : "translate-y-6 opacity-0 blur-sm"
}`}>
  Desliza para ver todos los servicios →
</p>
            </div>
          </div>

          <div
  ref={servicesRef}
  className="service-carousel -mx-6 mt-14 flex gap-6 overflow-x-auto px-6 pb-10"
>
            {services.map((service) => (
              <article
                key={service.title}
                className="group relative h-[390px] min-w-[82vw] snap-center overflow-hidden rounded-[2rem] bg-[#102A5E] shadow-[0_24px_80px_rgba(15,23,42,0.18)] ring-1 ring-white/50 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_36px_110px_rgba(15,23,42,0.24)] md:h-[440px] md:min-w-[430px] md:rounded-[2.4rem]"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 78vw, 430px"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071A42]/95 via-[#102A5E]/52 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#102A5E]/25 via-transparent to-[#29C1D5]/10 opacity-80" />

                <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-white/80 backdrop-blur-xl">
                  {service.eyebrow}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                  <div className="mb-5 h-[3px] w-14 rounded-full bg-[#29C1D5] transition-all duration-700 group-hover:w-24" />

                  <h3 className="max-w-[320px] text-4xl font-black leading-[0.98] tracking-[-0.045em]">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-[330px] text-[0.98rem] leading-[1.7] text-white/78">
                    {service.text}
                  </p>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    className="mt-7 inline-flex items-center gap-3 rounded-full bg-white/12 px-5 py-3 text-sm font-black text-white ring-1 ring-white/20 backdrop-blur-xl transition-all duration-500 hover:bg-[#29C1D5] hover:ring-[#29C1D5]"
                  >
                    Solicitar valoración
                    <span className="transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="nosotros" ref={clinicalRef} className="relative overflow-hidden bg-transparent px-4 py-14 md:px-6 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(41,193,213,0.08),transparent_34%),radial-gradient(circle_at_92%_18%,rgba(107,53,168,0.07),transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className={`order-2 space-y-6 transition-all duration-[1400ms] ease-out lg:order-1 lg:space-y-8 ${showClinical ? "translate-y-0 opacity-100 blur-0" : "translate-y-10 opacity-0 blur-sm"}`}>
            <div className="relative min-h-[520px] md:hidden">
  <div className="absolute left-0 top-8 h-[390px] w-[70%] overflow-hidden rounded-[2rem] shadow-[0_28px_80px_rgba(15,23,42,0.14)] ring-1 ring-white/70">
    <Image
      src="/images/verito.jpg"
      alt="Atención clínica YouDent"
      fill
      sizes="70vw"
      className="object-cover object-[50%_42%]"
    />
  </div>

  <div className="absolute right-0 top-0 h-[215px] w-[52%] overflow-hidden rounded-[1.8rem] shadow-[0_22px_60px_rgba(15,23,42,0.14)] ring-[8px] ring-white">
    <Image
      src="/images/perlita.JPG"
      alt="Diagnóstico y planeación dental"
      fill
      sizes="52vw"
      className="object-cover object-[45%_38%]"
    />
  </div>

  <div className="absolute bottom-0 right-2 h-[210px] w-[58%] overflow-hidden rounded-[1.8rem] shadow-[0_22px_60px_rgba(15,23,42,0.14)] ring-[8px] ring-white">
    <Image
      src="/images/marquito.JPG"
      alt="Atención especializada YouDent"
      fill
      sizes="58vw"
      className="object-cover object-[45%_45%]"
    />
  </div>

  <div className="absolute left-[42%] top-[43%] rounded-full border border-[#29C1D5]/20 bg-white/90 px-4 py-2 text-[0.62rem] font-black uppercase tracking-[0.22em] text-[#102A5E] shadow-[0_16px_45px_rgba(15,23,42,0.10)] backdrop-blur-xl">
    CRITERIO CLÍNICO
  </div>
</div>

<div className="relative hidden min-h-[650px] md:block">
              <div className="absolute left-0 top-8 h-[520px] w-[68%] overflow-hidden rounded-[2.6rem] shadow-[0_32px_90px_rgba(15,23,42,0.16)] ring-1 ring-white/70">
                <Image
                  src="/images/verito.jpg"
                  alt="Atención clínica YouDent"
                  fill
                  sizes="(max-width: 1024px) 70vw, 520px"
                  className="object-cover object-[50%_42%]"
                />
              </div>

              <div className="absolute right-0 top-0 h-[280px] w-[45%] overflow-hidden rounded-[2.2rem] shadow-[0_24px_70px_rgba(15,23,42,0.14)] ring-[10px] ring-white">
                <Image
                  src="/images/perlita.JPG"
                  alt="Diagnóstico y planeación dental"
                  fill
                  sizes="(max-width: 1024px) 45vw, 330px"
                  className="object-cover object-[45%_38%]"
                />
              </div>

              <div className="absolute bottom-0 right-8 h-[260px] w-[54%] overflow-hidden rounded-[2.2rem] shadow-[0_24px_70px_rgba(15,23,42,0.14)] ring-[10px] ring-white">
                <Image
                  src="/images/marquito.JPG"
                  alt="Atención especializada YouDent"
                  fill
                  sizes="(max-width: 1024px) 55vw, 410px"
                  className="object-cover object-[45%_45%]"
                />
              </div>

              <div className="absolute left-[58%] top-[44%] rounded-full border border-[#29C1D5]/20 bg-white/85 px-5 py-3 text-xs font-black uppercase tracking-[0.28em] text-[#102A5E] shadow-[0_16px_45px_rgba(15,23,42,0.10)] backdrop-blur-xl">
                CRITERIO CLÍNICO
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.8rem] border border-white/60 bg-white/55 p-3 shadow-[0_35px_120px_rgba(15,23,42,0.13)] backdrop-blur-2xl">
              <div className="absolute -left-10 top-8 h-40 w-40 rounded-full bg-[#29C1D5]/20 blur-3xl" />
              <div className="absolute -right-8 bottom-8 h-44 w-44 rounded-full bg-[#6B35A8]/14 blur-3xl" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.30),transparent_35%,transparent_70%,rgba(255,255,255,0.14))]" />

              <div className="relative h-[560px] overflow-hidden rounded-[2rem] bg-[#071633] md:h-[620px] md:rounded-[2.2rem]">
  
 <div className="relative mx-auto flex h-full items-start justify-center px-6 pt-8 pb-4">

  {/* GLOW IZQUIERDO */}
  <div className="absolute left-0 top-20 h-40 w-40 rounded-full bg-[#29C1D5]/20 blur-3xl" />

  {/* GLOW DERECHO */}
  <div className="absolute right-0 bottom-20 h-40 w-40 rounded-full bg-[#6B35A8]/15 blur-3xl" />

  {/* VIDEO VERTICAL */}
  <div className="relative overflow-hidden rounded-[2.5rem] border-[10px] border-white/90 bg-[#071633] shadow-[0_40px_120px_rgba(15,23,42,0.30)]">

    <video
  autoPlay
  muted
  loop
  playsInline
  webkit-playsinline="true"
  preload="metadata"
  controls={false}
  className="h-[500px] w-auto object-contain md:h-[560px]"
>
  <source src="/videos/familia.mp4" type="video/mp4" />
</video>

    {/* OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#071A42]/80 via-transparent to-transparent" />

    {/* ETIQUETA */}
    <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.32em] text-white backdrop-blur-xl">
      Atención familiar
    </div>

    {/* TEXTO */}
    <div className="absolute bottom-8 left-6 right-6">
      <p className="text-xs font-black uppercase tracking-[0.28em] text-[#29C1D5]">
        Clínica real
      </p>

      <h3 className="mt-2 text-3xl font-black leading-tight tracking-[-0.04em] text-white">
        Una experiencia tranquila para niños y adultos.
      </h3>
    </div>

  </div>
</div>


              </div>
            </div>
          </div>

          <div className={`order-1 transition-all delay-200 duration-[1400ms] ease-out lg:order-2 ${showClinical ? "translate-y-0 opacity-100 blur-0" : "translate-y-10 opacity-0 blur-sm"}`}>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#6FA8B8]">
              Atención clínica real
            </p>

            <h2 className="mt-5 max-w-2xl text-[clamp(2.05rem,10vw,5rem)] font-black leading-[1.03] tracking-[-0.055em] text-[#102A5E]">
              Diagnóstico integral,
              planificación clara
              y atención cercana
            </h2>

            <p className="mt-7 max-w-xl text-[1.08rem] font-light leading-[1.85] text-slate-600">
              Antes de iniciar, revisamos tu caso con una mirada completa: salud, función, estética y etapa del tratamiento. Así podemos explicarte qué necesita atención primero y cuál es la mejor ruta para ti.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Valoración clínica", "Plan personalizado", "Seguimiento"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#DCEAF0] bg-white/75 px-4 py-4 text-sm font-black text-[#102A5E] shadow-[0_14px_35px_rgba(15,23,42,0.06)] backdrop-blur-xl"
                  >
                    {item}
                  </div>
                )
              )}
            </div>

            <div className="mt-10 overflow-hidden rounded-[2.3rem] bg-[#102A5E] p-3 shadow-[0_28px_90px_rgba(15,23,42,0.18)]">
              <div className="relative h-[260px] overflow-hidden rounded-[1.5rem] md:h-[360px] md:rounded-[1.8rem]">
                <Image
                  src="/images/cambio1.jpg"
                  alt="Antes de restauración dental"
                  fill
                  sizes="(max-width: 1024px) 90vw, 560px"
                  className="object-cover"
                />

                <div className="compare-after absolute inset-0">
                  <Image
                    src="/images/cambio2.jpg"
                    alt="Después de restauración dental"
                    fill
                    sizes="(max-width: 1024px) 90vw, 560px"
                    className="object-cover"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#071A42]/55 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/12 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-white/85 backdrop-blur-xl">
                  RESTAURACIÓN DIRECTA
                </div>

                <div className="compare-handle absolute top-0 h-full w-px bg-white/90 shadow-[0_0_28px_rgba(255,255,255,0.65)]">
                  <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/18 text-xs font-black text-white backdrop-blur-xl">
                    ↔
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-[#29C1D5]">
                    Restauración conservadora
                  </p>
                  <h3 className="mt-2 max-w-md text-2xl font-black leading-tight tracking-[-0.04em] text-white md:text-3xl">
                    Función, anatomía y estética natural.
                  </h3>
                </div>
              </div>
            </div>

            <div className="mt-7">
              <div className="mb-4 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-[#29C1D5]">
                    Secuencia clínica
                  </p>
                  <p className="mt-1 text-sm font-light leading-relaxed text-slate-500">
                    Del diagnóstico al resultado final, sin perder naturalidad.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {clinicalSequence.map((item) => (
                  <article
                    key={item.title}
                    className="group overflow-hidden rounded-2xl border border-[#DCEAF0] bg-white/80 p-2 shadow-[0_14px_36px_rgba(15,23,42,0.07)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.12)]"
                  >
                    <div className="relative h-24 overflow-hidden rounded-xl bg-[#102A5E] sm:h-28">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 1024px) 22vw, 130px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071A42]/50 via-transparent to-transparent" />
                      <span className="absolute left-2 top-2 rounded-full bg-white/85 px-2 py-1 text-[0.62rem] font-black tracking-[0.16em] text-[#102A5E] backdrop-blur-xl">
                        {item.step}
                      </span>
                    </div>
                    <p className="mt-3 text-center text-[0.72rem] font-black uppercase tracking-[0.16em] text-[#102A5E]">
                      {item.title}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              className="mt-9 inline-flex rounded-full bg-[#102A5E] px-8 py-4 font-black text-white shadow-xl transition-all hover:scale-105 hover:bg-[#29C1D5] hover:text-white hover:shadow-[0_24px_70px_rgba(41,193,213,0.28)]"
            >
              Agendar valoración
            </a>
          </div>
        </div>
      </section>


      <section id="escaneo-3d" ref={scannerRef} className="relative overflow-hidden bg-transparent px-4 py-14 md:px-6 md:py-[4.5rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_22%,rgba(41,193,213,0.07),transparent_28%),radial-gradient(circle_at_88%_12%,rgba(107,53,168,0.055),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className={`grid items-center gap-10 rounded-[2.8rem] border border-[#E4F1F5] bg-white/70 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.055)] backdrop-blur-2xl transition-all duration-[1400ms] ease-out md:p-8 lg:grid-cols-[0.82fr_1.18fr] ${showScanner ? "translate-y-0 opacity-100 blur-0" : "translate-y-10 opacity-0 blur-sm"}`}>
            <div className={`lg:pr-4 transition-all delay-150 duration-[1200ms] ease-out ${showScanner ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}>
              <p className="text-xs font-black uppercase tracking-[0.38em] text-[#6FA8B8]">
                Tecnología cómoda
              </p>

              <h2 className="mt-4 max-w-xl text-[clamp(2rem,3.2vw,3.55rem)] font-black leading-[1.02] tracking-[-0.05em] text-[#102A5E]">
                Escaneo intraoral 3D
              </h2>

              <p className="mt-5 max-w-xl text-[1.02rem] font-light leading-[1.85] text-slate-600">
                Registro digital cómodo para analizar tu boca sin pastas incómodas,
                visualizar detalles y planear con mayor precisión.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {scannerBenefits.map((item) => (
                  <div
                    key={item}
                    className="group rounded-[1.35rem] border border-white/75 bg-white/60 px-5 py-4 text-sm font-black text-[#102A5E] shadow-[0_18px_48px_rgba(15,23,42,0.06)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-[#29C1D5]/35 hover:bg-white/85 hover:shadow-[0_24px_60px_rgba(41,193,213,0.14)]"
                  >
                    <span className="mr-2 text-[#29C1D5]">✦</span>
                    {item}
                  </div>
                ))}
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                className="mt-8 inline-flex rounded-full bg-[#102A5E] px-7 py-4 text-sm font-black text-white shadow-[0_22px_60px_rgba(16,42,94,0.22)] transition-all hover:scale-105 hover:bg-[#29C1D5] hover:text-white hover:shadow-[0_24px_70px_rgba(41,193,213,0.28)]"
              >
                Agendar valoración
              </a>
            </div>

            <div className={`relative min-h-[300px] overflow-hidden rounded-[2rem] bg-[#102A5E] shadow-[0_35px_110px_rgba(15,23,42,0.18)] transition-all delay-300 duration-[1300ms] ease-out md:min-h-[455px] md:rounded-[2.6rem] ${showScanner ? "translate-x-0 scale-100 opacity-100" : "translate-x-8 scale-[0.98] opacity-0"}`}>
  <Image
    src="/images/scanner3d.jpg"
    alt="Escaneo intraoral 3D"
    fill
    sizes="(max-width: 1024px) 90vw, 760px"
    className="object-cover"
  />

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_55%,rgba(41,193,213,0.22),transparent_34%)] animate-[scanGlow_4s_ease-in-out_infinite]" />

  <div className="absolute inset-y-0 left-0 w-[2px] bg-[#29C1D5]/80 shadow-[0_0_35px_rgba(41,193,213,0.9)] animate-[scanLine_5s_ease-in-out_infinite]" />

  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(41,193,213,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(41,193,213,0.18)_1px,transparent_1px)] bg-[size:42px_42px] animate-[gridMove_12s_linear_infinite]" />

</div>
          </div>
        </div>
      </section>

      <section id="resenas" className="relative overflow-hidden bg-transparent px-4 py-14 md:px-6 md:py-[4.5rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_30%,rgba(41,193,213,0.10),transparent_30%),radial-gradient(circle_at_84%_50%,rgba(107,53,168,0.06),transparent_34%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.38em] text-[#6FA8B8]">
                Lo que opinan nuestros pacientes.
              </p>
              <p className="mt-3 max-w-2xl text-[0.98rem] font-light leading-[1.75] text-slate-500">
  
</p>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              className="w-fit rounded-full border border-[#DCEAF0] bg-white/80 px-6 py-3 text-sm font-black text-[#102A5E] shadow-[0_14px_38px_rgba(15,23,42,0.06)] backdrop-blur-xl transition hover:scale-105 hover:text-[#29C1D5]"
            >
              Ver reseñas en Google
            </a>
          </div>

          <div className="overflow-hidden">
            <div className="flex w-max gap-5 animate-[reviewsTrack_46s_linear_infinite] hover:[animation-play-state:paused]">
              {[...googleReviews, ...googleReviews].map((review, index) => (
<article
  key={`${review.name}-${index}`}
  className="group relative flex min-h-[255px] w-[82vw] max-w-[400px] flex-col justify-between overflow-hidden rounded-[1.8rem] border border-white/80 bg-white/72 p-6 shadow-[0_26px_80px_rgba(16,42,94,0.10)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/90 hover:shadow-[0_36px_100px_rgba(16,42,94,0.16)] md:min-h-[265px] md:w-[400px] md:rounded-[2.2rem] md:p-7"
>
  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#29C1D5]/12 blur-3xl" />
  <div className="absolute -bottom-12 left-10 h-36 w-36 rounded-full bg-[#6B35A8]/10 blur-3xl" />
  <div className="absolute right-7 top-16 text-[6rem] font-black leading-none text-[#102A5E]/5">
    “
  </div>

  <div className="relative z-10">
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-center gap-3">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-black shadow-lg ${
            index % 2 === 0
              ? "bg-[#102A5E] text-white"
              : "bg-[#29C1D5]/18 text-[#102A5E]"
          }`}
        >
          {review.name.charAt(0)}
        </div>

        <div>
          <h3 className="text-[0.95rem] font-black leading-tight text-[#102A5E]">
            {review.name}
          </h3>
          <p className="mt-1 text-xs font-bold text-slate-400">
            Reseña de Google
          </p>
        </div>
      </div>

      <span className="rounded-full bg-[#FFF7E6] px-3 py-1 text-xs tracking-[0.08em] text-[#F4A300] shadow-sm">
        ★★★★★
      </span>
    </div>

    <p className="mt-7 text-[1.05rem] font-medium leading-[1.75] tracking-[-0.01em] text-[#41516B]">
      “{review.text}”
    </p>
  </div>

  <div className="relative z-10 mt-6 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#29C1D5] to-[#6B35A8]/60 transition-all duration-500 group-hover:w-28" />
</article>
              ))}
            </div>
          </div>
        </div>
      </section>

<section
  id="ubicacion"
  ref={locationRef}
  className="relative overflow-hidden bg-transparent px-4 py-14 md:px-6 md:py-[4.5rem]"
>
  {/* glow fondo */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(41,193,213,0.08),transparent_30%),radial-gradient(circle_at_88%_22%,rgba(107,53,168,0.05),transparent_32%)]" />

  <div className={`relative mx-auto max-w-7xl transition-all duration-[1400ms] ease-out ${showLocation ? "translate-y-0 opacity-100 blur-0" : "translate-y-10 opacity-0 blur-sm"}`}>
    
    {/* encabezado superior */}
    <div className={`mb-10 flex flex-col gap-5 transition-all delay-150 duration-[1200ms] ease-out lg:flex-row lg:items-end lg:justify-between ${showLocation ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
      
      <div>
        <p className="text-xs font-black uppercase tracking-[0.38em] text-[#6FA8B8]">
          Ubicación
        </p>

        <h2 className="mt-4 max-w-3xl text-[clamp(2.3rem,4vw,4.5rem)] font-black leading-[1.02] tracking-[-0.05em] text-[#102A5E]">
          Estamos en Del Valle Sur
        </h2>

        <p className="mt-5 max-w-2xl text-[1rem] font-light leading-[1.85] text-slate-500">
          Félix Cuevas 301 · Piso 1 · Consultorio 107 · Benito Juárez · CDMX
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href={googleMapsUrl}
          target="_blank"
          className="inline-flex items-center rounded-full border border-[#DCEAF0] bg-white px-6 py-3 text-sm font-black text-[#102A5E] shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition hover:scale-105 hover:text-[#29C1D5]"
        >
          Abrir en Google Maps
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          className="inline-flex items-center rounded-full bg-[#102A5E] px-6 py-3 text-sm font-black text-white shadow-[0_20px_50px_rgba(16,42,94,0.20)] transition-all hover:scale-105 hover:bg-[#29C1D5] hover:text-white hover:shadow-[0_24px_70px_rgba(41,193,213,0.28)]"
        >
          Agendar por WhatsApp
        </a>
      </div>
    </div>

    {/* mapa principal */}
    <div className={`relative overflow-hidden rounded-[2.8rem] border border-white/60 bg-white shadow-[0_40px_120px_rgba(15,23,42,0.10)] transition-all delay-300 duration-[1300ms] ease-out ${showLocation ? "translate-y-0 scale-100 opacity-100" : "translate-y-8 scale-[0.985] opacity-0"}`}>
      
      {/* mapa */}
      <iframe
        src="https://www.google.com/maps?q=YouDent%20CDMX%20Felix%20Cuevas%20301%20Consultorio%20107%20Del%20Valle%20Sur%20Benito%20Juarez%20CDMX&output=embed"
        height="560"
        loading="lazy"
        className="h-[560px] w-full border-0"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* overlay suave */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071A42]/12 via-transparent to-white/10" />

      {/* card flotante */}
      <div className="absolute left-6 top-6 max-w-[380px] rounded-[2rem] border border-white/30 bg-white/75 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.14)] backdrop-blur-2xl md:left-10 md:top-10">
        
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#102A5E] text-white">
            <MapPinned className="h-5 w-5" strokeWidth={1.9} />
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#29C1D5]">
              YouDent CDMX
            </p>

            <h3 className="mt-1 text-xl font-black leading-tight text-[#102A5E]">
              Clínica dental en Benito Juárez
            </h3>
          </div>
        </div>

        <div className="space-y-3 text-[0.96rem] leading-[1.75] text-slate-600">
          <p>
            Félix Cuevas 301, Piso 1, Consultorio 107.
          </p>

          <p>
            Col. Del Valle Sur, Benito Juárez, 03104 Ciudad de México.
          </p>

          <p>
            Zona céntrica, fácil acceso y atención con previa cita.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={googleMapsUrl}
            target="_blank"
            className="rounded-full border border-[#DCEAF0] bg-white px-5 py-3 text-sm font-black text-[#102A5E] transition hover:text-[#29C1D5]"
          >
            Cómo llegar
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            className="rounded-full bg-[#102A5E] px-5 py-3 text-sm font-black text-white transition-all hover:scale-105 hover:bg-[#29C1D5] hover:text-white hover:shadow-[0_24px_70px_rgba(41,193,213,0.28)]"
          >
            Agendar cita
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      <footer className="relative overflow-hidden px-6 py-16 text-white">
  {/* Fondo aurora */}
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_0%,rgba(123,234,241,0.58),transparent_29%),radial-gradient(circle_at_78%_16%,rgba(181,116,255,0.52),transparent_35%),radial-gradient(circle_at_94%_96%,rgba(41,193,213,0.46),transparent_38%),linear-gradient(135deg,#BFEFF0_0%,#B8B7E7_42%,#806FC8_72%,#2B73B6_100%)]" />

  {/* Velo para que el texto blanco conserve contraste */}
  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,66,0.34)_0%,rgba(8,25,61,0.42)_52%,rgba(6,22,58,0.68)_100%)]" />

  {/* Curva neón derecha, discreta */}
  <svg
    className="pointer-events-none absolute -right-10 -top-16 h-[650px] w-[330px] opacity-90 md:right-0 md:top-0 md:h-[760px] md:w-[390px]"
    viewBox="0 0 390 760"
    fill="none"
    aria-hidden="true"
  >
    <defs>
      <linearGradient
        id="footerAuroraCurve"
        x1="120"
        y1="0"
        x2="330"
        y2="760"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFF5D8" />
        <stop offset="0.28" stopColor="#B574FF" />
        <stop offset="0.72" stopColor="#40E1EA" />
        <stop offset="1" stopColor="#29C1D5" />
      </linearGradient>

      <filter
        id="footerAuroraGlow"
        x="-40%"
        y="-20%"
        width="180%"
        height="140%"
      >
        <feGaussianBlur stdDeviation="12" />
      </filter>
    </defs>

    <path
      d="M395 -30C288 58 252 148 281 246C307 333 377 390 349 487C323 577 252 632 277 716C284 740 298 761 316 782"
      stroke="#A987FF"
      strokeWidth="28"
      strokeOpacity="0.28"
      filter="url(#footerAuroraGlow)"
    />

    <path
      d="M395 -30C288 58 252 148 281 246C307 333 377 390 349 487C323 577 252 632 277 716C284 740 298 761 316 782"
      stroke="url(#footerAuroraCurve)"
      strokeWidth="3.2"
      strokeLinecap="round"
    />

    <path
      d="M370 38C312 105 295 183 315 252C334 317 363 356 353 421"
      stroke="white"
      strokeOpacity="0.22"
      strokeWidth="1.2"
    />

    <path
      d="M351 531C302 590 289 652 304 711C311 738 324 762 341 782"
      stroke="white"
      strokeOpacity="0.16"
      strokeWidth="1.2"
    />
  </svg>

  <div className="relative z-10 mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
    <div>
      <Image
        src="/logo_youdent_transparente.png"
        alt="YouDent"
        width={150}
        height={80}
        className="mb-6 h-auto w-[130px]"
      />

      <p className="max-w-sm text-sm leading-relaxed text-white/82">
        Clínica dental en CDMX con atención profesional, diagnóstico claro
        y enfoque estético para cuidar tu sonrisa.
      </p>
    </div>

    <div>
      <h3 className="mb-5 text-lg font-black text-[#FFF5D8]">
        Contacto
      </h3>

      <div className="space-y-3 text-sm text-white/85">
        <p className="flex items-center gap-3">
          <Phone className="h-4 w-4 text-[#7BEAF1]" />
          56 2593 7193
        </p>

        <p className="flex items-center gap-3">
          <Mail className="h-4 w-4 text-[#7BEAF1]" />
          infopacientes@youdent.com.mx
        </p>
      </div>
    </div>

    <div>
      <h3 className="mb-5 text-lg font-black text-[#FFF5D8]">
        Redes sociales
      </h3>

      <div className="flex gap-4">
        <a
          href="https://www.instagram.com/youdentcdmx"
          target="_blank"
          aria-label="Instagram YouDent CDMX"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-[0_0_24px_rgba(41,193,213,0.12)] transition hover:-translate-y-1 hover:border-[#29C1D5] hover:bg-[#29C1D5]"
        >
          <InstagramIcon className="h-5 w-5" />
        </a>

        <a
          href="https://www.facebook.com/youdentcdmx"
          target="_blank"
          aria-label="Facebook YouDent CDMX"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-[0_0_24px_rgba(181,116,255,0.12)] transition hover:-translate-y-1 hover:border-[#B574FF] hover:bg-[#6B2D8B]"
        >
          <FacebookIcon className="h-5 w-5" />
        </a>
      </div>

      <p className="mt-5 text-sm text-white/78">@youdentcdmx</p>
    </div>
  </div>

  <div className="relative z-10 mx-auto mt-12 max-w-7xl border-t border-white/20 pt-6 text-center text-xs text-white/65">
    © 2026 YouDent CDMX. Todos los derechos reservados.
  </div>
</footer>

      <a
        href={whatsappUrl}
        target="_blank"
        aria-label="Agendar por WhatsApp"
        className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-2xl transition hover:scale-110 md:bottom-6 md:right-6 md:h-16 md:w-16"
      >
        <WhatsAppIcon />
      </a>
    </main>
  );
}