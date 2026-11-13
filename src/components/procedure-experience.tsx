"use client";

import Image from "next/image";
import { Pause, Play, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties } from "react";
import { clinicalProcedures } from "@/lib/clinical-procedures";

const subscribe = (notify: () => void) => {
  const q = window.matchMedia("(prefers-reduced-motion: reduce)");
  q.addEventListener("change", notify); return () => q.removeEventListener("change", notify);
};

export function ProcedureExperience({ id }: { id: string }) {
  const procedure = clinicalProcedures[id];
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const reduced = useSyncExternalStore(subscribe, () => window.matchMedia("(prefers-reduced-motion: reduce)").matches, () => false);
  useEffect(() => {
    if (!playing || reduced || !procedure) return;
    const timer = window.setTimeout(() => {
      if (document.hidden) { setPlaying(false); return; }
      if (step === procedure.stages.length - 1) setPlaying(false);
      else setStep(previous => previous + 1);
    }, 4800);
    return () => clearTimeout(timer);
  }, [playing, reduced, step, procedure]);
  if (!procedure) return null;
  const stage = procedure.stages[step];
  function change(index: number, focus = false) { setStep(index); setPlaying(false); if (focus) refs.current[index]?.focus(); }
  return <div className="procedure-experience" data-procedure={id} data-stage={step}>
    <figure className="procedure-figure">
      <div className="procedure-viewport">
        <div className="procedure-art" style={{ "--stage-zoom": stage.zoom, "--focus-x": `${stage.point[0] / 15.36}%`, "--focus-y": `${stage.point[1] / 10.24}%` } as CSSProperties}>
          <Image src={procedure.image} alt={procedure.alt} fill sizes="(max-width: 800px) 100vw, 760px" quality={85} className="procedure-original"/>
          <svg className="procedure-guide" viewBox="0 0 1536 1024" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
            <circle className="procedure-halo" cx={stage.point[0]} cy={stage.point[1]} r={id === "implantes" ? 100 : 58}/>
            <circle className="procedure-point" cx={stage.point[0]} cy={stage.point[1]} r="9"/>
            {id === "ortodoncia" && step === 1 && <path key="arch" className="procedure-trace" d="M140 333C390 348 560 349 755 352S1190 359 1390 335"/>}
            {id === "endodoncia" && step === 1 && <path key="canal" className="procedure-trace" d="M773 392C774 530 795 607 814 735C821 793 826 839 826 867"/>}
          </svg>
        </div>
      </div>
      <figcaption>Ilustración digital de apoyo <a href={procedure.source} target="_blank" rel="noopener noreferrer" aria-label={`Referencia clínica sobre ${id}`}>Referencia clínica <ArrowUpRight size={12} aria-hidden="true"/></a></figcaption>
    </figure>
    <div className="procedure-navigation" role="tablist" aria-label="Explorar la secuencia ilustrativa">
      {procedure.stages.map((item, index) => <button key={item.label} type="button" role="tab" id={`procedure-${id}-${index}`} aria-controls={`procedure-panel-${id}-${index}`} aria-selected={step === index} tabIndex={step === index ? 0 : -1} ref={e => { refs.current[index] = e; }} onClick={() => change(index)} onKeyDown={event => {
        let next = index;
        if (event.key === "ArrowRight") next = (index + 1) % procedure.stages.length;
        else if (event.key === "ArrowLeft") next = (index + procedure.stages.length - 1) % procedure.stages.length;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = procedure.stages.length - 1;
        else return;
        event.preventDefault(); change(next, true);
      }}><span>0{index + 1}</span>{item.label}</button>)}
    </div>
    {procedure.stages.map((item, index) => index !== step ? <div hidden key={item.label} role="tabpanel" id={`procedure-panel-${id}-${index}`} aria-labelledby={`procedure-${id}-${index}`}/> : <div className="procedure-explanation" role="tabpanel" key={item.label} id={`procedure-panel-${id}-${index}`} aria-labelledby={`procedure-${id}-${index}`}><h4>{item.title}</h4><p>{item.text}</p></div>)}
    <div className="procedure-foot"><span>Secuencia orientativa. El plan se define en consulta.</span><button type="button" className="sequence-play" disabled={reduced} aria-pressed={playing} aria-label={reduced ? "Animación desactivada por movimiento reducido" : playing ? "Pausar secuencia ilustrativa" : "Reproducir secuencia ilustrativa"} onClick={() => { if (!playing && step === procedure.stages.length - 1) setStep(0); setPlaying(!playing); }}>{playing ? <Pause size={14}/> : <Play size={14}/>}<span>{playing ? "Pausar" : "Ver secuencia"}</span></button></div>
  </div>;
}
