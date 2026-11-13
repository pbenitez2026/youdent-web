import { ArrowUpRight } from "lucide-react";
import { clinic } from "@/lib/clinic";

export function LocationMap() {
  return <figure className="location-map-scene">
    <div className="map-scene-heading"><span>Mapa de llegada</span><a href={clinic.maps} target="_blank" rel="noopener noreferrer">Abrir ruta <ArrowUpRight size={16} aria-hidden="true"/></a></div>
    <div className="location-map location-map-live">
      <iframe title="Mapa de YouDent en Félix Cuevas 301, Del Valle Sur, CDMX" src="https://www.google.com/maps?q=YouDent%20CDMX%20Felix%20Cuevas%20301%20Consultorio%20107%20Del%20Valle%20Sur%20Benito%20Juarez%20CDMX&output=embed" loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/>
    </div>
    <figcaption>Félix Cuevas 301 <span>Piso 1 · Consultorio 107</span></figcaption>
  </figure>;
}
