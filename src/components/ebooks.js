import Image from "next/image";

export default function Ebooks() {
  return (
    <>
      <section class="lg:pt-12 rounded-lg bg-gradient-to-t from-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="max-w-screen-md mb-8 lg:mb-16">
            <h2 class="mb-4 lg:text-4xl text-3xl text-center lg:text-left tracking-tight font-extrabold  text-white ">
              E mais uma super seleção E-books e Packs
            </h2>
            <p class=" sm:text-xl text-gray-400">
              Mais de 3.500 artes prontas e editáveis e muito conteúdo
              complementar para você se tornar uma Ads Master.
            </p>
          </div>
          <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="mx-auto">
                <Image
                  src="/canvaBook.png"
                  alt="pack canva"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">
                + de 3 mil imagens editáveis
              </h3>
              <p className="text-gray-400">
                Crie postagens incríveis em 5 minutos com o Canva Gratuito. São
                mais de 50 nichos disponíveis, milhares de artes prontas e
                editáveis direto no Canva.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <div>
                <Image
                  src="/antiblock.png"
                  alt="pack canva"
                  width={100}
                  height={100}
                />
              </div>
              <h3 class="mb-2 text-xl font-bold text-white">
                +500 Criativos Antiblock
              </h3>
              <p class=" text-gray-400">
                Descubra o poder dos criativos Black e escale seus anúncios sem
                bloqueios. Mais de 500 imagens desenvolvido para que você tenha
                o máximo de desemprenho sem barreiras!
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <Image
                src="/check.png"
                alt="pack canva"
                width={100}
                height={100}
              />
              <h3 class="mb-2 text-xl font-bold text-white">
                CheckLis Milionário
              </h3>
              <p class=" text-gray-400">
                Conheça o segredo que transformou milhares de empreendedores de
                sucesso. Aprenda a lucrar todos os dias com o mercado de PLR!
                Descubra o segredo dos grandes players do mercado digital...
              </p>
            </div>
          </div>
          <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div className="flex flex-col items-center justify-center text-center">
              <Image
                src="/autonomo.png"
                alt="pack canva"
                width={100}
                height={100}
              />
              <h3 class="mb-2 text-xl font-bold text-white">
                Autônomo Digital
              </h3>
              <p class=" text-gray-400">
                Descubra os segredos das melhores fontes de renda trabalhando em
                casa como um Autônomo Digital. Um compilado das várias fontes de
                renda com dicas e aplicações das soluções.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <Image
                src="/probook.png"
                alt="pack canva"
                width={100}
                height={100}
              />
              <h3 class="mb-2 text-xl font-bold text-white">
                Desvendando a procrastinação
              </h3>
              <p class=" text-gray-400">
                Conquiste a Produtividade e Transforme sua Vida”. Se você já se
                viu adiando tarefas importantes, deixando prazos passarem
                despercebidos ou sentindo-se frustrado pela falta de progresso
                em seus objetivos, saiba que não está sozinho.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
