"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuanto tiempo toma el proceso de registro?",
    answer:
      "El tiempo varia segun cada caso. En la asesoria inicial te damos un estimado realista basado en tu situacion especifica. El proceso ante la USPTO generalmente toma entre 8 y 12 meses.",
  },
  {
    question: "¿Necesito una LLC para registrar mi marca?",
    answer:
      "No siempre. Puedes registrar una marca como persona natural o como entidad comercial. Te orientamos segun tu situacion particular para elegir la mejor opcion.",
  },
  {
    question: "¿Puedo registrar si estoy fuera de Estados Unidos?",
    answer:
      "Si. Muchos de nuestros clientes operan desde Latinoamerica. Evaluamos tu caso y te guiamos durante todo el proceso sin importar tu ubicacion.",
  },
];

export const FaqSection = () => {
  return (
    <section id="faq" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
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

        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl border border-border/50 bg-card px-6 shadow-sm mb-3"
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
}
