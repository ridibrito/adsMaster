import Image from "next/image";

export default function Features() {
  return (
    <>
      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 lg:text-4xl text-3xl  tracking-tight font-extrabold  text-white">
              Veja as plataformas que você vai dominar
            </h2>
            <p className=" sm:text-xl text-gray-400">
              Um conteúdo muito abrangente que vai te deixar na frente da
              concorrência, além de parar de sofrer com bloqueios e métricas
              caras.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div className=" rounded-lg p-6 bg-gradient-to-r from-gray-900">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 bg-primary-900">
                <Image
                  src="/google2.png"
                  alt="logo facebook"
                  width="100"
                  height="100"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Google Ads</h3>
              <p className=" text-gray-400">
                Aprenda a vender todos os dias usando o Google ads, e tenha um
                anúncio lucrativo na primeira página de busca
              </p>
            </div>
            <div className=" rounded-lg p-6 bg-gradient-to-r from-gray-900">
              <div className="flex justify-center gap-3  items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 bg-primary-900">
                <Image
                  src="/faceInsta.png"
                  alt="logo facebook"
                  width="100"
                  height="100"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">
                Facebook e Instagram Ads
              </h3>
              <p className=" text-gray-400">
                Aprenda a vender todos os dias usando o Facebook e Instagram, e
                converta com seus anúncios 10xmais!
              </p>
            </div>

            <div className=" rounded-lg p-6 bg-gradient-to-r from-gray-900">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 bg-primary-900">
                <Image
                  src="/tiktok.png"
                  alt="logo facebook"
                  width="100"
                  height="100"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">TikTok Ads</h3>
              <p className=" text-gray-400">
                Aprenda a vender todos os dias usando o TikTok, e fature muito
                com essa plataforma que se tornou destaque na web.
              </p>
            </div>
            <div className=" rounded-lg p-6 bg-gradient-to-r from-gray-900">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 bg-primary-900">
                <Image
                  src="/taboola.png"
                  alt="logo facebook"
                  width="100"
                  height="100"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Taboola Ads</h3>
              <p className=" text-gray-400">
                Aprenda a vender todos os dias, em grandes portais com anúncios
                Native Ads.
              </p>
            </div>
            <div className=" rounded-lg p-6 bg-gradient-to-r from-gray-900">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 bg-primary-900">
                <Image
                  src="/pinterest.png"
                  alt="logo facebook"
                  width="100"
                  height="100"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">
                Pinterest Ads
              </h3>
              <p className=" text-gray-400">
                Aprenda a estratégia para gerar milhões de visualizações para
                seu blog transformando em uma maquina de monetização
              </p>
            </div>
            <div className=" rounded-lg p-6 bg-gradient-to-r from-gray-900">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 bg-primary-900">
                <Image
                  src="/zap.png"
                  alt="logo facebook"
                  width="100"
                  height="100"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">
                WhatsApp para vendas
              </h3>
              <p className=" text-gray-400">
                Aprenda como aumentar a conversão de suas vendas no whatsApp.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <a
              href="#preco"
              className="inline-flex w-full lg:w-80 items-center justify-center px-5 py-3 text-base font-medium text-center  border border-sky-600 rounded-lg bg-[#008ffb] hover:bg-[#0275cc] focus:ring-4 focus:ring-blue-100 text-white"
            >
              EU QUERO SER UM ADS MASTER
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
