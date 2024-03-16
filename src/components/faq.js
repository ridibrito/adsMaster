import Image from "next/image";
import { useState } from "react";

export default function Faq() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  const toggleList1 = () => {
    setOpen1(!open1);
  };
  const toggleList2 = () => {
    setOpen2(!open2);
  };
  const toggleList3 = () => {
    setOpen3(!open3);
  };
  const toggleList4 = () => {
    setOpen4(!open4);
  };
  const toggleList5 = () => {
    setOpen5(!open5);
  };
  return (
    <>
      <section className=" bg-gray-900 rounded-lg lg:min-w-full">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 className="mb-8 lg:text-4xl text-3xl  tracking-tight font-extrabold text-gray-400 ">
            Perguntas frequentes
          </h2>
          <div className="grid pt-8 text-left border-t  md:gap-16 border-gray-700 md:grid-cols-2">
            <div>
              <div
                onClick={toggleList1}
                className="mb-10 cursor-pointer border-b border-gray-700 "
              >
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-400 ">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Acesso ao conteúdo
                </h3>
                <div style={{ display: open1 ? "block" : "none" }}>
                  <p className=" text-gray-400">
                    Após realizar a sua inscrição e o pagamento ter sido
                    confirmado com sucesso, Você receberá um e-mail de
                    confirmação da Kiwify com acesso área de membros com o seu
                    login e senha.
                  </p>
                  <p className=" text-gray-400 mt-3">
                    Mas se ficar alguma dúvida, não se preocupe, o nosso suporte
                    está sempre disposto a ajudar da melhor maneira.
                    <p className="mt-3">
                      É só enviar uma mensagem para: contato@adsmaster.com.br
                    </p>
                  </p>
                </div>
              </div>
              <div
                onClick={toggleList4}
                className="mb-10 cursor-pointer border-b border-gray-700 "
              >
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-400 ">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Quanto tempo fica disponível?
                </h3>
                <div style={{ display: open4 ? "block" : "none" }}>
                  <p className=" text-gray-400">
                    O acesso ao treinamento é vitalício. Você vai poder ver e
                    rever as aulas quantas vezes quiser. Você também será dono
                    dos materiais e Packs.
                  </p>
                </div>
              </div>
              <div
                onClick={toggleList5}
                className="mb-10 cursor-pointer border-b border-gray-700 "
              >
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-400 ">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Para quem é o treinamento?
                </h3>
                <div style={{ display: open5 ? "block" : "none" }}>
                  <p className=" text-gray-400">
                    O Treinamento Ads Master é para aqueles que já se frustraram
                    no mundo do Marketing Digital usando técnicas ultrapassadas
                    ou mesmo para aqueles que nunca trabalharam com isso, mas
                    querem começar da maneira certa.
                  </p>
                </div>
              </div>

              <div
                onClick={toggleList2}
                className="mb-10 cursor-pointer border-b border-gray-700"
              >
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-400 ">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Formas de pagamento
                </h3>
                <div style={{ display: open2 ? "block" : "none" }}>
                  <p className=" text-gray-400">
                    Trabalhamos com as seguintes formas de pagamento:
                  </p>
                  <ul className=" text-gray-400">
                    <li>Pix</li>
                    <li>Cartão de crédito em até 12x</li>
                  </ul>
                </div>
              </div>
              <div
                onClick={toggleList3}
                className="mb-10 cursor-pointer border-b border-gray-700 "
              >
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-400 ">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Reembolso e garantia
                </h3>
                <div style={{ display: open3 ? "block" : "none" }}>
                  <p className=" text-gray-400">
                    O reembolso integral da sua compra pode ser solicitado
                    dentro dos 7 dias de garantia sem problema algum. Basta
                    contatar a nossa equipe de suporte e você vai conseguir toda
                    a ajuda que precisa para realizar o reembolso. Você consegue
                    contatar o suporte através do e-mail:
                    contato@adsmaster.com.br
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
