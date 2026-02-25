import { Users, Award, Globe, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "+500", label: "Marcas registradas" },
  { icon: Award, value: "98%", label: "Tasa de aprobacion" },
  { icon: Globe, value: "15+", label: "Paises de origen" },
  { icon: Clock, value: "24h", label: "Tiempo de respuesta" },
];

export const AboutSection =() => {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <div>
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
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              Conoce mas sobre nosotros
            </a>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center rounded-2xl border border-border/50 bg-card p-6 text-center shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15">
                  <stat.icon className="h-6 w-6 text-accent" />
                </div>
                <p className="mt-4 font-[var(--font-poppins)] text-3xl font-extrabold text-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
