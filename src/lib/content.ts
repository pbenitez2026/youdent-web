import type { ContactIntent } from "./clinic";

export type Treatment = {
  id: ContactIntent; name: string; category: string; title: string;
  description: string; expectation: string; specialist?: string;
  image: string; alt: string; caption: string; cta: string;
};

export const treatments: Treatment[] = [
  {
    id: "ortodoncia", name: "Ortodoncia", category: "Alineación y mordida",
    title: "La posición importa. La forma de morder, también.",
    description: "Evaluamos la alineación de tus dientes y cómo se relacionan al cerrar la boca. Con esos registros se plantea el tratamiento de ortodoncia indicado para tu caso.",
    expectation: "Una explicación de las opciones, las etapas y el seguimiento que requiere tu tratamiento.",
    specialist: "Dra. Christel Ramírez · Ortodoncia estética",
    image: "/media/clinica-ortodoncia.webp", alt: "Ilustración de un modelo con brackets y arcos de ortodoncia",
    caption: "Ilustración digital de apoyo", cta: "Consultar ortodoncia",
  },
  {
    id: "endodoncia", name: "Endodoncia", category: "Conservación dental",
    title: "Evaluar el diente antes de decidir su futuro.",
    description: "La endodoncia trata el interior de dientes con daño pulpar. Primero se valora la pieza y los estudios necesarios para saber si puede tratarse y restaurarse.",
    expectation: "Conocer los hallazgos, las alternativas y los siguientes pasos. La posibilidad de conservar el diente depende de su condición.",
    image: "/media/endodoncia-ilustracion.webp", alt: "Ilustración anatómica de los conductos de un diente",
    caption: "Ilustración anatómica de apoyo · No es un caso clínico", cta: "Consultar endodoncia",
  },
  {
    id: "implantes", name: "Implantes dentales", category: "Reposición y rehabilitación",
    title: "Reponer un diente requiere mirar el conjunto.",
    description: "Cuando falta una pieza, revisamos los tejidos, el espacio y las opciones de rehabilitación. El implante y su restauración se planean según las condiciones de cada caso.",
    expectation: "Entender la indicación y las etapas del plan. Los tiempos y procedimientos se definen después de la valoración.",
    specialist: "Dra. Sandra Camacho · Periodoncia e implantes",
    image: "/media/implante-ilustracion.webp", alt: "Ilustración de un implante y su restauración entre dientes",
    caption: "Ilustración de apoyo · No representa un resultado clínico", cta: "Preguntar por implantes",
  },
  {
    id: "periodoncia", name: "Periodoncia", category: "Encías y soporte dental",
    title: "También cuidamos lo que sostiene tus dientes.",
    description: "La valoración periodontal se concentra en las encías y los tejidos de soporte. Los hallazgos permiten determinar qué atención y seguimiento necesitas.",
    expectation: "Una revisión de tus encías y una explicación del tratamiento, los cuidados y el seguimiento que correspondan.",
    specialist: "Dra. Sandra Camacho · Periodoncia e implantes",
    image: "/media/clinica-periodoncia.webp", alt: "Ilustración digital sobre las encías y los tejidos de soporte",
    caption: "Ilustración digital de apoyo", cta: "Consultar por mis encías",
  },
  {
    id: "cirugia", name: "Cirugía maxilofacial", category: "Valoración especializada",
    title: "Una decisión quirúrgica empieza con una valoración.",
    description: "El especialista evalúa los problemas de la boca y los maxilares que pueden requerir atención quirúrgica. La indicación se decide con la exploración y los estudios pertinentes.",
    expectation: "Conocer la indicación, las alternativas y los cuidados de un procedimiento antes de tomar una decisión.",
    specialist: "Dr. Marco Maturano · Cirugía maxilofacial",
    image: "/media/clinica-cirugia.webp", alt: "Ilustración clínica de apoyo para cirugía maxilofacial",
    caption: "Ilustración digital de apoyo", cta: "Consultar cirugía maxilofacial",
  },
  {
    id: "restauraciones", name: "Restauraciones estéticas", category: "Forma y función",
    title: "Restaurar una pieza, pensando en cómo funciona.",
    description: "Las restauraciones con resina permiten recuperar tejido perdido y atender necesidades de forma y función. Revisamos el diente y su contexto antes de elegir el tratamiento.",
    expectation: "Una explicación de los materiales, el alcance de la restauración y los cuidados de tu pieza.",
    specialist: "Dra. Perla Benítez · Odontología restauradora",
    image: "/media/clinica-restauraciones.webp", alt: "Ilustración digital del trabajo de restauración de una pieza anterior",
    caption: "Ilustración digital de apoyo", cta: "Valorar una restauración",
  },
];

