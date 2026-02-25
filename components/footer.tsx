import { Phone, Mail, Clock, MapPin } from "lucide-react";
export const Footer = () => {
  return (
    <footer className="border-t border-border bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Grid principal */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Columna 1 - Logo + descripción */}
          <div>
            <img
              src="/assets/logo-marcafirme.svg"
              alt="MarcaFirme USA company logo"
              className="mb-6 w-90"
            />
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Asesoría legal en español para el registro de marcas en Estados Unidos.
              Acompañamiento profesional, claro y transparente.
            </p>
          </div>
            <div/>
          {/* Columna 2 - Enlaces legales */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wide text-primary-foreground">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Términos y condiciones
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3 - Contacto */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wide text-primary-foreground">
              Contacto
            </h4>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-accent mt-1" />
                <div>
                  <p className="text-sm font-medium">WhatsApp</p>
                  <a
                    href="https://wa.me/15550127842"
                    className="text-sm text-primary-foreground/70 hover:text-accent"
                  >
                    +1 (555) 012-7842
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-accent mt-1" />
                <div>
                  <p className="text-sm font-medium">Correo</p>
                  <a
                    href="mailto:hola@marcafirmeusa.com"
                    className="text-sm text-primary-foreground/70 hover:text-accent"
                  >
                    hola@marcafirmeusa.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-accent mt-1" />
                <div>
                  <p className="text-sm font-medium">Horario</p>
                  <p className="text-sm text-primary-foreground/70">
                    Lun a Vie: 9:00 AM – 6:00 PM (ET)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-accent mt-1" />
                <div>
                  <p className="text-sm font-medium">Dirección</p>
                  <p className="text-sm text-primary-foreground/70">
                    1200 Brickell Ave, Suite 900<br />
                    Miami, FL 33131
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} MarcaFirme USA. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};