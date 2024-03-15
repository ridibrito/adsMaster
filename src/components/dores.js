import Image from "next/image";

export default function Dores() {
  return (
    <>
      <section class="lg:pt-12 rounded-lg bg-gradient-to-t from-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="max-w-screen-md mb-8 lg:mb-16">
            <h2 class="mb-4 lg:text-4xl text-3xl  tracking-tight font-extrabold  text-white">
              Você está pronto para levar suas estratégias de marketing digital
              para o próximo nível?
            </h2>
            <p class=" sm:text-xl text-gray-400">
              Desvende os Segredos dos Anúncios: Torne-se Mestre em Tráfego pago
              Dominando os 3 Pilares
            </p>
          </div>
          <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <h3 class="mb-2 text-xl font-bold text-white">🌐 Plataformas</h3>
              <p class=" text-gray-400">
                Compreender as nuances de cada plataforma, incluindo seus
                algoritmos, métricas e opções de segmentação, é fundamental para
                maximizar o desempenho dos anúncios. Além de acabar com os tão
                indesejados bloqueios.
              </p>
            </div>
            <div>
              <h3 class="mb-2 text-xl font-bold text-white">✨ Criativos</h3>
              <p class=" text-gray-400">
                O aspecto visual e textual dos anúncios, pode mudar o jogo dos
                anúncios, criativos atraentes e persuasivos são essenciais para
                captar a atenção do público e gerar engajamento. Isso inclui a
                criação de designs visualmente atraentes, Copys convincente e
                elementos interativos que incentivem a interação do usuário.
              </p>
            </div>

            <div>
              <h3 class="mb-2 text-xl font-bold text-white">🔒 Contingência</h3>
              <p class=" text-gray-400">
                Capacidade de adaptação e otimização contínua das campanhas de
                anúncios pagos. Nem sempre as estratégias iniciais serão
                bem-sucedidas, portanto, é importante ter planos de contingência
                e estar preparado para ajustar as campanhas com base nos dados e
                no feedback em tempo real.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
