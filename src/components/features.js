import Image from "next/image";

export default function Features() {
  return (
    <>
      <section class="">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="max-w-screen-md mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Veja as plataformas que você vai dominar
            </h2>
            <p class="text-gray-500 sm:text-xl dark:text-gray-400">
              Um conteúdo muito abrangente que vai te deixar na frente da
              concorrência, além de parar de sofrer com bloqueios e métricas
              caras.
            </p>
          </div>
          <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <Image
                  src="/google2.png"
                  alt="logo facebook"
                  width="100"
                  height="100"
                />
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Google Ads</h3>
              <p class="text-gray-500 dark:text-gray-400">
                Aprenda a vender todos os dias usando o Google ads, e tenha um
                anúncio lucrativo na primeira página de busca
              </p>
            </div>
            <div>
              <div class="flex justify-center gap-3 ml-5 items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <Image
                  src="/facebook.png"
                  alt="logo facebook"
                  width="100"
                  height="100"
                />
                <Image
                  src="/instagram.png"
                  alt="logo facebook"
                  width="100"
                  height="100"
                />
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">
                Facebook e Instagram Ads
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                Aprenda a vender todos os dias usando o Facebook e Instagram, e
                converta com seus anúncios 10xmais!
              </p>
            </div>

            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <Image
                  src="/tik tok.png"
                  alt="logo facebook"
                  width="100"
                  height="100"
                />
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">TikTok Ads</h3>
              <p class="text-gray-500 dark:text-gray-400">
                Aprenda a vender todos os dias usando o TikTok, e fature muito
                com essa plataforma que se tornou destaque na web.
              </p>
            </div>
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <Image
                  src="/taboola.png"
                  alt="logo facebook"
                  width="100"
                  height="100"
                />
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">
                Taboola Ads
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                Aprenda a vender todos os dias, em grandes portais com anúncios
                Native Ads.
              </p>
            </div>
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <Image
                  src="/pinterest.png"
                  alt="logo facebook"
                  width="100"
                  height="100"
                />
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">
                Pinterest Ads
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                Aprenda a estratégia para gerar milhões de visualizações para
                seu blog transformando em uma maquina de monetização
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
