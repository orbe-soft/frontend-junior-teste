import type { Metadata } from "next";
import { Sora } from "next/font/google";

import "./globals.css";
import { Header } from "@/components/header/header";

const sora = Sora({ subsets: ["latin"], weight: ["300", "400", "600", "700"] });

export const metadata: Metadata = {
  title: "Bike Store",
  description:
    "A Bike Store é a sua loja online especializada em bicicletas de alta qualidade, acessórios e peças. Oferecemos uma vasta seleção de modelos para todos os estilos de ciclistas, desde iniciantes até profissionais. Compre com segurança e aproveite nossas promoções exclusivas. Acelere com a Bike Store! 🚴‍♂️",
  keywords:
    "bike, bicicleta, loja, online, comprar, acessórios, peças, promoção, qualidade, segurança",
  authors: [{ name: "Bruno Wanderson", url: "brunowand.vercel.app" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={sora.className}>
        <main className="min-h-screen w-full bg-background">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
