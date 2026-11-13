export type ClinicalStage = { label: string; title: string; text: string; point: [number, number]; zoom: number };
export type ClinicalProcedure = { image: string; alt: string; source: string; stages: ClinicalStage[] };

// The original illustrations remain intact. The interaction guides the view;
// it does not deform anatomy, simulate a patient's treatment or predict results.
export const clinicalProcedures: Record<string, ClinicalProcedure> = {
  ortodoncia: {
    image: "/media/clinica-ortodoncia.webp", alt: "Ilustración de un modelo con brackets y arcos de ortodoncia",
    source: "https://aaoinfo.org/treatments/braces/",
    stages: [
      { label: "Brackets", title: "El punto de unión", text: "Los brackets se fijan a los dientes y permiten transmitir la acción del sistema de ortodoncia.", point: [680,345], zoom: 1.06 },
      { label: "El arco", title: "Un sistema conectado", text: "El arco se conecta con los brackets. Sus características y ajustes forman parte del plan indicado por la especialista.", point: [890,355], zoom: 1.12 },
      { label: "Seguimiento", title: "Los cambios se acompañan", text: "La evolución se revisa durante el tratamiento. La posición dental y la mordida se valoran en conjunto.", point: [760,520], zoom: 1 },
    ],
  },
  endodoncia: {
    image: "/media/endodoncia-ilustracion.webp", alt: "Ilustración seccionada de un diente y sus conductos radiculares",
    source: "https://www.aae.org/patients/root-canal-treatment/what-is-a-root-canal/root-canal-explained/",
    stages: [
      { label: "Valoración", title: "Conocer el interior del diente", text: "La exploración y los estudios ayudan a valorar la pulpa y determinar si está indicado un tratamiento endodóntico.", point: [765,440], zoom: 1 },
      { label: "Conductos", title: "Tratar el espacio interno", text: "Cuando está indicado, se retira el tejido pulpar afectado y se limpian, desinfectan y preparan los conductos.", point: [800,690], zoom: 1.1 },
      { label: "Protección", title: "Sellar y restaurar", text: "Los conductos se rellenan y sellan. Después se define la restauración que necesita la pieza para recuperar su función.", point: [760,355], zoom: 1.04 },
    ],
  },
  implantes: {
    image: "/media/implante-ilustracion.webp", alt: "Ilustración de un implante, su pilar y una corona separados para reconocer sus componentes",
    source: "https://www.fda.gov/medical-devices/dental-devices/dental-implants-what-you-should-know",
    stages: [
      { label: "Implante", title: "La base de la rehabilitación", text: "Se valora si el hueso y los tejidos permiten colocar un implante. La cicatrización y los tiempos dependen de cada caso.", point: [725,795], zoom: 1.08 },
      { label: "Pilar", title: "La conexión con la restauración", text: "El pilar conecta el implante con la restauración. Su selección y colocación forman parte de la planeación protésica.", point: [731,485], zoom: 1.13 },
      { label: "Corona", title: "La parte que recupera la pieza", text: "La corona se diseña para el espacio y la mordida. Son componentes y etapas distintas, no un procedimiento instantáneo.", point: [726,246], zoom: 1.04 },
    ],
  },
  restauraciones: {
    image: "/media/clinica-restauraciones.webp", alt: "Ilustración digital del trabajo de restauración sobre una pieza anterior",
    source: "https://www.mouthhealthy.org/all-topics-a-z/dental-filling-options",
    stages: [
      { label: "Revisar", title: "Entender qué necesita la pieza", text: "Se revisan la pérdida de tejido, las condiciones del diente y las opciones para restaurarlo.", point: [735,460], zoom: 1 },
      { label: "Restaurar", title: "Recuperar forma y continuidad", text: "El material y la técnica se eligen según el caso. La resina es una de las opciones de restauración.", point: [650,490], zoom: 1.12 },
      { label: "Comprobar", title: "Revisar cómo funciona", text: "Se comprueban la adaptación y la mordida. Puedes explorar un caso real, de forma voluntaria, más adelante.", point: [810,530], zoom: 1.04 },
    ],
  },
};
