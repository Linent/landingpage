"use client";

import Image from "next/image";
import { MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const bullets = [
  "Evaluación inicial sin costo",
  "Proceso simple y transparente",
  "Soporte directo por WhatsApp",
];

const size = 580;

export const Hero = () => {
  const textReveal = useReveal();
  const imageReveal = useReveal();

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Decorative arcs */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-150 w-150 rounded-full border-60 border-accent/10" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-100 w-100 rounded-full border-40 border-primary/5" />

      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 py-16 lg:flex-row lg:gap-16 lg:py-24">

        {/* TEXT CONTENT */}
        <div
          ref={textReveal.ref}
          className={`flex flex-1 flex-col items-center text-center lg:items-start lg:text-left reveal ${textReveal.isVisible ? "visible" : ""
            }`}
        >
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5">
            <img src="/assets/icon-512.png" alt="icon" width={20} height={20} className="h-5 w-5 text-accent" />
            <span className="text-xs font-semibold tracking-wide text-accent">
              Registro de Marcas en Estados Unidos
            </span>
          </div>

          {/* Title */}
          <h1 className="font-[var(--font-poppins)] text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-[56px]">
            Tu Marca Merece{" "}
            <span className="text-primary">Protección Legal</span> en USA
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Te guiamos paso a paso para registrar tu marca sin complicaciones, con asesoría clara en español y respaldo jurídico real.
          </p>

          {/* Bullets */}
          <ul className="mt-8 flex flex-col gap-3">
            {bullets.map((b) => (<li key={b} className="flex items-center gap-3"> 
              <Image src="/assets/icon-check.svg" alt="Check" width={20} height={20} className="h-5 w-5 text-accent" />
              <span className="text-base font-medium text-foreground">{b}</span>
            </li>))} </ul>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#contacto" className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:brightness-110" >
              Agendar asesoría
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="https://wa.me/15550127842" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary/20 bg-primary/5 px-7 py-3.5 text-base font-semibold text-primary transition-all hover:border-primary/40 hover:bg-primary/10" >
              <MessageCircle className="h-5 w-5" /> Hablar por WhatsApp </a> </div> <p className="mt-5 text-xs text-muted-foreground">
            Confidencialidad garantizada. Respuesta en horario habil.
          </p>
        </div>

        {/* IMAGE SECTION */}
        <div
          ref={imageReveal.ref}
          className={`relative flex flex-1 items-center justify-center reveal-scale ${imageReveal.isVisible ? "visible" : ""
            }`}
        >
          <div className="absolute -right-6 -top-6 h-full w-full rounded-3xl border-4 border-dashed border-accent/20" />

          <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-primary/10">
            <Image
              src="/images/equipo-asesores-legales.webp"
              alt="Equipo legal de MarcaFirme USA"
              width={size}
              height={size}
              className="object-cover"
              priority
            />

            {/* Gradient blur inferior */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/35 to-transparent" />

            {/* Overlay Card */}
            <div className="absolute bottom-4 left-4 rounded-xl bg-background/90 px-5 py-3 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
                  <Image
                    src="/assets/icon-check.svg"
                    alt="Check"
                    width={20}
                    height={20}
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">
                    +500 marcas
                  </p>
                  <p className="text-xs text-muted-foreground">
                    registradas con éxito
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};