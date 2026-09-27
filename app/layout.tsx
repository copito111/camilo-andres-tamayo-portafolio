import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://camilo-tamayo.vercel.app"),
  title: "Camilo Andrés Tamayo — Portafolio | Tecnólogo ADSO",
  description:
    "Portafolio profesional de Camilo Andrés Tamayo: Tecnólogo en Análisis y Desarrollo de Software (ADSO · SENA). Desarrollo web full-stack, modelado de bases de datos relacionales, arquitectura y soluciones de software.",
  openGraph: {
    title: "Camilo Andrés Tamayo — Tecnólogo en Desarrollo de Software (ADSO)",
    description: "Portafolio profesional de proyectos de desarrollo de software, bases de datos y arquitectura web.",
    url: "/",
    siteName: "Camilo Andrés Tamayo",
    locale: "es_CO",
    type: "website",
    images: [{ url: "/camilo-tamayo.jpg", width: 1024, height: 1024, alt: "Camilo Andrés Tamayo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Camilo Andrés Tamayo — Portafolio Profesional",
    description: "Tecnólogo en Análisis y Desarrollo de Software (ADSO · SENA). Proyectos y soluciones técnicas.",
    images: ["/camilo-tamayo.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
