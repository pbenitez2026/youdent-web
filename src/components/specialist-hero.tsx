"use client";

import Image, { getImageProps } from "next/image";
import { ArrowDown, ChevronLeft, ChevronRight, Pause, Play, Star } from "lucide-react";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore, type CSSProperties } from "react";
import { heroSpecialists } from "@/lib/hero-specialists";
import { clinic } from "@/lib/clinic";
import { ContactLink } from "./contact";
import styles from "./specialist-hero.module.css";

const DWELL = 6800;
const COUNT = heroSpecialists.length;
const serverFalse = () => false;
const subscribeMotion = (notify: () => void) => {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", notify);
  return () => query.removeEventListener("change", notify);
};
const getMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const subscribeVisibility = (notify: () => void) => {
  document.addEventListener("visibilitychange", notify);
  return () => document.removeEventListener("visibilitychange", notify);
};
const getVisibility = () => document.hidden;

export function SpecialistHero() {
  const [scene, setScene] = useState({ active: 0, previous: -1, revision: 0 });
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(true);
  const [pending, setPending] = useState<number | null>(null);
  const [announcement, setAnnouncement] = useState("");
  const [readRevision, setReadRevision] = useState(0);
  const root = useRef<HTMLElement>(null);
  const loaded = useRef(new Set<number>());
  const requested = useRef<{ index: number; manual: boolean } | null>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const reduced = useSyncExternalStore(subscribeMotion, getMotion, serverFalse);
  const hidden = useSyncExternalStore(subscribeVisibility, getVisibility, serverFalse);
  const running = !paused && !reduced && !hidden && inView;
  const specialist = heroSpecialists[scene.active];

  const commit = useCallback((index: number, manual: boolean) => {
    requested.current = null;
    setPending(null);
    setScene(previous => ({ active: index, previous: previous.active, revision: previous.revision + 1 }));
    if (manual) setAnnouncement(`${heroSpecialists[index].name}. ${heroSpecialists[index].role}. ${index + 1} de ${COUNT}.`);
  }, []);

  const choose = useCallback((index: number, manual = true) => {
    const target = (index + COUNT) % COUNT;
    requested.current = { index: target, manual };
    if (loaded.current.has(target)) commit(target, manual);
    else setPending(target);
  }, [commit]);

  function photoLoaded(index: number) {
    loaded.current.add(index);
    const request = requested.current;
    if (request?.index === index) commit(index, request.manual);
  }

  useEffect(() => {
    if (!running || pending !== null) return;
    const timer = window.setTimeout(() => choose(scene.active + 1, false), DWELL);
    return () => window.clearTimeout(timer);
  }, [running, pending, scene.active, scene.revision, readRevision, choose]);

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.12 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  function giveReadingTime() { setReadRevision(previous => previous + 1); }

  return <section
    ref={root} id="inicio" className={styles.root}
    aria-label="Especialistas de YouDent" aria-roledescription="carrusel"
    data-specialist={specialist.id} data-autoplay={running ? "running" : "paused"}
    style={{ "--hero-tone": specialist.tone, "--hero-ink": specialist.ink, "--hero-muted": specialist.muted, "--hero-accent": specialist.accent, "--hero-button": specialist.button, "--hero-button-text": specialist.buttonText, "--hero-gold": specialist.gold, "--hero-dwell": `${DWELL}ms` } as CSSProperties}
    onFocusCapture={giveReadingTime} onPointerDown={giveReadingTime}
    onTouchStart={event => { touch.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }; }}
    onTouchEnd={event => {
      if (!touch.current) return;
      const dx = event.changedTouches[0].clientX - touch.current.x;
      const dy = event.changedTouches[0].clientY - touch.current.y;
      touch.current = null;
      if (Math.abs(dx) > 60 && Math.abs(dy) < 70) choose(scene.active + (dx < 0 ? 1 : -1));
    }}
  >
    <div className={styles.atmosphere} aria-hidden="true"/>
    <div className={styles.photographs} aria-hidden="true">
      {heroSpecialists.map((person, index) => {
        const active = index === scene.active;
        const previous = index === scene.previous && !active;
        const shouldLoad = active || previous || index === (scene.active + 1) % COUNT || index === pending;
        const mobile = getImageProps({ src: `/media/especialista-${person.image}.webp`, alt: "", width: 600, height: 750, sizes: "100vw", quality: 85 });
        return <div key={person.id} style={{ "--hero-tone": person.tone } as CSSProperties} className={`${styles.photo} ${active ? styles.photoActive : ""} ${previous ? styles.photoPrevious : ""}`}>
          {shouldLoad && <picture>
            <source media="(max-width: 700px)" srcSet={mobile.props.srcSet} sizes="100vw"/>
            <Image src={`/media/hero-especialista-${person.image}.webp`} alt="" fill
              sizes="100vw" quality={85}
              loading={index === 0 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : "low"}
              className={styles.portrait} onLoad={() => photoLoaded(index)}/>
          </picture>}
          <div className={styles.lightVeil}/>
        </div>;
      })}
    </div>
    <div className={styles.content}>
      <p className={styles.eyebrow}>YouDent en Del Valle Sur</p>
      <div className={styles.copySpace}>
        <div className={styles.copy} key={scene.revision}>
          <h1 id="hero-title">{specialist.lead} <em>{specialist.emphasis}</em></h1>
          <p className={styles.description}>{specialist.text}</p>
        </div>
      </div>
      <div className={styles.actions}>
        <ContactLink intent={specialist.intent} placement="hero" className={`button ${styles.cta}`}>Agenda una valoración</ContactLink>
        <a href="#tratamientos" className={styles.explore}>Explora los tratamientos <ArrowDown size={15} aria-hidden="true"/></a>
      </div>
    </div>
    <div className={styles.person} key={`person-${scene.revision}`}>
      <p>{specialist.name}</p><span>{specialist.role}</span>
    </div>
    <div className={styles.controls}>
      <div className={styles.sequence} role="group" aria-label="Seleccionar especialista"
        onKeyDown={event => {
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault(); choose(scene.active + (event.key === "ArrowRight" ? 1 : -1));
          }
        }}>
        {heroSpecialists.map((person, index) => <button key={person.id} type="button"
          aria-label={`Mostrar a ${person.name}, ${person.role}`} aria-pressed={scene.active === index}
          onClick={() => choose(index)} className={scene.active === index ? styles.selected : ""}>
          <span className={styles.track} aria-hidden="true"><span
            key={`${scene.revision}-${running}-${readRevision}`}
            className={running && scene.active === index ? styles.progress : ""}/></span>
          <span>{person.firstName}</span>
        </button>)}
      </div>
      <div className={styles.playback}>
        <button type="button" onClick={() => choose(scene.active - 1)} aria-label="Especialista anterior"><ChevronLeft size={19}/></button>
        <button type="button" onClick={() => setPaused(previous => !previous)} disabled={reduced}
          aria-label={reduced ? "Reproducción automática desactivada por movimiento reducido" : paused ? "Reanudar secuencia automática" : "Pausar secuencia automática"}
          aria-pressed={paused || reduced} className={styles.pause}>{paused || reduced ? <Play size={16}/> : <Pause size={16}/>}</button>
        <button type="button" onClick={() => choose(scene.active + 1)} aria-label="Especialista siguiente"><ChevronRight size={19}/></button>
      </div>
      <a href={clinic.maps} target="_blank" rel="noopener noreferrer" className={styles.reputation} aria-label="4.9 de 5 en Google. Ver reseñas">
        <strong>4.9</strong><span className={styles.ratingDetail}><span className={styles.stars} aria-hidden="true">{[0,1,2,3,4].map(index => <Star key={index} size={12} fill="currentColor" strokeWidth={0}/>)}</span><span>en Google</span></span>
      </a>
    </div>
    <p className="sr-only" role="status" aria-live="polite">{announcement}</p>
    <noscript><style>{`.${styles.controls}{display:none}`}</style><p className={styles.nojs}>Conoce a nuestros cinco especialistas en <a href="#equipo">el equipo de YouDent</a>.</p></noscript>
  </section>;
}
