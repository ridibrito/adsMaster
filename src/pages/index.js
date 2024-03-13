import Heroi from "@/components/heroi";
import Features from "@/components/features";
import Conteudo from "@/components/conteudo";
import Faq from "@/components/faq";
import Precos from "@/components/precos";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between lg:p-12 p-4 ${inter.className}`}
    >
      <Heroi />
      <Features />
      <Conteudo />
      <Precos />
      <Faq />
    </main>
  );
}
