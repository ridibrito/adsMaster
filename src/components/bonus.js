import Image from "next/image";

export default function Bonus() {
  return (
    <>
      <div className="">
        <h2 className="mt-24 mb-8 lg:text-4xl text-center text-3xl tracking-tight font-extrabold text-gray-900 text-white">
          Veja os bônus exclusivos que você vai receber.
        </h2>
        <div className="lg:flex items-center lg:w-1/2 mx-auto">
          <Image
            src="/cont.png"
            alt="capa ebook"
            width="300"
            height="300"
            className="mx-auto"
          />
          <div className="px-4">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-900 font-extrabold text-2xl">
              Bônus 1 :{" "}
              <span className="text-white font-normal">
                Contingência Black Pro
              </span>
            </h2>
            <div className="border border-gray-700 rounded-xl px-8 py-4 w-80 mt-2 mb-2 bg-gray-800">
              <h2 className="flex items-center justify-center text-xl mx-auto">
                💰 Valor total:
                <span className="text-red-600 line-through"> R$ 97,00</span>
              </h2>
            </div>
            <p>
              A forma mais segura para não sofrer com Bloqueios de conta e
              escalar sua operação.
            </p>
            <p className="mt-2">
              Um curso desenvolvido por quem já lucra usando esta ferramenta ! E
              quer ajudar você também conquistar uma renda que jamais imaginou
              na vida!
            </p>
          </div>
        </div>
        <div className="lg:flex items-center lg:w-1/2 mx-auto">
          <Image
            src="/canvaPro.png"
            alt="capa ebook"
            width="300"
            height="300"
            className="mx-auto"
          />
          <div className="px-4">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-900 font-extrabold text-2xl">
              Bônus 2 :{" "}
              <span className="text-white font-normal">Canva Turbo Pro</span>
            </h2>
            <div className="border border-gray-700 rounded-xl px-8 py-4 w-80 mt-2 mb-2 bg-gray-800">
              <h2 className="flex items-center justify-center text-xl mx-auto">
                💰 Valor total:
                <span className="text-red-600 line-through"> R$ 97,00</span>
              </h2>
            </div>
            <p>
              Alcançe um novo patamar em seus anúncios com criativos
              profissionais.
            </p>
            <p className="mt-2">
              Todo o conteúdo do Canva Turbo foi pensado e desenvolvido para
              você aprender a fazer artes bonitas e profissionais de um jeito
              rápido, simples e intuitivo.
            </p>
          </div>
        </div>
        <div className="lg:flex items-center lg:w-1/2 mx-auto">
          <Image
            src="/pageUp.png"
            alt="capa ebook"
            width="300"
            height="300"
            className="mx-auto"
          />
          <div className="px-4">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-900 font-extrabold text-2xl">
              Bônus 3 : <span className="text-white font-normal">Page Up</span>
            </h2>
            <div className="border border-gray-700 rounded-xl px-8 py-4 w-80 mt-2 mb-2 bg-gray-800">
              <h2 className="flex items-center justify-center text-xl mx-auto">
                💰 Valor total:
                <span className="text-red-600 line-through"> R$ 97,00</span>
              </h2>
            </div>
            <p>
              Descubra como aumentar 3X as vendas do seu produto com apenas
              poucos cliques.
            </p>
            <p className="mt-2">
              Economize muito tempo e dinheiro, personalizando você mesmo o
              layout da sua página. Com aulas dinâmicas e um método simplificado
              que mesmo você sem nenhum conhecimento em desgin pode dominar
              rapidamente.
            </p>
          </div>
        </div>
        <div className="lg:flex items-center lg:w-1/2 mx-auto">
          <Image
            src="/power.png"
            alt="capa ebook"
            width="300"
            height="300"
            className="mx-auto"
          />
          <div className="px-4">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-900 font-extrabold text-2xl">
              Bônus 4 :{" "}
              <span className="text-white font-normal">Power Box</span>
            </h2>
            <div className="border border-gray-700 rounded-xl px-8 py-4 w-80 mt-2 mb-2 bg-gray-800">
              <h2 className="flex items-center justify-center text-xl mx-auto">
                💰 Valor total:
                <span className="text-red-600 line-through"> R$ 97,00</span>
              </h2>
            </div>
            <p>
              Faça como os maiores produtores da web aprendendo a transformar o
              seu produto em uma verdadeira máquina de vendas, Aprenda do zero
              passo a passo.
            </p>
            <p className="mt-2">
              Conquiste centenas de vendas com seu infoproduto em qualquer tipo
              de plataforma.
            </p>
          </div>
        </div>
        <div className="lg:flex items-center lg:w-1/2 mx-auto">
          <Image
            src="/plr.png"
            alt="capa ebook"
            width="300"
            height="300"
            className="mx-auto"
          />
          <div className="px-4">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-900 font-extrabold text-2xl">
              Bônus 5 :{" "}
              <span className="text-white font-normal">Lucrando com PLR</span>
            </h2>
            <div className="border border-gray-700 rounded-xl px-8 py-4 w-80 mt-2 mb-2 bg-gray-800">
              <h2 className="flex items-center justify-center text-xl mx-auto">
                💰 Valor total:
                <span className="text-red-600 line-through"> R$ 97,00</span>
              </h2>
            </div>
            <p>Descubra como ganhar dinheiro com o mercado de PLR</p>
            <p className="mt-2">
              Aprenda os segredos dos gigantes, transforme os direitos de PLR em
              uma lucrativa fonte de renda com nosso abrangênte guia exclusivo!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
