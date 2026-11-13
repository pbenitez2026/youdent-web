"use client";

import Image from "next/image";
import { ArrowUpRight, Plus } from "lucide-react";
import { useRef, useState } from "react";
import { ProcedureExperience } from "./procedure-experience";
import { clinicalProcedures } from "@/lib/clinical-procedures";
import { treatments } from "@/lib/content";
import { whatsappUrl } from "@/lib/clinic";
import { ContactLink } from "./contact";

export function TreatmentExplorer() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const treatment = treatments[active];
  function select(index: number, focus = false) { setActive(index); if (focus) refs.current[index]?.focus(); }
  return <>
    <div className="treatment-explorer">
      <div className="treatment-tabs" role="tablist" aria-label="Explorar tratamientos" aria-orientation="horizontal">
        {treatments.map((t, i) => <button key={t.id} type="button" role="tab" id={`tab-${t.id}`} aria-controls={`panel-${t.id}`} aria-selected={active === i} tabIndex={active === i ? 0 : -1} ref={e => { refs.current[i] = e; }} onClick={() => select(i)} onKeyDown={e => {
          let next = i;
          if (["ArrowDown", "ArrowRight"].includes(e.key)) next = (i + 1) % treatments.length;
          else if (["ArrowUp", "ArrowLeft"].includes(e.key)) next = (i - 1 + treatments.length) % treatments.length;
          else if (e.key === "Home") next = 0;
          else if (e.key === "End") next = treatments.length - 1;
          else return;
          e.preventDefault(); select(next, true);
        }}><span className="treatment-number">0{i+1}</span><span>{t.name}</span><ArrowUpRight aria-hidden="true" size={19}/></button>)}
      </div>
      {treatments.map((t,i)=>i===active?null:<div hidden key={t.id} role="tabpanel" id={`panel-${t.id}`} aria-labelledby={`tab-${t.id}`}/>)}
      <div className="treatment-panel" role="tabpanel" id={`panel-${treatment.id}`} aria-labelledby={`tab-${treatment.id}`} tabIndex={0}>
        <div className="treatment-copy" key={`copy-${treatment.id}`}>
          <p className="eyebrow">{treatment.category}</p>
          <h3>{treatment.title}</h3>
          <p>{treatment.description}</p>
          <div className="expectation"><Plus size={16} aria-hidden="true"/><div><h4>¿Qué puedes esperar?</h4><p>{treatment.expectation}</p></div></div>
          {treatment.specialist && <p className="specialist-line">{treatment.specialist}</p>}
          <ContactLink intent={treatment.id} placement="treatment" className="button button-glass">{treatment.cta}</ContactLink>
        </div>
        {clinicalProcedures[treatment.id] ? <ProcedureExperience key={`guide-${treatment.id}`} id={treatment.id}/> : <figure className="treatment-image">
          <Image key={treatment.image} src={treatment.image} alt={treatment.alt} fill sizes="(max-width: 800px) 90vw, 350px" className="cover"/>
          <figcaption>{treatment.caption}</figcaption>
        </figure>}
      </div>
    </div>
    <noscript><style>{`.treatment-explorer{display:none}`}</style><div className="treatment-fallback">{treatments.map(t=><article key={t.id}><h3>{t.name}</h3><p>{t.description}</p><a href={whatsappUrl(t.id)}>{t.cta}</a></article>)}</div></noscript>
  </>;
}
