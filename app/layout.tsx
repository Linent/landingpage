import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const _poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "MarcaFirme USA | Registro de Marca en Estados Unidos",
  description:
    "Asesoría legal clara para registrar tu marca en USA. Evaluación inicial sin costo y soporte por WhatsApp.",

  openGraph: {
    title: "MarcaFirme USA | Registro de Marca en Estados Unidos",
    description:
      "Protege tu marca en Estados Unidos con asesoría legal clara y acompañamiento en español.",
    url: "landingpage-three-omega-55.vercel.app",
    siteName: "MarcaFirme USA",
    images: [
      {
        url: "/images/equipo-asesores-legales.webp",
        width: 1200,
        height: 630,
        alt: "Asesoría legal para registro de marcas en USA",
      },
    ],
    locale: "es_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MarcaFirme USA | Registro de Marca en Estados Unidos",
    description:
      "Evaluación inicial sin costo y soporte directo por WhatsApp.",
    images: ["/images/equipo-asesores-legales.webp"],
  },

  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/assets/favicon.png",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
  },
};;

export const viewport: Viewport = {
  themeColor: "#0658F6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${_inter.variable} ${_poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
