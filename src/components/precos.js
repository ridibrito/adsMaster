import Image from "next/image";
import BtnComprar from "./btnComprar";

export default function Precos() {
  return (
    <>
      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2
              id="preco"
              className="mb-4 lg:text-4xl text-3xl  tracking-tight font-extrabold  text-white"
            >
              Confira tudo que você vai receber com Ads Master
            </h2>
            <p className="mb-5 font-light  sm:text-xl text-gray-400">
              Atenção: Todos os cursos e bônus fazem parte desse super combo Ads
              Master, sem pegadinha!
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols sm:gap-6 xl:gap-10 lg:space-y-0">
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center t  rounded-lg  shadow border-gray-600 xl:p-8 bg-gray-900 text-white">
              <h3 id="preco" className="mb-4 text-2xl font-semibold">
                Cursos em vídeo
              </h3>

              <div className="mb-8 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src="/google2.png"
                      alt="logo google ads"
                      width="25"
                      height="25"
                    />
                    <p className="ml-2">Google Ads</p>
                  </div>
                  <div className="flex items-center">
                    <p className="font-bold line-through text-red-600">
                      R$ 199,00
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src="/faceInsta.png"
                      alt="logo facebook"
                      width="25"
                      height="25"
                    />

                    <p className="ml-2">Facebook e Instagram Ads</p>
                  </div>
                  <div className="flex items-center">
                    <p className="font-bold line-through text-red-600">
                      R$ 199,00
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src="/tiktok.png"
                      alt="logo facebook"
                      width="25"
                      height="25"
                    />
                    <p className="ml-2">TikTok Ads</p>
                  </div>
                  <div className="flex items-center">
                    <p className="font-bold line-through text-red-600">
                      R$ 199,00
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src="/taboola.png"
                      alt="logo facebook"
                      width="25"
                      height="25"
                    />
                    <p className="ml-2">Taboola Ads</p>
                  </div>
                  <div className="flex items-center">
                    <p className="font-bold line-through text-red-600">
                      R$ 199,00
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src="/pinterest.png"
                      alt="logo facebook"
                      width="25"
                      height="25"
                    />
                    <p className="ml-2">Pinterest Ads</p>
                  </div>
                  <div className="flex items-center">
                    <p className="font-bold line-through text-red-600">
                      R$ 199,00
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src="/zap.png"
                      alt="logo facebook"
                      width="25"
                      height="25"
                    />
                    <p className="ml-2">WhatsApp</p>
                  </div>
                  <div className="flex items-center">
                    <p className="font-bold line-through text-red-600">
                      R$ 199,00
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-semibold">
                Bônus <i className="underline">em vídeo</i>
              </h3>

              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <span className="font-extrabold">
                      Contingência Black Pro{" "}
                    </span>{" "}
                    - A formula dos anúncios
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <span className="font-extrabold">Canva pro </span> - Curso
                    completo com técnicas profissionais
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <span className="font-extrabold">PageUp </span> - Crie
                    layouts profissionais que convertem
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <span className="font-extrabold">Power Box </span> - Crie as
                    caixas do sucesso e aumente suas vendas em 10x
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p>
                    <span className="font-extrabold">Lucrando com PLR </span>-
                    Ganhe muito dinheiro com PLR
                  </p>
                </li>
              </ul>
              <h3 className="mb-4 text-2xl font-semibold">
                Bônus Super Packs e E-books
              </h3>

              <div className="mb-8 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src="/canvaBook.png"
                      alt="logo google ads"
                      width="25"
                      height="25"
                    />
                    <p className="ml-2">
                      Power Canva - + de 3 mil imagens editáveis
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="font-bold line-through text-red-600">
                      R$ 97,00
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src="/antiblock.png"
                      alt="logo facebook"
                      width="25"
                      height="25"
                    />

                    <p className="ml-2">
                      Criativos Antiblock - + 500 imagens prontas para subir
                      anuncios
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="font-bold line-through text-red-600">
                      R$ 97,00
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src="/check.png"
                      alt="logo facebook"
                      width="25"
                      height="25"
                    />
                    <p className="ml-2">
                      Checklist Milionário - Aprenda a vender PLR
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="font-bold line-through text-red-600">
                      R$ 97,00
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src="/autonomo.png"
                      alt="logo facebook"
                      width="25"
                      height="25"
                    />
                    <p className="ml-2">
                      Autonomo digital - Descubra os segredos dsas melhores
                      fontes de renda trabalhando em casa
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="font-bold line-through text-red-600">
                      R$ 97,00
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src="/proBook.png"
                      alt="logo facebook"
                      width="25"
                      height="25"
                    />
                    <p className="ml-2">
                      Desvendando a procrastinação - Conquiste a produtividade e
                      transforme sua vida
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="font-bold line-through text-red-600">
                      R$ 97,00
                    </p>
                  </div>
                </div>
              </div>

              <div className="block justify-center items-baseline my-8">
                <p className="rounded-lg bg-gray-800 px-2 py-3 text-5xl font-extrabold">
                  12x de R$ 9,74
                </p>
                <p className=" text-2xl font-bold mt-4">Ou R$ 97,00 à vista</p>
              </div>
              <div>
                <BtnComprar className="mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
