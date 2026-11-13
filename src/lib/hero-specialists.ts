import type { ContactIntent } from "./clinic";

export type HeroSpecialist = {
  id: string;
  firstName: string;
  name: string;
  role: string;
  image: number;
  lead: string;
  emphasis: string;
  text: string;
  intent: ContactIntent;
  tone: string;
  ink: string;
  muted: string;
  accent: string;
  button: string;
  buttonText: string;
  gold: string;
};

// Editorial messages about each specialty; these are not quotations or testimonials.
export const heroSpecialists: HeroSpecialist[] = [
  {
    id: "perla", firstName: "Perla", name: "Dra. Perla Benítez",
    role: "Odontología restauradora", image: 6,
    lead: "Recuperar forma", emphasis: "y función",
    text: "Revisamos la pieza y tu mordida para valorar cómo restaurarla y qué necesita para volver a funcionar.",
    intent: "restauraciones", tone: "#eeeae4", ink: "#29313d", muted: "#50565d", accent: "#624476", button: "#293c42", buttonText: "#ffffff", gold: "#936b28",
  },
  {
    id: "sandra", firstName: "Sandra", name: "Dra. Sandra Camacho",
    role: "Periodoncia e implantes", image: 2,
    lead: "Cuidar lo que sostiene", emphasis: "tus dientes",
    text: "La salud de las encías y los tejidos de soporte también cuenta al planear cómo conservar o reponer una pieza.",
    intent: "periodoncia", tone: "#31263a", ink: "#f4f0ea", muted: "#ddd4df", accent: "#dbc6ae", button: "#f0e8dd", buttonText: "#31263a", gold: "#e7bc62",
  },
  {
    id: "christel", firstName: "Christel", name: "Dra. Christel Ramírez",
    role: "Ortodoncia estética", image: 3,
    lead: "Alinear y entender", emphasis: "tu mordida",
    text: "Nos fijamos en la posición de tus dientes y en cómo se relacionan al cerrar la boca.",
    intent: "ortodoncia", tone: "#eae5ef", ink: "#2c3140", muted: "#55525f", accent: "#67537c", button: "#4f3c60", buttonText: "#ffffff", gold: "#936b28",
  },
  {
    id: "marco", firstName: "Marco", name: "Dr. Marco Maturano",
    role: "Cirugía maxilofacial", image: 4,
    lead: "Saber cuándo intervenir", emphasis: "y por qué",
    text: "Una valoración especializada para conocer la indicación, las alternativas y los cuidados de un procedimiento.",
    intent: "cirugia", tone: "#e1e9e8", ink: "#263a3d", muted: "#4b595b", accent: "#4c6e69", button: "#2d514f", buttonText: "#ffffff", gold: "#936b28",
  },
  {
    id: "veronica", firstName: "Verónica", name: "Dra. Verónica Téllez",
    role: "Odontología familiar", image: 5,
    lead: "Cuidarte en cada etapa", emphasis: "de tu vida",
    text: "Dudas cotidianas, hábitos y necesidades que cambian. La atención empieza por conocer lo que necesitas hoy.",
    intent: "valoracion", tone: "#efe4dc", ink: "#3c3036", muted: "#62565d", accent: "#805a69", button: "#624350", buttonText: "#ffffff", gold: "#936b28",
  },
];
