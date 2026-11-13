"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const stages = [
  { title: "Registro inicial", caption: "Registro inicial de la pieza", image: 3 },
  { title: "Preparación", caption: "La pieza durante la preparación", image: 4 },
  { title: "Adhesión", caption: "Una etapa del protocolo adhesivo", image: 5 },
  { title: "Resultado", caption: "La restauración terminada", image: 6 },
];

export function ClinicalWalkthrough() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const stage = stages[active];
  return <div className="clinical-walkthrough">
    <div><p className="eyebrow">Un segundo caso</p><h3>Otra restauración, paso a paso</h3><p>Un recorrido fotográfico del registro inicial al resultado. Estas imágenes corresponden a otro tratamiento de YouDent.</p></div>
    <div><div className="case-stage-tabs" role="tablist" aria-label="Etapas de un segundo caso de restauración">{stages.map((item, index) => <button key={item.image} type="button" role="tab" id={`case-stage-${index}`} aria-controls={`case-stage-panel-${index}`} aria-selected={active === index} tabIndex={active === index ? 0 : -1} ref={e => { tabs.current[index] = e; }} onClick={() => setActive(index)} onKeyDown={event => { let next = index; if (event.key === "ArrowRight") next = (index + 1) % 4; else if (event.key === "ArrowLeft") next = (index + 3) % 4; else if (event.key === "Home") next = 0; else if (event.key === "End") next = 3; else return; event.preventDefault(); setActive(next); tabs.current[next]?.focus(); }}><span>0{index + 1}</span>{item.title}</button>)}</div>
      <figure className="case-stage-figure" role="tabpanel" id={`case-stage-panel-${active}`} aria-labelledby={`case-stage-${active}`}><div><Image src={`/media/caso-etapa-${stage.image}.webp`} alt={stage.caption} fill sizes="(max-width: 800px) 90vw, 650px" className="cover"/></div><figcaption>{stage.caption}</figcaption></figure>
      {stages.map((item, index) => active === index ? null : <div hidden key={item.image} role="tabpanel" id={`case-stage-panel-${index}`} aria-labelledby={`case-stage-${index}`}/>)}
    </div>
  </div>;
}
