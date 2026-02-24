import { Headphones, Search, FileCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Headphones,
    title: "Asesoria Inicial",
    subtitle: "15 minutos",
    description:
      "Conversamos sobre tu marca, tu negocio y tus objetivos. Evaluamos viabilidad sin compromiso.",
  },
  {
    number: "02",
    icon: Search,
    title: "Busqueda y Estrategia",
    subtitle: "Analisis profundo",
    description:
      "Revisamos bases de datos federales, detectamos riesgos y disenamos la mejor ruta de registro.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Radicacion y Seguimiento",
    subtitle: "Acompanamiento total",
    description:
      "Presentamos tu solicitud ante la USPTO y te mantenemos informado en cada etapa del proceso.",
  },
];

export function ProcessSection() {
  return (
    <section id="proceso" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
            Proceso
          </span>
          <h2 className="mt-4 font-[var(--font-poppins)] text-3xl font-bold text-foreground sm:text-4xl">
            {"¿Como funciona?"}
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Tres pasos claros para proteger tu marca sin complicaciones.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative rounded-2xl border border-border/50 bg-card p-8 shadow-sm transition-all hover:border-accent/40 hover:shadow-md"
            >
              {/* Step number */}
              <span className="absolute -top-4 right-6 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                {step.number}
              </span>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <step.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-5 font-[var(--font-poppins)] text-xl font-bold text-card-foreground">
                {step.title}
              </h3>
              <p className="mt-1 text-sm font-semibold text-accent" style={{ color: "var(--teal)" }}>
                {step.subtitle}
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
