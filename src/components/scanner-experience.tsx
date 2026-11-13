"use client";

import Image from "next/image";
import { Play, RotateCcw } from "lucide-react";
import { useRef, useState } from "react";
import { scannerSteps } from "@/lib/content";
import { ContactLink } from "./contact";

const verbs = ["Registrar la superficie", "Observar el modelo", "Conversar sobre el plan"];

export function ScannerExperience() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const step = scannerSteps[active];
  function change(index: number, focus = false) { setPlaying(false); setError(false); setActive(index); if (focus) tabs.current[index]?.focus(); }
  return <div className="scanner-experience" data-scan-scene={step.id}>
    <div className="scanner-copy scanner-heading"><p className="eyebrow light">El escáner intraoral</p><h2 data-reveal>Tu boca desde <span className="scanner-emphasis">otra perspectiva</span></h2><p className="scanner-intro">Un recorrido real que se convierte en un registro digital y en una conversación sobre tu salud bucal.</p></div>
    <div className="scanner-theatre">
      <div className="scanner-ambient" aria-hidden="true" key={`ambient-${step.id}`}><Image src={step.poster} alt="" fill sizes="(max-width: 800px) 100vw, 1320px" className="cover"/></div>
      <div className="scanner-detail" role="tabpanel" id={`scan-panel-${step.id}`} aria-labelledby={`scan-${step.id}`} key={step.id}><p className="scanner-scene-label">{verbs[active]}</p><h3>{step.title.replace(/\.$/, "")}</h3><p>{step.text}</p><ContactLink intent="escaneo" placement="technology" className="text-link on-dark">Consultar por el escaneo</ContactLink></div>
      <figure className="scanner-media" key={`media-${step.id}`}>
        <div className="scanner-stage" data-depth>
          {playing ? <video className="scanner-video" src={step.video} poster={step.poster} width={720} height={900} controls autoPlay muted playsInline preload="none" aria-label={step.alt} aria-describedby={`description-${step.id}`} onError={() => { setPlaying(false); setError(true); }}><track kind="descriptions" src={`/media/escaneo-${step.id}.vtt`} srcLang="es" label="Descripción visual en español"/>Tu navegador no reproduce este video.</video> : <>
            <Image src={step.poster} alt={step.alt} fill sizes="(max-width: 800px) 100vw, 570px" quality={85} className="cover"/>
            <button type="button" className="video-play" onClick={() => setPlaying(true)} aria-label={`${error ? "Reintentar" : "Reproducir"}: ${step.label}. Video sin audio`}><span>{error ? <RotateCcw size={21}/> : <Play size={21} fill="currentColor"/>}</span>{error ? "Reintentar video" : "Ver el proceso real"}</button>
          </>}
        </div>
        <figcaption id={`description-${step.id}`}>{step.description}</figcaption>
      </figure>
    </div>
    <div className="scanner-tabs scanner-timeline" role="tablist" aria-label="Los pasos del escaneo">
      {scannerSteps.map((item,index) => <button type="button" key={item.id} id={`scan-${item.id}`} role="tab" aria-selected={active === index} aria-controls={`scan-panel-${item.id}`} tabIndex={active === index ? 0 : -1} ref={e => { tabs.current[index] = e; }} onClick={() => change(index)} onKeyDown={event => { let next = index; if (event.key === "ArrowRight") next = (index + 1) % 3; else if (event.key === "ArrowLeft") next = (index + 2) % 3; else if (event.key === "Home") next = 0; else if (event.key === "End") next = 2; else return; event.preventDefault(); change(next,true); }}><span className="scan-number">{item.number}</span><span className="scan-step-title">{item.label}</span><span className="scan-step-description">{verbs[index]}</span></button>)}
    </div>
    {scannerSteps.map((item,index) => index === active ? null : <div hidden key={item.id} role="tabpanel" id={`scan-panel-${item.id}`} aria-labelledby={`scan-${item.id}`}/>)}
    <noscript><p className="scanner-nojs">Puedes <a href="/media/escaneo-registro.mp4">abrir el video real del escaneo, sin audio</a>.</p></noscript>
  </div>;
}
