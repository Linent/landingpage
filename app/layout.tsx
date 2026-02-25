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
  title: "Registro de Marca en Estados Unidos | MarcaFirme USA",
  description:
    "Registra tu marca en Estados Unidos con asesoría legal en español. Evaluación inicial sin costo, proceso transparente y acompañamiento jurídico completo hasta la aprobación.",
  keywords: [
    "registro de marca en estados unidos",
    "protección de marca en USA",
    "asesoría legal para marcas en USA",
    "registro de marca en español",
    "registro USPTO",
  ],
  openGraph: {
    title: "Registra tu Marca en Estados Unidos | MarcaFirme USA",
    description:
      "Protege tu marca en USA con asesoría legal en español y respaldo jurídico real. Evaluación inicial sin costo.",
    url: "https://landingpage-three-omega-55.vercel.app",
    siteName: "MarcaFirme USA",
    images: [
      {
        url: "https://landingpage-three-omega-55.vercel.app/images/og-imagen-asesores-legales.png",
        width: 1200,
        height: 630,
        alt: "Registro de Marca en Estados Unidos con asesoría legal en español",
      },
    ],
    locale: "es_US",
    type: "website",
  },
  robots: { 
    index: true, 
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Registra tu Marca en USA | Evaluación sin costo",
    description:
      "Asesoría legal clara en español para registrar tu marca en Estados Unidos.",
    images: [
      "https://landingpage-three-omega-55.vercel.app/images/og-imagen-asesores-legales.png",
    ]
  },

  icons: {
    icon: [
      {
        url: "/assets/favicon.png",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
  },
};

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
