import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Providers from "./Providers";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BikeStore - OrbeSoft",
  description:
    "A BikeStore oferece uma ampla gama de bicicletas urbanas e de aventura com qualidade e preços competitivos. Encontre sua bicicleta ideal com ofertas exclusivas e atendimento especializado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        <Providers>
          {children}
        </Providers>
        <Footer/>
      </body>
    </html>
  );
}
