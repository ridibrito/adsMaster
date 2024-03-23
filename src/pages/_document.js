// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
import Footer from "@/components/footer";

const FB_PIXEL_ID = "1330834117602074";

export default class MyDocument extends Document {
  render() {
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
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${FB_PIXEL_ID}');
                fbq('track', 'pageLoad');
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
          <link rel="icon" href="/icon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Footer />
        </body>
      </Html>
    );
  }
}