export const team = [
  { name: "Perla Benítez", prefix: "Dra.", role: "Odontología restauradora", image: 6 },
  { name: "Christel Ramírez", prefix: "Dra.", role: "Ortodoncia estética", image: 3 },
  { name: "Sandra Camacho", prefix: "Dra.", role: "Periodoncia e implantes", image: 2 },
  { name: "Marco Maturano", prefix: "Dr.", role: "Cirugía maxilofacial", image: 4 },
  { name: "Verónica Téllez", prefix: "Dra.", role: "Odontología familiar", image: 5 },
];

export const scannerSteps = [
  {
    id: "registro", label: "El registro", number: "01", title: "De tus dientes, a un registro digital.",
    text: "Cuando está indicado, recorremos la superficie de los dientes con el escáner intraoral. En este video puedes ver a Perla durante el procedimiento real en YouDent.",
    poster: "/media/escaneo-registro.webp", video: "/media/escaneo-registro.mp4",
    alt: "Perla utilizando el escáner intraoral en el consultorio de YouDent",
    description: "Video sin audio: Perla utiliza un escáner intraoral durante la atención de una paciente.",
  },
  {
    id: "modelo", label: "El modelo", number: "02", title: "Un modelo que podemos mirar contigo.",
    text: "La captura aparece en pantalla como un modelo digital de la superficie dental. Es una herramienta para observar y explicar; no sustituye la exploración clínica ni todos los estudios.",
    poster: "/media/escaneo-modelo.webp", video: "/media/escaneo-modelo.mp4",
    alt: "Modelo digital de las arcadas dentales en el equipo de YouDent",
    description: "Video sin audio: se visualiza un modelo dental digital en la pantalla del consultorio. Los identificadores se han ocultado.",
  },
  {
    id: "explicacion", label: "La explicación", number: "03", title: "La tecnología tiene sentido cuando la entiendes.",
    text: "Los registros se integran a la valoración. Te mostramos lo que encontramos y conversamos sobre las opciones y los siguientes pasos, según lo que tu caso necesita.",
    poster: "/media/escaneo-explicacion.webp", video: "/media/escaneo-explicacion.mp4",
    alt: "Perla explicando a una paciente durante una consulta en YouDent",
    description: "Video sin audio: Perla conversa con una paciente sentada en el consultorio.",
  },
];

export const reviews = [
  {
    "name": "Rosalilia Vélez Varela",
    "quote": "Excelente atención. Fui atendida con amabilidad y eficiencia; los precios son adecuados."
  },
  {
    "name": "Albino Moreno",
    "quote": "Súper profesional. Excelente doctora y persona. Horarios flexibles. Súper recomendable."
  },
  {
    "name": "Alejandra Nava",
    "quote": "El servicio es excelente. Me explicaron muy bien todo lo que iban a hacerme; la Dra. Perla es amable y cuidadosa."
  },
  {
    "name": "Alejandrina Allard",
    "quote": "La Dra. Perla es excelente dentista. Me explicó con claridad el tratamiento y el consultorio está impecable."
  },
  {
    "name": "Janeth Avila Tapia",
    "quote": "Excelente atención. La doctora es sumamente profesional y atenta."
  },
  {
    "name": "Isaac García",
    "quote": "Gran servicio e información clara y precisa sobre el tratamiento. Muy buena ubicación de la clínica."
  },
  {
    "name": "Mariana Sada",
    "quote": "Calidad en el servicio, excelente atención y trato, higiene y un consultorio agradable."
  },
  {
    "name": "Ana Valentina López De Cea",
    "quote": "Perla Benítez es una excelente dentista. Explica y responde dudas, lo cual da tranquilidad; su trabajo es muy prolijo."
  }
];
