export default function Indicacao() {
  return (
    <>
      <section class=" bg-gray-900 antialiased mb-6">
        <div class="lg:flex items-center gap-6 max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div class="max-w-2xl mx-auto lg:text-left text-center">
            <h2 class="text-3xl font-extrabold leading-tight tracking-tight  sm:text-4xl text-white">
              Aproveite e conheça nosso super treinamento
            </h2>
            <p class="mt-4 text-base font-normal  sm:text-xl text-gray-400">
              O Ads Master vai transformar você em um mestre das principais
              plataformas de anúncios online.
            </p>
          </div>

          <div class="grid mt-12 lg:mt-0 text-center lg:text-left sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 ">
            <div class="space-y-4">
              <h3 class="text-2xl font-bold leading-tight  text-white">
                Site Oficial
              </h3>
              <p class="text-lg font-normal  text-gray-400"></p>
              <a
                href="https://adsmaster.com.br"
                title=""
                class="text-white justify-center inline-flex items-center  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-800 focus:ring-blue-800"
                role="button"
              >
                Quero conhecer o Ads Master
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 ml-2 -mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
