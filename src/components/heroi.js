import Image from "next/image";
import BtnRolar from "./btnRolar";

export default function Heroi() {
  return (
    <>
      <section className="w-full h-auto lg:bg-[url('/bg6.png')]  bg-cover bg-left">
        <div className="lg:hidden">
          <Image src="/bg0.png" alt="bgSmall" width="500" height="500" />
        </div>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center -mt-32 lg:mt-0 lg:col-span-7">
            <h1 className="max-w-2xl mb-4 lg:text-4xl font-extrabold tracking-tight text-center lg:text-left leading-none text-3xl md:text-5xl xl:text-6xl text-white">
              Domine as principais Plataformas de anúncios e acabe com os
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-900">
                {" "}
                bloqueios
              </span>
            </h1>
            <p className="max-w-2xl mb-6  lg:mb-8 md:text-lg lg:text-xl bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-500 font-bold lg:w-2/3">
              O Ads Master vai transformar você em um mestre das principais
              plataformas de anúncios online.
            </p>

            <BtnRolar />
          </div>
        </div>
      </section>
    </>
  );
}
