"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState } from "react";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const serviceOptions = [
  "Registro de Marca",
  "Renovación",
  "Vigilancia",
  "Oposicion",
];

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const leftReveal = useReveal();
  const formReveal = useReveal();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

          {/* LEFT SIDE */}
          <div
            ref={leftReveal.ref}
            className={`reveal ${leftReveal.isVisible ? "visible" : ""
              }`}
          >
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent">
              Contacto
            </span>

            <h2 className="mt-4 font-[var(--font-poppins)] text-3xl font-bold text-foreground sm:text-4xl">
              Evaluación rapida y sin compromiso
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Dejanos tus datos y te contactamos hoy o el siguiente día habil.
              Tu marca no puede esperar.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              {[
                { icon: Phone, title: "WhatsApp", value: "+1 (555) 012-7842" },
                { icon: Mail, title: "Correo", value: "hola@marcafirmeusa.com" },
                { icon: Clock, title: "Horario", value: "Lun a Vie: 9:00 AM – 6:00 PM (ET)" },
                { icon: MapPin, title: "Dirección", value: "1200 Brickell Ave, Suite 900, Miami, FL 33131" },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 transition-all duration-300 hover:-translate-y-1"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 hover:bg-primary/20">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FORM SIDE */}
          <div
            ref={formReveal.ref}
            className={`rounded-2xl border border-border/50 bg-card p-8 shadow-lg reveal-contact ${formReveal.isVisible ? "visible" : ""
              }`}
          >
            {submitted ? (
              <div className="flex flex-col items-center py-12 text-center fade-in-scale">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 animate-pulse">
                  <Send className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mt-5 font-[var(--font-poppins)] text-2xl font-bold text-foreground">
                  ¡Solicitud enviada!
                </h3>
                <p className="mt-2 max-w-xs text-muted-foreground">
                  Revisaremos tu información y te contactaremos a la brevedad.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                {["Nombre completo", "Correo electronico", "Teléfono"].map(
                  (label, i) => (
                    <div key={label}>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">
                        {label} <span className="text-destructive">*</span>
                      </label>

                      <input
                        required
                        type={i === 1 ? "email" : i === 2 ? "tel" : "text"}
                        placeholder={`Ej: ${i === 0
                            ? "Maria Lopez"
                            : i === 1
                              ? "maria@ejemplo.com"
                              : "+1 (555) 000-0000"
                          }`}
                        className="w-full h-12 rounded-xl border border-input bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                  )
                )}

                {/* Servicio */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Servicio <span className="text-destructive">*</span>
                  </label>

                  <Select required>
                    <SelectTrigger className="w-full h-12 rounded-xl border border-input bg-background px-4 text-sm transition-all focus:ring-2 focus:ring-primary/20 focus:border-primary">
                      <SelectValue placeholder="Selecciona un servicio" />
                    </SelectTrigger>

                    <SelectContent>
                      {serviceOptions.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Política */}
                <label className="flex items-start gap-3 text-sm">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-input accent-primary"
                  />
                  <span className="text-muted-foreground">
                    Acepto la{" "}
                    <a href="#" className="font-medium text-primary underline">
                      Politica de Privacidad
                    </a>
                  </span>
                </label>

                {/* Botón homogéneo */}
                <button
                  type="submit"
                  className="mt-2 h-12 w-full flex items-center justify-center gap-2 rounded-xl bg-accent px-6 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:brightness-110 hover:-translate-y-1"
                >
                  <Send className="h-4 w-4" />
                  Solicitar evaluación
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};