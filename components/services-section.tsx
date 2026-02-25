import { ShieldCheck, RefreshCw, Eye, Scale, ArrowRight } from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Registro de Marca",
    description:
      "Te acompanamos desde la revision inicial hasta la radicacion oficial ante la USPTO. Sin letra pequena ni sorpresas.",
    highlight: true,
  },
  {
    icon: RefreshCw,
    title: "Renovacion",
    description:
      "Evita perder tu marca por fechas vencidas o requisitos pendientes. Nos encargamos del calendario y los tramites.",
    highlight: false,
  },
  {
    icon: Eye,
    title: "Vigilancia de Marca",
    description:
      "Monitoreo continuo para detectar marcas similares y proteger tu identidad antes de que sea tarde.",
    highlight: false,
  },
  {
    icon: Scale,
    title: "Oposicion",
    description:
      "Responde o inicia una oposicion con respaldo legal solido. Defendemos tu marca con estrategia y experiencia.",
    highlight: false,
  },
];

export const ServicesSection = () => {
  return (
    <section id="servicios" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent" style={{ color: "var(--teal)" }}>
            Servicios
          </span>
          <h2 className="mt-4 font-[var(--font-poppins)] text-3xl font-bold text-foreground sm:text-4xl">
            Todo lo que necesitas para proteger tu marca
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
            Soluciones legales integrales disenadas para emprendedores y
            empresas que quieren operar con confianza en Estados Unidos.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative flex flex-col rounded-2xl border p-7 transition-all hover:shadow-lg ${
                service.highlight
                  ? "border-accent/40 bg-primary/2 shadow-md"
                  : "border-border/50 bg-card shadow-sm"
              }`}
            >
              {service.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                  Popular
                </span>
              )}
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                  service.highlight ? "bg-accent/20" : "bg-primary/10"
                }`}
              >
                <service.icon
                  className={`h-6 w-6 ${service.highlight ? "text-accent" : "text-primary"}`}
                />
              </div>
              <h3 className="mt-5 font-[var(--font-poppins)] text-lg font-bold text-card-foreground">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <a
                href="#contacto"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                Solicitar informacion
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
