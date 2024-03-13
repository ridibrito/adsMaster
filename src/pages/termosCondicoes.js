import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function PoliticasPrivacidade() {
  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-between lg:p-12 p-4 ${inter.className}`}
      >
        <div className="mx-auto max-w-screen-lg">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            Termos e condições de uso
          </h1>

          <h2>
            <span>1. Termos</span>
          </h2>
          <p>
            <span>
              Ao acessar ao site <a href="ADSMASTER.COM.BR">Ads Master</a>,
              concorda em cumprir estes termos de serviço, todas as leis e
              regulamentos aplicáveis ​​e concorda que é responsável pelo
              cumprimento de todas as leis locais aplicáveis. Se você não
              concordar com algum desses termos, está proibido de usar ou
              acessar este site. Os materiais contidos neste site são protegidos
              pelas leis de direitos autorais e marcas comerciais aplicáveis.
            </span>
          </p>
          <h2>
            <span>2. Uso de Licença</span>
          </h2>
          <p>
            <span>
              É concedida permissão para baixar temporariamente uma cópia dos
              materiais (informações ou software) no site Ads Master , apenas
              para visualização transitória pessoal e não comercial. Esta é a
              concessão de uma licença, não uma transferência de título e, sob
              esta licença, você não pode:&nbsp;
            </span>
          </p>
          <ol>
            <li>
              <span>modificar ou copiar os materiais;&nbsp;</span>
            </li>
            <li>
              <span>
                usar os materiais para qualquer finalidade comercial ou para
                exibição pública (comercial ou não comercial);&nbsp;
              </span>
            </li>
            <li>
              <span>
                tentar descompilar ou fazer engenharia reversa de qualquer
                software contido no site Ads Master;&nbsp;
              </span>
            </li>
            <li>
              <span>
                remover quaisquer direitos autorais ou outras notações de
                propriedade dos materiais; ou&nbsp;
              </span>
            </li>
            <li>
              <span>
                transferir os materiais para outra pessoa ou espelhe os
                materiais em qualquer outro servidor.
              </span>
            </li>
          </ol>
          <p>
            <span>
              Esta licença será automaticamente rescindida se você violar alguma
              dessas restrições e poderá ser rescindida por Ads Master a
              qualquer momento. Ao encerrar a visualização desses materiais ou
              após o término desta licença, você deve apagar todos os materiais
              baixados em sua posse, seja em formato eletrónico ou impresso.
            </span>
          </p>
          <h2>
            <span>3. Isenção de responsabilidade</span>
          </h2>
          <ol>
            <li>
              <span>
                Os materiais no site da Ads Master são fornecidos como estão.
                Ads Master não oferece garantias, expressas ou implícitas, e,
                por este meio, isenta e nega todas as outras garantias,
                incluindo, sem limitação, garantias implícitas ou condições de
                comercialização, adequação a um fim específico ou não violação
                de propriedade intelectual ou outra violação de direitos.
              </span>
            </li>
            <li>
              <span>
                Além disso, o Ads Master não garante ou faz qualquer
                representação relativa à precisão, aos resultados prováveis ​​ou
                à confiabilidade do uso dos materiais em seu site ou de outra
                forma relacionado a esses materiais ou em sites vinculados a
                este site.
              </span>
            </li>
          </ol>
          <h2>
            <span>4. Limitações</span>
          </h2>
          <p>
            <span>
              Em nenhum caso o Ads Master ou seus fornecedores serão
              responsáveis ​​por quaisquer danos (incluindo, sem limitação,
              danos por perda de dados ou lucro ou devido a interrupção dos
              negócios) decorrentes do uso ou da incapacidade de usar os
              materiais em Ads Master, mesmo que Ads Master ou um representante
              autorizado da Ads Master tenha sido notificado oralmente ou por
              escrito da possibilidade de tais danos. Como algumas jurisdições
              não permitem limitações em garantias implícitas, ou limitações de
              responsabilidade por danos conseqüentes ou incidentais, essas
              limitações podem não se aplicar a você.
            </span>
          </p>
          <h2>
            <span>5. Precisão dos materiais</span>
          </h2>
          <p>
            <span>
              Os materiais exibidos no site da Ads Master podem incluir erros
              técnicos, tipográficos ou fotográficos. Ads Master não garante que
              qualquer material em seu site seja preciso, completo ou atual. Ads
              Master pode fazer alterações nos materiais contidos em seu site a
              qualquer momento, sem aviso prévio. No entanto, Ads Master não se
              compromete a atualizar os materiais.
            </span>
          </p>
          <h2>
            <span>6. Links</span>
          </h2>
          <p>
            <span>
              O Ads Master não analisou todos os sites vinculados ao seu site e
              não é responsável pelo conteúdo de nenhum site vinculado. A
              inclusão de qualquer link não implica endosso por Ads Master do
              site. O uso de qualquer site vinculado é por conta e risco do
              usuário.
            </span>
          </p>
          <p>
            <br />
          </p>
          <h3>
            <span>Modificações</span>
          </h3>
          <p>
            <span>
              O Ads Master pode revisar estes termos de serviço do site a
              qualquer momento, sem aviso prévio. Ao usar este site, você
              concorda em ficar vinculado à versão atual desses termos de
              serviço.
            </span>
          </p>
          <h3>
            <span>Lei aplicável</span>
          </h3>
          <p>
            <span>
              Estes termos e condições são regidos e interpretados de acordo com
              as leis do Ads Master e você se submete irrevogavelmente à
              jurisdição exclusiva dos tribunais naquele estado ou localidade.
            </span>
          </p>
        </div>
      </main>
    </>
  );
}
