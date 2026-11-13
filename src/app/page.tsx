import Image from "next/image";
import { ArrowUpRight, Clock3, MapPin, MoveUpRight, Star } from "lucide-react";
import { SpecialistHero } from "@/components/specialist-hero";
import { Navigation } from "@/components/navigation";
import { ContactLink, FloatingWhatsApp, WhatsAppIcon } from "@/components/contact";
import { TreatmentExplorer } from "@/components/treatment-explorer";
import { ScannerExperience } from "@/components/scanner-experience";
import { ConsultorioGallery } from "@/components/consultorio-gallery";
import { MovingReviews } from "@/components/moving-reviews";
import { ClinicalCase } from "@/components/clinical-case";
import { LocationMap } from "@/components/location-map";
import { EditorialMotion } from "@/components/motion";
import { clinic, clinicSchema, type ContactIntent } from "@/lib/clinic";
import { team } from "@/lib/content";

function Stars() { return <span className="stars" aria-hidden="true">{[0,1,2,3,4].map(i => <Star key={i} size={16} fill="currentColor" strokeWidth={0}/>)}</span>; }
const teamIntents: Record<string, ContactIntent> = { "Perla Benítez": "restauraciones", "Sandra Camacho": "periodoncia", "Christel Ramírez": "ortodoncia", "Marco Maturano": "cirugia", "Verónica Téllez": "valoracion" };

