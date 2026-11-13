"use client";

import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { whatsappUrl, type ContactIntent } from "@/lib/clinic";

type MeasuredWindow = Window & {
  gtag?: (event: string, name: string, data: Record<string, string>) => void;
  fbq?: (action: string, name: string) => void;
};

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16.04 3C9.46 3 4.12 8.28 4.12 14.78c0 2.58.85 4.96 2.28 6.9L5 29l7.5-1.96a12.1 12.1 0 0 0 3.54.52c6.58 0 11.92-5.28 11.92-11.78S22.62 3 16.04 3Zm0 22.55c-1.1 0-2.18-.17-3.2-.52l-.46-.15-4.45 1.16.84-4.33-.29-.44a10.48 10.48 0 0 1-1.84-5.95c0-5.4 4.45-9.8 9.9-9.8s9.9 4.4 9.9 9.8-4.45 9.8-9.9 9.8Zm5.42-7.35c-.3-.15-1.77-.86-2.04-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.01-1.04 2.47s1.07 2.87 1.22 3.07c.15.2 2.1 3.18 5.08 4.45.71.3 1.26.48 1.69.62.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"/></svg>;
}

export function ContactLink({ intent = "valoracion", placement, children, className = "button button-primary", icon = true, label }: {
  intent?: ContactIntent; placement: string; children?: ReactNode; className?: string; icon?: boolean; label?: string;
}) {
  function measure() {
    const w = window as MeasuredWindow;
    // No treatment names, symptoms or message contents are sent to measurement providers.
    w.gtag?.("event", "contact", { event_category: "engagement", event_label: `whatsapp_${placement}` });
    w.fbq?.("track", "Contact");
  }
  return <a href={whatsappUrl(intent)} className={className} target="_blank" rel="noopener noreferrer" onClick={measure} aria-label={label} data-contact={placement}>
    {children ?? "Agendar una valoración"}{icon && <ArrowUpRight size={19} strokeWidth={1.7} aria-hidden="true"/>}
  </a>;
}

export function FloatingWhatsApp() {
  return <ContactLink placement="floating" className="whatsapp-float" icon={false} label="Agendar una valoración por WhatsApp"><WhatsAppIcon/><span className="float-tooltip" aria-hidden="true">Hablemos por WhatsApp</span></ContactLink>;
}
