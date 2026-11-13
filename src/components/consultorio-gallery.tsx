"use client";

import Image from "next/image";
import { Play, RotateCcw } from "lucide-react";
import { useRef, useState } from "react";

const scenes = [
  { id: "jornada", label: "El recorrido", title: "Conversar, observar y planear", text: "Momentos de conversación, preparación del equipo y estudio de modelos en YouDent.", alt: "Una conversación en consulta, preparación del equipo de magnificación y estudio de modelos dentales" },
  { id: "detalle", label: "La observación", title: "Hay detalles que miramos de cerca", text: "El material y el equipo acompañan la revisión. La elección de cada recurso depende de lo que el caso necesita.", alt: "Perla se coloca un sistema de magnificación óptica en el consultorio" },
  { id: "modelos", label: "Los registros", title: "Un modelo para estudiar las relaciones", text: "Los modelos de estudio permiten observar la relación de los dientes y conversar sobre la planeación.", alt: "Manos mostrando modelos dentales en un articulador en YouDent" },
];

export function ConsultorioGallery() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const scene = scenes[active];
  function select(index: number, focus = false) { setActive(index); setPlaying(false); setError(false); if (focus) tabs.current[index]?.focus(); }
  return <div className="consultorio-gallery">
    <div className="gallery-visual" role="tabpanel" id={`gallery-panel-${scene.id}`} aria-labelledby={`gallery-tab-${scene.id}`}>
      <figure className="gallery-scene" key={scene.id}>
        <div className="gallery-image-field" data-depth>
          <Image src={`/media/consultorio-${scene.id}.webp`} alt={scene.alt} fill sizes="(max-width: 800px) 100vw, 800px" className="cover gallery-poster"/>
          {playing ? <video className="gallery-video" src={`/media/consultorio-${scene.id}.mp4`} poster={`/media/consultorio-${scene.id}.webp`} width={720} height={900} controls autoPlay muted playsInline preload="none" aria-label={scene.alt} aria-describedby={`gallery-description-${scene.id}`} onError={() => { setPlaying(false); setError(true); }}><track kind="descriptions" src={`/media/consultorio-${scene.id}.vtt`} srcLang="es" label="Descripción visual"/></video> : <button type="button" className="video-play gallery-play" aria-label={`${error ? "Reintentar" : "Reproducir"}: ${scene.label}. Video real sin audio`} onClick={() => setPlaying(true)}><span>{error ? <RotateCcw size={20}/> : <Play size={20} fill="currentColor"/>}</span>{error ? "Reintentar" : "Ver el recorrido"}</button>}
        </div>
        <figcaption id={`gallery-description-${scene.id}`}>{scene.alt}. Video sin audio.</figcaption>
      </figure>
    </div>
    <div className="gallery-story">
      <p className="eyebrow">Dentro de YouDent</p>
      <h2 data-reveal>El trabajo de cerca</h2>
      <div className="gallery-tabs" role="tablist" aria-label="Momentos en el consultorio">
        {scenes.map((item, index) => <button type="button" role="tab" key={item.id} id={`gallery-tab-${item.id}`} aria-controls={`gallery-panel-${item.id}`} aria-selected={active === index} tabIndex={active === index ? 0 : -1} ref={e => { tabs.current[index] = e; }} onClick={() => select(index)} onKeyDown={event => { let next = index; if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % scenes.length; else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index + 2) % scenes.length; else if (event.key === "Home") next = 0; else if (event.key === "End") next = 2; else return; event.preventDefault(); select(next, true); }}><span>0{index + 1}</span>{item.label}<span className="gallery-dot" aria-hidden="true"/></button>)}
      </div>
      <div className="gallery-detail" key={`detail-${scene.id}`}><h3>{scene.title}</h3><p>{scene.text}</p></div>
    </div>
    {scenes.map((item, index) => index === active ? null : <div hidden key={item.id} role="tabpanel" id={`gallery-panel-${item.id}`} aria-labelledby={`gallery-tab-${item.id}`}/>)}
    <noscript><p className="gallery-nojs">Puedes <a href="/media/consultorio-jornada.mp4">ver el recorrido real del consultorio</a>, sin audio.</p></noscript>
  </div>;
}
