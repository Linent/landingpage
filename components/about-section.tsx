"use client";

import { Users, Award, Globe, Clock } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { useCounter } from "@/hooks/useCounter";

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Marcas registradas" },
  { icon: Award, value: 98, suffix: "%", label: "Tasa de aprobacion" },
  { icon: Globe, value: 15, suffix: "+", label: "Paises de origen" },
  { icon: Clock, value: 24, suffix: "h", label: "Tiempo de respuesta" },
];

export const AboutSection = () => {
  const textReveal = useReveal();
  const statsReveal = useReveal();

  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* TEXT SIDE */}
          <div
            ref={textReveal.ref}
            className={`reveal ${
              textReveal.isVisible ? "visible" : ""
            }`}
          >
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
              Sobre nosotros
            </span>

            <h2 className="mt-4 font-[var(--font-poppins)] text-3xl font-bold text-foreground sm:text-4xl">
              Un equipo legal que habla claro
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              En MarcaFirme USA simplificamos el registro de marcas para
              emprendedores y empresas. Sin tecnicismos innecesarios, con
              comunicacion directa y procesos ordenados que respetan tu tiempo.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Nuestro equipo combina experiencia legal con un enfoque humano:
              sabemos que detras de cada marca hay un sueno, un esfuerzo y una
              historia que merece proteccion.
            </p>

            <a
              href="#contacto"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:-translate-y-1"
            >
              Conoce mas sobre nosotros
            </a>
          </div>

          {/* STATS SIDE */}
          <div
            ref={statsReveal.ref}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat, i) => {
              const count = useCounter(
                stat.value,
                1500,
                0,
                statsReveal.isVisible
              );

              return (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center rounded-2xl border border-border/50 bg-card p-6 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg reveal-stat ${
                    statsReveal.isVisible ? "visible" : ""
                  }`}
                  style={{
                    transitionDelay: `${i * 150}ms`,
                  }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 transition-all duration-300 hover:scale-110">
                    <stat.icon className="h-6 w-6 text-accent" />
                  </div>

                  <p className="mt-4 font-[var(--font-poppins)] text-3xl font-extrabold text-foreground">
                    {count}
                    {stat.suffix}
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};