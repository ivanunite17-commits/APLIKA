import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "APLIKA | Prepárate para el teórico",
  description: "Plataforma de preparación para el examen teórico de conducir.",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="es"><body>{children}</body></html>;
}