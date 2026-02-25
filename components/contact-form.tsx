"use client";

import { useState } from "react";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";

const serviceOptions = [
  "Registro de Marca",
  "Renovacion",
  "Vigilancia",
  "Oposicion",
];

export const ContactForm = () =>{
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Contact info */}
          <div>
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent" style={{ color: "var(--teal)" }}>
              Contacto
            </span>
            <h2 className="mt-4 font-[var(--font-poppins)] text-3xl font-bold text-foreground sm:text-4xl">
              Evaluacion rapida y sin compromiso
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Dejanos tus datos y te contactamos hoy o el siguiente dia habil.
              Tu marca no puede esperar.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">WhatsApp</p>
                  <a
                    href="https://wa.me/15550127842"
                    className="text-sm text-primary hover:underline"
                  >
                    +1 (555) 012-7842
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Correo</p>
                  <a
                    href="mailto:hola@marcafirmeusa.com"
                    className="text-sm text-primary hover:underline"
                  >
                    hola@marcafirmeusa.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Horario</p>
                  <p className="text-sm text-muted-foreground">
                    Lun a Vie: 9:00 AM – 6:00 PM (ET)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Direccion</p>
                  <p className="text-sm text-muted-foreground">
                    1200 Brickell Ave, Suite 900, Miami, FL 33131
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-border/50 bg-card p-8 shadow-lg">
            {submitted ? (
              <div className="flex flex-col items-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                  <Send className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mt-5 font-[var(--font-poppins)] text-2xl font-bold text-foreground">
                  {"¡Solicitud enviada!"}
                </h3>
                <p className="mt-2 max-w-xs text-muted-foreground">
                  Revisaremos tu informacion y te contactaremos a la brevedad.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Nombre completo <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    placeholder="Ej: Maria Lopez"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Correo electronico <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    placeholder="maria@ejemplo.com"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Telefono <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    required
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Servicio <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecciona un servicio
                    </option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <label className="flex items-start gap-3 text-sm">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 h-4 w-4 rounded border-input text-primary accent-primary"
                  />
                  <span className="text-muted-foreground">
                    Acepto la{" "}
                    <a href="#" className="font-medium text-primary underline">
                      Politica de Privacidad
                    </a>
                  </span>
                </label>

                <button
                  type="submit"
                  className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:brightness-110"
                >
                  <Send className="h-4 w-4" />
                  Solicitar evaluacion
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
