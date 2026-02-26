"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useReveal } from "@/hooks/useReveal";

const faqs = [
  {
    question: "¿Cuánto tiempo toma el proceso de registro?",
    answer:
      "Depende de cada caso. En la asesoría inicial te damos un estimado claro y personalizado segun tu situacion. Te explicamos cada etapa del proceso para que tengas expectativas realistas desde el inicio.",
  },
  {
    question: "¿Necesito una LLC para registrar mi marca?",
    answer:
      "No siempre. Puedes registrar una marca como persona natural o como entidad comercial. Te orientamos segun tu situacion particular para elegir la opcion mas conveniente y segura.",
  },
  {
    question: "¿Puedo registrar mi marca si estoy fuera de Estados Unidos?",
    answer:
      "Si. Muchos de nuestros clientes operan desde Latinoamerica u otros países. Evaluamos tu caso y te guiamos durante todo el proceso sin importar tu ubicacion.",
  },
  {
    question: "¿Qué pasa si mi marca ya está registrada?",
    answer:
      "Antes de iniciar el proceso realizamos una búsqueda preliminar para evaluar la disponibilidad de tu marca. Si detectamos posibles conflictos, te asesoramos sobre alternativas o ajustes para reducir el riesgo de rechazo ante la USPTO.",
  },
  {
    question: "¿Qué incluye exactamente el servicio de registro?",
    answer:
      "Nuestro servicio incluye evaluación inicial, búsqueda de antecedentes, preparacion y presentacion de la solicitud ante la USPTO, seguimiento del proceso y respuesta a requerimientos oficiales. Te acompanamos hasta obtener una resolucion.",
  },
];

export const FaqSection = () => {
  const headerReveal = useReveal();
  const faqReveal = useReveal();

  return (
    <section id="faq" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">

        {/* HEADER */}
        <div
          ref={headerReveal.ref}
          className={`text-center reveal ${
            headerReveal.isVisible ? "visible" : ""
          }`}
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
            FAQ
          </span>

          <h2 className="mt-4 font-[var(--font-poppins)] text-3xl font-bold text-foreground sm:text-4xl">
            Preguntas Frecuentes
          </h2>

          <p className="mt-3 text-lg text-muted-foreground">
            Resolvemos las dudas mas comunes sobre el registro de marcas en USA.
          </p>
        </div>

        {/* FAQ LIST */}
        <Accordion
          ref={faqReveal.ref as any}
          type="single"
          collapsible
          className="mt-12"
        >
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className={`faq-card rounded-xl border border-border/50 bg-card px-6 shadow-sm mb-3 reveal-faq ${
                faqReveal.isVisible ? "visible" : ""
              }`}
              style={{
                transitionDelay: `${i * 120}ms`,
              }}
            >
              <AccordionTrigger className="text-left font-[var(--font-poppins)] text-base font-semibold text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
};