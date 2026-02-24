import Image from "next/image";
import { CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";

const bullets = [
  "Evaluacion inicial sin costo",
  "Proceso simple y transparente",
  "Soporte directo por WhatsApp",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Decorative arc element */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full border-[60px] border-accent/10" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full border-[40px] border-primary/5" />

      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 py-16 lg:flex-row lg:gap-16 lg:py-24">
        {/* Text content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-xs font-semibold tracking-wide text-accent" style={{ color: "var(--teal)" }}>
              Registro de Marcas en Estados Unidos
            </span>
          </div>

          <h1 className="font-[var(--font-poppins)] text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-[56px]">
            Tu Marca Merece{" "}
            <span className="text-primary">Proteccion Legal</span> en USA
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Te guiamos paso a paso para registrar tu marca sin complicaciones,
            con asesoria clara en espanol y respaldo juridico real.
          </p>

          <ul className="mt-8 flex flex-col gap-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-base font-medium text-foreground">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:brightness-110"
            >
              Agendar asesoria
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://wa.me/15550127842"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary/20 bg-primary/5 px-7 py-3.5 text-base font-semibold text-primary transition-all hover:border-primary/40 hover:bg-primary/10"
            >
              <MessageCircle className="h-5 w-5" />
              Hablar por WhatsApp
            </a>
          </div>

          <p className="mt-5 text-xs text-muted-foreground">
            Confidencialidad garantizada. Respuesta en horario habil.
          </p>
        </div>

        {/* Image + Arc */}
        <div className="relative flex flex-1 items-center justify-center">
          {/* Arc decorative */}
          <div className="absolute -right-6 -top-6 h-full w-full rounded-3xl border-4 border-dashed border-accent/20" />
          <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-primary/10">
            <Image
              src="/images/hero-trademark.jpg"
              alt="Equipo legal de MarcaFirme USA en oficina moderna"
              width={580}
              height={420}
              className="object-cover"
              priority
            />
            {/* Overlay card */}
            <div className="absolute bottom-4 left-4 rounded-xl bg-background/90 px-5 py-3 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">+500 marcas</p>
                  <p className="text-xs text-muted-foreground">registradas con exito</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
