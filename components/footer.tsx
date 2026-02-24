export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/assets/logo-marcafirme.svg" alt="MarcaFirme USA company logo" className="h-auto w-120" />
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href="#"
              className="text-primary-foreground/70 transition-colors hover:text-accent"
            >
              Politica de privacidad
            </a>
            <span className="text-primary-foreground/30">|</span>
            <a
              href="#"
              className="text-primary-foreground/70 transition-colors hover:text-accent"
            >
              Terminos y condiciones
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-sm text-primary-foreground/50">
            {"© 2026 MarcaFirme USA. Todos los derechos reservados."}
          </p>
        </div>
      </div>
    </footer>
  );
}
