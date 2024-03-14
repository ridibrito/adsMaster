import Image from "next/image";

export default function Garantia() {
  return (
    <>
      <div className="p-6">
        <div className="flex flex-col mt-12 p-6 mx-auto max-w-lg text-center t  rounded-lg  shadow border-gray-600 xl:p-8 bg-gray-900 text-white">
          <div className="flex items-center justify-center ">
            <Image
              src="/7dias.png"
              alt="logo facebook"
              width="200"
              height="300"
            />
          </div>
          <div>
            <h2
              id="preco"
              className="mb-4 lg:text-4xl text-3xl  tracking-tight font-extrabold text-gray-900 dark:text-white"
            >
              7 dias de garantia
            </h2>
            <p className="px-5 text-left">
              Ao adquirir ao super combo Ads Master, você está livre de riscos.
              Tenha acesso COMPLETO a todo o material do treinamento por 7 dias,
              e no final, decida se vale a pena ou não.
            </p>
            <p className="px-5 text-left mt-2">
              Caso se arrependa da compra, o que é praticamente impossível tudo
              que reunimos aqui, basta entrar em contato conosco e devolveremos
              integralmente o valor pago.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
