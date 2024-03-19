import Image from "next/image";

export default function HeroCanva() {
  return (
    <>
      <section class=" bg-gray-900">
        <div class="grid max-w-screen-xl px-8 py-8 md:p-16 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7 order-2 lg:order-2">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
              O melhor e maior Pack de Canva{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-violet-600">
                disponível para você
              </span>
            </h1>
            <p class="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl text-gray-400">
              São + 20 MIL artes 100% editáveis, prontas para criar conteúdos
              extremamente profissionais. Com o poder de converter clientes e
              aumentar suas vendas.
            </p>

            <a
              href="#precoCanva"
              class="inline-flex items-center justify-center px-5 py-3 w-full lg:w-1/2 text-base font-medium text-center  border border-violet-600 rounded-lg bg-violet-600 focus:ring-4 focus:ring-gray-100 text-white  hover:bg-purple-700 "
            >
              EU QUERO O MELHOR PACK
            </a>
          </div>
          <div class=" lg:mt-0 lg:col-span-5 lg:flex mx-auto lg:order-2 order-1 mb-12 lg:mb-0">
            <Image src="/canva_pack.png" alt="mockup" width={300} height={50} />
          </div>
        </div>
      </section>
    </>
  );
}
