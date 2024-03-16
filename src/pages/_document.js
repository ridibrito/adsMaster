import { Html, Head, Main, NextScript } from "next/document";
import Footer from "@/components/footer";
export default function Document() {
  return (
    <Html lang="pt-br" className="!scroll-smooth">
      <Head>
        <title>Ads Master</title>
        <meta
          name="description"
          content="Domine os 3 pilares fundamentais dos anúncios pagos com o Ads Master. Este curso abrangente oferece insights valiosos sobre plataformas de anúncios, estratégias criativas e planos de contingência para enfrentar desafios como bloqueios no Facebook Ads. Aprenda com especialistas em marketing digital e torne-se um mestre em tráfego pago. Inscreva-se agora e leve suas campanhas de anúncios para o próximo nível!"
        />
        <meta
          name="facebook-domain-verification"
          content="tt4v71ncwcnmc49ev6yzlckdub5979"
        />
        <link rel="icon" href="/icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  );
}