export default function Home() {
  return <>
    <a className="skip-link" href="#contenido">Ir al contenido</a>
    <Navigation/>
    <main id="contenido" tabIndex={-1}>
      <SpecialistHero/>
      <div className="site-flow">
        <div className="flow-arrival"><div className="practical-strip wrap"><div className="practical-place"><MapPin size={21} aria-hidden="true"/><p><strong>Del Valle Sur · CDMX</strong><span>Félix Cuevas 301 · Consultorio 107</span></p></div><div className="practical-appointment"><Clock3 size={21} aria-hidden="true"/><p><strong>Atención con previa cita</strong><span>Lunes a sábado</span></p></div><a className="practical-route" href="#ubicacion">Cómo llegar <ArrowUpRight size={21} aria-hidden="true"/></a></div></div>

        <section className="section wrap treatments-section" id="tratamientos" aria-labelledby="treatment-title">
          <div className="section-intro treatment-intro"><div><p className="eyebrow">Tratamientos</p><h2 id="treatment-title" data-reveal>Cada tratamiento tiene un proceso</h2></div><p>Explora cómo se aborda cada área. Las ilustraciones te ayudan a reconocer sus elementos y etapas; la valoración define lo que necesita tu caso.</p></div>
          <TreatmentExplorer/>
        </section>

        <section className="visit-section" id="experiencia" aria-labelledby="visit-title">
          <span id="nosotros" className="legacy-anchor" aria-hidden="true"/>
          <div className="visit-grid wrap">
            <figure className="visit-photo" data-depth><Image src="/media/consulta-real.webp" alt="Perla conversa con una paciente en el consultorio de YouDent" fill sizes="(max-width: 800px) 100vw, 650px" className="cover"/><figcaption>Una conversación real en el consultorio</figcaption></figure>
            <div className="visit-copy"><p className="eyebrow">La primera consulta</p><h2 id="visit-title" className="editorial-heading" data-reveal>Una consulta empieza contigo</h2><p className="section-description">No necesitas llegar sabiendo qué tratamiento pedir. Podemos empezar por lo que te preocupa y por las preguntas que traes.</p>
              <ol className="visit-steps">
                <li><span>01</span><div><h3>Nos cuentas qué te trae</h3><p>Síntomas, objetivos, antecedentes y dudas.</p></div></li>
                <li><span>02</span><div><h3>Revisamos y registramos</h3><p>Exploración clínica y los estudios que se indiquen.</p></div></li>
                <li><span>03</span><div><h3>Conoces tus opciones</h3><p>Qué atender, por qué y cómo podría avanzar tu plan.</p></div></li>
              </ol>
              <ContactLink placement="first_visit" className="button button-glass">Agenda una valoración</ContactLink>
            </div>
          </div>
        </section>

        <section className="scanner-section" id="escaneo-3d" aria-label="Escáner intraoral en YouDent"><div className="wrap"><ScannerExperience/></div></section>

        <section className="section team-section" id="equipo" aria-labelledby="team-title"><div className="wrap">
          <div className="section-intro"><div><p className="eyebrow">El equipo</p><h2 id="team-title" data-reveal>Personas que vas a conocer</h2></div><div><p>Restauración, ortodoncia, periodoncia, cirugía y atención familiar. Distintas áreas que pueden colaborar cuando tu caso lo necesita.</p><ContactLink intent="equipo" placement="team" className="text-link">Consultar con el equipo</ContactLink></div></div>
          <div className="team-grid">{team.map(person => <article className="team-member" key={person.name}><div className="portrait" data-depth><Image src={`/media/especialista-${person.image}.webp`} alt={`${person.prefix} ${person.name}`} fill sizes="(max-width: 600px) 72vw, (max-width: 1000px) 40vw, 270px" className="cover"/></div><p className="doctor-prefix">{person.prefix}</p><h3>{person.name}</h3><p className="doctor-role">{person.role}</p><ContactLink intent={teamIntents[person.name]} placement="team_specialist" className="doctor-contact" label={`Consultar ${person.role} con ${person.prefix} ${person.name}`}>Consultar esta área</ContactLink></article>)}</div>
        </div></section>

        <section className="consultorio-section" id="consultorio" aria-label="Contenido audiovisual real de YouDent"><div className="wrap"><ConsultorioGallery/></div></section>

        <section className="case-section wrap" id="casos" aria-label="Caso clínico opcional"><ClinicalCase/></section>

        <section className="reviews-section" id="resenas" aria-labelledby="reviews-title">
          <div className="wrap reviews-heading"><div><p className="eyebrow">Experiencias compartidas</p><h2 id="reviews-title" data-reveal>Lo que queda después de la visita</h2></div><a href={clinic.maps} className="review-score" target="_blank" rel="noopener noreferrer" aria-label="Calificación 4.9 de 5 en Google, ver reseñas"><span>{clinic.rating}</span><div><Stars/><p>en Google</p></div><ArrowUpRight size={22} aria-hidden="true"/></a></div>
          <MovingReviews/>
          <div className="wrap"><a className="text-link" href={clinic.maps} target="_blank" rel="noopener noreferrer">Leer reseñas completas en Google <ArrowUpRight size={17} aria-hidden="true"/></a></div>
        </section>

        <section className="section location-section" id="ubicacion" aria-labelledby="location-title"><div className="wrap location-grid"><div><p className="eyebrow">Nos vemos en</p><h2 id="location-title" className="editorial-heading" data-reveal>Del Valle Sur</h2><address><strong>{clinic.address}</strong><span>{clinic.neighborhood}</span><span>Código postal {clinic.postalCode}</span></address><div className="opening-hours"><Clock3 size={19} aria-hidden="true"/><div>{clinic.hours.map(h => <p key={h}>{h}</p>)}<small>Atención con previa cita</small></div></div><div className="location-actions"><ContactLink placement="location" className="button button-glass">Agendar una valoración</ContactLink><a className="text-link" href={clinic.maps} target="_blank" rel="noopener noreferrer">Abrir en Google Maps <ArrowUpRight size={17} aria-hidden="true"/></a></div></div><LocationMap/></div></section>

        <section className="closing-section" aria-labelledby="closing-title">
          <div className="closing-portrait" aria-hidden="true"><Image src="/media/equipo-hero.webp" alt="" fill sizes="(max-width: 800px) 100vw, 70vw" className="cover"/></div>
          <div className="wrap closing-grid"><div><p className="eyebrow light">El siguiente paso</p><h2 id="closing-title" data-reveal>Hablemos de <em>lo que necesitas</em></h2><p>Cuéntanos qué te trae. Por WhatsApp podemos orientarte para agendar tu visita.</p><ContactLink placement="closing" className="button button-glass"><WhatsAppIcon className="button-whatsapp"/>Agenda una valoración</ContactLink><small>La indicación de un tratamiento requiere valoración clínica.</small></div></div>
        </section>
      </div>
    </main>
    <footer className="site-footer campaign-footer"><div className="wrap"><div className="footer-top"><a href="#inicio" aria-label="Volver al inicio de YouDent"><Image src="/brand/youdent-oficial.svg" alt="YouDent · En tu sonrisa" width={530} height={123} unoptimized className="footer-logo"/></a><p>Odontología integral<br/>Del Valle Sur, Ciudad de México</p><div className="footer-links"><a href={`mailto:${clinic.email}`}>{clinic.email}<ArrowUpRight size={15} aria-hidden="true"/></a><a href={clinic.instagram} target="_blank" rel="noopener noreferrer">@youdentcdmx <ArrowUpRight size={15} aria-hidden="true"/></a><a href={clinic.facebook} target="_blank" rel="noopener noreferrer">Facebook <ArrowUpRight size={15} aria-hidden="true"/></a></div></div><div className="footer-bottom"><small>© {new Date().getFullYear()} YouDent CDMX</small><span>En tu sonrisa</span><a href="#inicio">Volver arriba <MoveUpRight size={14} aria-hidden="true"/></a></div></div></footer>
    <FloatingWhatsApp/>
    <EditorialMotion/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(clinicSchema).replace(/</g,"\\u003c")}}/>
  </>;
}
