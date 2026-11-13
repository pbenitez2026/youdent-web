"use client";

import Image from "next/image";
import { ClinicalWalkthrough } from "./clinical-walkthrough";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export function ClinicalCase() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState(50);
  return <div className="clinical-disclosure">
    <button className="clinical-toggle" type="button" aria-expanded={open} aria-controls="clinical-content" onClick={()=>setOpen(!open)}>
      <span><span className="eyebrow">Una mirada a nuestro trabajo</span><strong>Restauraciones reales, <em>de cerca.</em></strong><span className="clinical-warning">Contenido opcional · Incluye fotografías intraorales</span></span>{open?<Minus aria-hidden="true"/>:<Plus aria-hidden="true"/>}
    </button>
    <div className="clinical-content" id="clinical-content" hidden={!open}>{open && <>
      <div className="case-copy"><h3>De una incrustación fracturada a una restauración con resina.</h3><p>Imágenes de un caso real de YouDent. Puedes comparar el estado inicial y la restauración terminada.</p><p className="small-note">Cada caso requiere valoración. Estas fotografías muestran un tratamiento individual y no predicen el resultado de otras personas.</p></div>
      <div>
        <div className="case-comparison">
          <Image src="/media/caso-inicial.webp" alt="Estado inicial de una pieza posterior con una incrustación fracturada y aislamiento azul" fill sizes="(max-width: 800px) 90vw, 600px" className="cover"/>
          <div className="case-after" style={{clipPath:`inset(0 ${100-position}% 0 0)`}}><Image src="/media/caso-restauracion.webp" alt="La misma pieza posterior después de la restauración, conservando el aislamiento azul" fill sizes="(max-width: 800px) 90vw, 600px" className="cover"/></div>
          <span className="compare-line" style={{left:`${position}%`}} aria-hidden="true"/>

        </div>
        <div className="compare-metadata"><span>Inicial</span><span>Restauración</span></div><label className="compare-control">Comparar las dos fotografías<input type="range" min="0" max="100" value={position} onChange={e=>setPosition(Number(e.target.value))} aria-valuetext={`${position}% de la fotografía de restauración visible`}/></label>
      </div>
    </>}{open && <ClinicalWalkthrough/>}</div>
  </div>;
}
