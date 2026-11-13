"use client";

import { useEffect } from "react";
import { heroSpecialists } from "@/lib/hero-specialists";

export function EditorialMotion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations: Animation[] = [];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting || preference.matches) return;
        const depth = entry.target.hasAttribute("data-depth");
        animations.push(entry.target.animate(depth ? [{ transform: "translateY(15px) scale(1.018)", opacity: .75 }, { transform: "translateY(0) scale(1)", opacity: 1 }] : [{ opacity: .6, transform: "translateY(15px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: depth ? 1100 : 750, easing: "cubic-bezier(.2,.8,.2,1)" }));
        observer.unobserve(entry.target);
      });
    }, { threshold: .15 });
    document.querySelectorAll(".site-flow [data-reveal], .site-flow [data-depth]").forEach(element => observer.observe(element));
    const reduce = () => { if (preference.matches) animations.forEach(animation => animation.cancel()); };
    preference.addEventListener("change", reduce);
    const hero = document.getElementById("inicio");
    const flow = document.querySelector<HTMLElement>(".site-flow");
    const syncColor = () => {
      const specialist = heroSpecialists.find(person => person.id === hero?.dataset.specialist);
      if (specialist && flow) flow.style.setProperty("--opening-tone", specialist.tone);
    };
    syncColor();
    const continuity = new MutationObserver(syncColor);
    if (hero) continuity.observe(hero, { attributes: true, attributeFilter: ["data-specialist"] });
    return () => { observer.disconnect(); continuity.disconnect(); preference.removeEventListener("change", reduce); animations.forEach(animation => animation.cancel()); };
  }, []);
  return null;
}
