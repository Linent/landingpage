import { ArrowRight, MessageCircle } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 lg:py-20">
      {/* Decorative arcs */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full border-[40px] border-primary-foreground/5" />
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-[200px] w-[200px] rounded-full border-[30px] border-accent/20" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-[var(--font-poppins)] text-3xl font-bold text-primary-foreground sm:text-4xl">
          {"¿Listo para proteger tu marca?"}
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/80">
          Agenda tu asesoria gratuita hoy y da el primer paso hacia la
          proteccion legal de tu negocio en Estados Unidos.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:brightness-110"
          >
            Agendar asesoria gratis
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://wa.me/15550127842"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-foreground/30 px-7 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:border-primary-foreground/60 hover:bg-primary-foreground/10"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
