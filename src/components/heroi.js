import Image from "next/image";

export default function Heroi() {
  return (
    <>
      <section class="w-full h-auto lg:bg-[url('/bg6.png')]  bg-cover bg-left">
        <div className="lg:hidden">
          <Image src="/bg0.png" alt="bgSmall" width="500" height="500" />
        </div>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center -mt-32 lg:mt-0 lg:col-span-7">
            <h1 className="max-w-2xl mb-4 lg:text-4xl font-extrabold tracking-tight text-center lg:text-left leading-none text-3xl md:text-5xl xl:text-6xl text-white">
              Domine as principais Plataformas de anúncios e acabe com os
              bloqueios
            </h1>
            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-white">
              O Ads Master vai transformar você em um mestre das principais
              plataformas de anúncios online.
            </p>

            <a
              href="#preco"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center  border border-sky-600 rounded-lg bg-[#008ffb] hover:bg-[#0275cc] focus:ring-4 focus:ring-blue-100 text-white"
            >
              Eu quero ser um Ads Master
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
