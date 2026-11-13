"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ContactLink } from "./contact";

const links = [["Tratamientos", "tratamientos"], ["Tecnología", "escaneo-3d"], ["Equipo", "equipo"], ["Ubicación", "ubicacion"]];
export function Navigation() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); toggle.current?.focus(); } };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return <header className="site-header">
    <nav className="site-nav wrap" aria-label="Navegación principal">
      <a href="#inicio" className="brand-link" aria-label="YouDent, inicio"><Image src="/brand/youdent-oficial.svg" alt="YouDent · En tu sonrisa" width={530} height={123} className="brand-logo" unoptimized /></a>
      <div className="desktop-nav">{links.map(([name, id]) => <a key={id} href={`#${id}`}>{name}</a>)}</div>
      <ContactLink placement="navigation" className="button button-small button-primary">Agendar</ContactLink>
      <button className="menu-toggle" type="button" ref={toggle} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </nav>
    <div className="mobile-nav" id="mobile-navigation" hidden={!open}>{links.map(([name,id],i) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}><span>0{i+1}</span>{name}</a>)}</div>
    <noscript><nav className="nojs-nav" aria-label="Secciones">{links.map(([name,id])=><a key={id} href={`#${id}`}>{name}</a>)}</nav></noscript>
  </header>;
}
