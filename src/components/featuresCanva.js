import Image from "next/image";

export default function FeaturesCanva() {
  return (
    <>
      <section class=" pt-12">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="max-w-screen-md mb-8 lg:mb-16">
            <h2 class="mb-4 lg:text-4xl text-3xl  tracking-tight font-extrabold  text-white">
              O que você terá acesso se garantir sua inscrição hoje!
            </h2>
          </div>
          <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div className=" rounded-lg p-6 bg-gradient-to-r from-gray-900">
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 bg-primary-900">
                <Image
                  src="/checkV.png"
                  alt="logo facebook"
                  width="100"
                  height="100"
                />
              </div>
              <h3 class="mb-2 text-xl font-bold text-white">
                +20.000 artes e templates editáveis, prontos para você começar a
                utilizar!
              </h3>
            </div>
            <div className=" rounded-lg p-6 bg-gradient-to-r from-gray-900">
              <div class="flex justify-center gap-3  items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 bg-primary-900">
                <Image
                  src="/checkV.png"
                  alt="logo facebook"
                  width="100"
                  height="100"
                />
              </div>
              <h3 class="mb-2 text-xl font-bold text-white">
                Acesso VIP Vitalício ao maior Pack de Canva do Brasil,
              </h3>
            </div>

            <div className=" rounded-lg p-6 bg-gradient-to-r from-gray-900">
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 bg-primary-900">
                <Image
                  src="/checkV.png"
                  alt="logo facebook"
                  width="100"
                  height="100"
                />
              </div>
              <h3 class="mb-2 text-xl font-bold text-white">
                {" "}
                Milhares de Templates Prontos e Editáveis
              </h3>
            </div>
            <div className=" rounded-lg p-6 bg-gradient-to-r from-gray-900">
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 bg-primary-900">
                <Image
                  src="/checkV.png"
                  alt="logo facebook"
                  width="100"
                  height="100"
                />
              </div>
              <h3 class="mb-2 text-xl font-bold text-white">
                +120 Nichos diferentes
              </h3>
            </div>
            <div className=" rounded-lg p-6 bg-gradient-to-r from-gray-900">
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 bg-primary-900">
                <Image
                  src="/checkV.png"
                  alt="logo facebook"
                  width="100"
                  height="100"
                />
              </div>
              <h3 class="mb-2 text-xl font-bold text-white">
                Stories Animados prontos para editar e sair usando
              </h3>
            </div>
            <div className=" rounded-lg p-6 bg-gradient-to-r from-gray-900">
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 bg-primary-900">
                <Image
                  src="/checkV.png"
                  alt="logo facebook"
                  width="100"
                  height="100"
                />
              </div>
              <h3 class="mb-2 text-xl font-bold text-white">
                Super curso completo de Canva Pró
                <span className="text-violet-600"> (+ de 4 horas)</span>
              </h3>
            </div>
          </div>
          <div className="mt-12 text-center">
            <a
              href="#precoCanva"
              className="inline-flex w-full lg:w-80 items-center justify-center px-5 py-3 text-base font-medium text-center  border border-violet-600 rounded-lg bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:ring-blue-100 text-white"
            >
              QUERO GARANTIR MEU ULTRA PACK
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
