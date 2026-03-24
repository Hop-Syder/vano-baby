/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Page Contact — Booking & Contact
 * @created 2026-03-24
 */

import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact & Booking — Vano Baby",
  description: "Contactez le management de Vano Baby pour des bookings, collaborations ou partenariats.",
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      <ContactSection isPageTitle={true} />
    </main>
  );
}
