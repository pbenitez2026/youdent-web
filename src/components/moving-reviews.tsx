"use client";

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { reviews } from "@/lib/content";

const subscribe = (notify: () => void) => { const q = window.matchMedia("(prefers-reduced-motion: reduce)"); q.addEventListener("change", notify); return () => q.removeEventListener("change", notify); };

export function MovingReviews() {
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [manualHold, setManualHold] = useState(false);
  const resume = useRef<number | null>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const group = useRef<HTMLDivElement>(null);
  const reduced = useSyncExternalStore(subscribe, () => window.matchMedia("(prefers-reduced-motion: reduce)").matches, () => false);
  useEffect(() => {
    if (paused || interacting || manualHold || reduced) return;
    let frame = 0, last = 0, visible = true;
    const element = viewport.current;
    const original = group.current;
    if (!element || !original) return;
    let position = element.scrollLeft;
    let speed = Number.parseFloat(getComputedStyle(element).getPropertyValue("--review-speed")) || 22;
    const updateSpeed = () => { speed = Number.parseFloat(getComputedStyle(element).getPropertyValue("--review-speed")) || 22; };
    window.addEventListener("resize", updateSpeed, { passive: true });
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; last = 0; });
    observer.observe(element);
    const animate = (time: number) => {
      if (visible && !document.hidden) {
        const delta = last ? Math.min(time - last, 48) : 0;
        position += delta * speed / 1000;
        if (position >= original.offsetWidth) position -= original.offsetWidth;
        element.scrollLeft = position;
      }
      last = time; frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener("resize", updateSpeed); };
  }, [paused, interacting, manualHold, reduced]);
  useEffect(() => () => { if (resume.current !== null) window.clearTimeout(resume.current); }, []);
  function readingPause() { setManualHold(true); if (resume.current !== null) window.clearTimeout(resume.current); resume.current = window.setTimeout(() => setManualHold(false), 4500); }
  function move(direction: number) { readingPause(); const element = viewport.current; if (!element) return; if (direction < 0 && element.scrollLeft < 1 && group.current) element.scrollLeft = group.current.offsetWidth; element.scrollBy({ left: direction * Math.min(window.innerWidth * .8, 550), behavior: reduced ? "instant" : "smooth" }); }
  return <div className="moving-reviews" data-review-motion={paused || interacting || manualHold || reduced ? "paused" : "running"}>
    <div className="reviews-window" ref={viewport} tabIndex={0} aria-label="Experiencias de pacientes. Desplazamiento horizontal" onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)} onFocusCapture={() => setInteracting(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setInteracting(false); }} onTouchStart={() => setInteracting(true)} onTouchEnd={() => { readingPause(); setInteracting(false); }} onKeyDown={event => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); move(event.key === "ArrowRight" ? 1 : -1); } }}>
      <div className="reviews-belt">
        {[0,1].map(copy => <div className="reviews-group" ref={copy === 0 ? group : undefined} key={copy} aria-hidden={copy === 1 ? true : undefined} inert={copy === 1 ? true : undefined} data-nosnippet={copy === 1 ? "" : undefined}>
          {reviews.map(review => <figure className="moving-review" key={`${copy}-${review.name}`}><blockquote>{review.quote}</blockquote><figcaption><strong>{review.name}</strong><span>Reseña publicada en Google</span></figcaption></figure>)}
        </div>)}
      </div>
    </div>
    <div className="reviews-controls wrap"><p>Experiencias reales, compartidas en sus propias palabras</p><div><button type="button" aria-label="Reseñas anteriores" onClick={() => move(-1)}><ChevronLeft size={19}/></button><button type="button" disabled={reduced} aria-label={reduced ? "Movimiento automático desactivado" : paused ? "Reanudar reseñas" : "Pausar reseñas"} aria-pressed={paused || reduced} onClick={() => setPaused(!paused)}>{paused || reduced ? <Play size={15}/> : <Pause size={15}/>}</button><button type="button" aria-label="Reseñas siguientes" onClick={() => move(1)}><ChevronRight size={19}/></button></div></div>
    <noscript><style>{`.reviews-controls button{display:none}`}</style></noscript>
  </div>;
}
