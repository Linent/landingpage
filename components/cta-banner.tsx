"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export const CtaBanner = () => {
  const reveal = useReveal();

  return (
    <section className="relative overflow-hidden bg-[url('/assets/hero-bg.png')] bg-cover bg-center bg-no-repeat py-16 lg:py-20">
      
      {/* Overlay azul con blur */}
      <div className="absolute inset-0 bg-[#0658F6]/55 backdrop-blur-md" />

      {/* Decorative arcs animados */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-75 w-75 rounded-full border-40 border-primary-foreground/5 float-slow" />
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-50 w-50 rounded-full border-30 border-accent/20 float-slow" />

      <div
        ref={reveal.ref}
        className={`relative mx-auto max-w-4xl px-6 text-center reveal-cta ${
          reveal.isVisible ? "visible" : ""
        }`}
      >
        <h2 className="font-[var(--font-poppins)] text-3xl font-bold text-primary-foreground sm:text-4xl">
          ¿Listo para proteger tu marca?
        </h2>

        <p className="mt-4 text-lg text-primary-foreground/80">
          Agenda tu asesoria gratuita hoy y da el primer paso hacia la
          proteccion legal de tu negocio en Estados Unidos.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          
          {/* Primary CTA */}
          <a
            href="#contacto"
            className="group relative inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
          >
            Agendar asesoria gratis
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Secondary CTA */}
          <a
            href="https://wa.me/15550127842"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg border-2 border-primary-foreground/30 px-7 py-3.5 text-base font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary-foreground/60 hover:bg-primary-foreground/10"
          >
            <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            WhatsApp
          </a>

        </div>
      </div>
    </section>
  );
};