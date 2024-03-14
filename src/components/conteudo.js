import { useState } from "react";
import Image from "next/image";

export default function Conteudo() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

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
  const toggleList6 = () => {
    setOpen6(!open6);
  };

  return (
    <>
      <section className=" bg-gray-900 w-full rounded-lg">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Conheça o conteúdo de cada curso
          </h2>
          <div className="grid pt-4 text-left  md:gap-16 dark:border-gray-700 md:grid-cols">
            <div>
              <div className="mb-10 ">
                <h3
                  onClick={toggleList1}
                  className="flex items-center justify-between pb-3 mb-2 text-lg font-medium text-gray-900 dark:text-white border-b border-gray-700 cursor-pointer"
                >
                  <div className="flex items-center">
                    <Image
                      src="/google2.png"
                      alt="logo facebook"
                      width="25"
                      height="25"
                    />
                    <p className="ml-2">Google Ads</p>
                  </div>
                  <div className="flex gap-5">
                    <p className="font-bold line-through text-red-600">
                      R$ 199,00
                    </p>

                    {open1 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        transform="rotate(90)"
                      >
                        <g id="_01_align_center" data-name="01 align center">
                          <path
                            d="M9.707,19.293v-14L16,11.586A1,1,0,0,1,16,13Z"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                      >
                        <g id="_01_align_center" data-name="01 align center">
                          <path
                            d="M9.707,19.293v-14L16,11.586A1,1,0,0,1,16,13Z"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                    )}
                  </div>
                </h3>

                <ul
                  style={{ display: open1 ? "block" : "none" }}
                  className=" text-gray-500 dark:text-gray-400"
                >
                  <p className="font-bold mb-3">
                    Um curso completo do zero ao avançado com{" "}
                    <span className="underline decoration-double ">
                      mais de 5 horas
                    </span>{" "}
                    de vídeo aulas
                  </p>
                  <li>• Configurações</li>
                  <li>• Conhecendo a plataforma</li>
                  <li>• Planejador de palavras chave</li>
                  <li>• Rede de Pesquisa </li>
                  <li>• Rede de Display </li>
                  <li>• Google Tag Manager</li>
                  <li>• Youtube</li>
                  <li>• Google Merchat Center</li>
                  <li>• Google Shopping</li>
                </ul>
              </div>

              <div className="mb-10 ">
                <h3
                  onClick={toggleList2}
                  className="flex items-center justify-between pb-3 mb-2 text-lg font-medium text-gray-900 dark:text-white border-b border-gray-700 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <div className="gap-2">
                      <Image
                        src="/faceInsta.png"
                        alt="logo facebook"
                        width="25"
                        height="25"
                      />
                    </div>
                    <p className="ml-2">Facebook e Instagram Ads</p>
                  </div>
                  <div className="flex gap-5">
                    <p className="font-bold line-through text-red-600">
                      R$ 199,00
                    </p>

                    {open2 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        transform="rotate(90)"
                      >
                        <g id="_01_align_center" data-name="01 align center">
                          <path
                            d="M9.707,19.293v-14L16,11.586A1,1,0,0,1,16,13Z"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                      >
                        <g id="_01_align_center" data-name="01 align center">
                          <path
                            d="M9.707,19.293v-14L16,11.586A1,1,0,0,1,16,13Z"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                    )}
                  </div>
                </h3>

                <ul
                  style={{ display: open2 ? "block" : "none" }}
                  className=" text-gray-500 dark:text-gray-400"
                >
                  <p className="font-bold mb-3">
                    Um curso completo do zero ao avançado com{" "}
                    <span className="underline decoration-double ">
                      mais de 6 horas
                    </span>{" "}
                    de vídeo aulas
                  </p>
                  <li>• Aulão inicial</li>
                  <li>• Criação de Fanpage e Funções Administrativas</li>
                  <li>• O Gerenciador de Negócios – Apresentação</li>
                  <li>• Funil de Vendas </li>
                  <li>• Objetivos de Campanha </li>
                  <li>• Públicos</li>
                  <li>• Anúncios</li>
                  <li>• Remarketing</li>
                  <li>• Pixel</li>
                  <li>• Suporte</li>
                  <li>• Biblioteca de anúncios</li>
                  <li>• Nichos Black</li>
                  <li>• Nichos sensíveis</li>
                  <li>• Negócios locais</li>
                  <li>• Campanha negócios locais</li>
                  <li>• Análises</li>
                  <li>E muito mais... </li>
                </ul>
              </div>
              <div className="mb-10 ">
                <h3
                  onClick={toggleList3}
                  className="flex items-center justify-between pb-3 mb-2 text-lg font-medium text-gray-900 dark:text-white border-b border-gray-700 cursor-pointer"
                >
                  <div className="flex items-center">
                    <Image
                      src="/Tik Tok.png"
                      alt="logo facebook"
                      width="25"
                      height="25"
                    />
                    <p className="ml-2">TikTok Ads</p>
                  </div>
                  <div className="flex gap-5">
                    <p className="font-bold line-through text-red-600">
                      R$ 199,00
                    </p>

                    {open3 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        transform="rotate(90)"
                      >
                        <g id="_01_align_center" data-name="01 align center">
                          <path
                            d="M9.707,19.293v-14L16,11.586A1,1,0,0,1,16,13Z"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                      >
                        <g id="_01_align_center" data-name="01 align center">
                          <path
                            d="M9.707,19.293v-14L16,11.586A1,1,0,0,1,16,13Z"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                    )}
                  </div>
                </h3>

                <ul
                  style={{ display: open3 ? "block" : "none" }}
                  className=" text-gray-500 dark:text-gray-400"
                >
                  <p className="font-bold mb-3">
                    Um curso completo do zero ao avançado com{" "}
                    <span className="underline decoration-double ">
                      mais de 3 horas
                    </span>{" "}
                    de vídeo aulas
                  </p>
                  <li>• Criando conta de anúncios</li>
                  <li>• Criando BM ( gerenciador de anúncios)</li>
                  <li>• Fazendo a verificação da Bm no tik tok</li>
                  <li>• Subindo uma campanha de anúncios </li>
                  <li>• Protegendo seu dinheiro no tik tok </li>
                  <li>• Criando e instalando pixel</li>
                  <li>• Como fazer criativos</li>
                  <li>• Criando Públicos personalizados</li>
                  <li>• Acessando conta de terceiros</li>
                  <li>• Biblioteca de anúncios</li>
                  <li>• Criando catálogo de produtos</li>
                </ul>
              </div>
              <div className="mb-10 ">
                <h3
                  onClick={toggleList4}
                  className="flex items-center justify-between pb-3 mb-2 text-lg font-medium text-gray-900 dark:text-white border-b border-gray-700 cursor-pointer"
                >
                  <div className="flex items-center">
                    <Image
                      src="/taboola.png"
                      alt="logo facebook"
                      width="25"
                      height="25"
                    />
                    <p className="ml-2">Taboola Ads</p>
                  </div>
                  <div className="flex gap-5">
                    <p className="font-bold line-through text-red-600">
                      R$ 199,00
                    </p>

                    {open4 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        transform="rotate(90)"
                      >
                        <g id="_01_align_center" data-name="01 align center">
                          <path
                            d="M9.707,19.293v-14L16,11.586A1,1,0,0,1,16,13Z"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                      >
                        <g id="_01_align_center" data-name="01 align center">
                          <path
                            d="M9.707,19.293v-14L16,11.586A1,1,0,0,1,16,13Z"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                    )}
                  </div>
                </h3>

                <ul
                  style={{ display: open4 ? "block" : "none" }}
                  className=" text-gray-500 dark:text-gray-400"
                >
                  <p className="font-bold mb-3">
                    Um curso completo do zero ao avançado com{" "}
                    <span className="underline decoration-double ">
                      mais de 2 horas
                    </span>{" "}
                    de vídeo aulas
                  </p>
                  <li>• Conhecendo o Taboola</li>
                  <li>• Criando conta/ Dashboard</li>
                  <li>• Anúncio com Advertorial</li>
                  <li>• Como aprovar anúncios advertorial </li>
                  <li>• Pixel taboola </li>
                  <li>• Eventos de conversão</li>
                </ul>
              </div>
              <div className="">
                <h3
                  onClick={toggleList5}
                  className="flex items-center justify-between pb-3 mb-2 text-lg font-medium text-gray-900 dark:text-white border-b border-gray-700 cursor-pointer"
                >
                  <div className="flex items-center">
                    <Image
                      src="/pinterest.png"
                      alt="logo facebook"
                      width="25"
                      height="25"
                    />
                    <p className="ml-2">Pinterest Ads</p>
                  </div>
                  <div className="flex gap-5">
                    <p className="font-bold line-through text-red-600">
                      R$ 199,00
                    </p>

                    {open5 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        transform="rotate(90)"
                      >
                        <g id="_01_align_center" data-name="01 align center">
                          <path
                            d="M9.707,19.293v-14L16,11.586A1,1,0,0,1,16,13Z"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                      >
                        <g id="_01_align_center" data-name="01 align center">
                          <path
                            d="M9.707,19.293v-14L16,11.586A1,1,0,0,1,16,13Z"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                    )}
                  </div>
                </h3>

                <ul
                  style={{ display: open5 ? "block" : "none" }}
                  className=" text-gray-500 dark:text-gray-400"
                >
                  <p className="font-bold mb-3">
                    Um curso completo do zero ao avançado com{" "}
                    <span className="underline decoration-double ">
                      mais de 4 horas
                    </span>{" "}
                    de vídeo aulas
                  </p>
                  <li>• Introdução</li>
                  <li>• Aulão</li>
                  <li>• Audiência</li>
                  <li>• Conta profissional</li>
                  <li>• Pin </li>
                  <li>• Pin patrocinado</li>
                  <li>• Engajamento</li>
                  <li>• Criar público</li>
                  <li>• Remarketing</li>
                  <li>• Domínio</li>
                  <li>• TAG</li>
                  <li>• RCriativos que convertem</li>
                  <li>• Precificação de serviço</li>
                  <li>• Profissão gestor Pinterest</li>
                </ul>
              </div>
              <div className="mt-10 ">
                <h3
                  onClick={toggleList6}
                  className="flex items-center justify-between pb-3 mb-2 text-lg font-medium text-gray-900 dark:text-white border-b border-gray-700 cursor-pointer"
                >
                  <div className="flex items-center">
                    <Image
                      src="/zap.png"
                      alt="logo facebook"
                      width="25"
                      height="25"
                    />
                    <p className="ml-2">WhatsApp para vendas</p>
                  </div>
                  <div className="flex gap-5">
                    <p className="font-bold line-through text-red-600">
                      R$ 199,00
                    </p>

                    {open4 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        transform="rotate(90)"
                      >
                        <g id="_01_align_center" data-name="01 align center">
                          <path
                            d="M9.707,19.293v-14L16,11.586A1,1,0,0,1,16,13Z"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                      >
                        <g id="_01_align_center" data-name="01 align center">
                          <path
                            d="M9.707,19.293v-14L16,11.586A1,1,0,0,1,16,13Z"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                    )}
                  </div>
                </h3>

                <ul
                  style={{ display: open6 ? "block" : "none" }}
                  className=" text-gray-500 dark:text-gray-400"
                >
                  <p className="font-bold mb-3">
                    Um curso completo do zero ao avançado com{" "}
                    <span className="underline decoration-double ">
                      mais de 2 horas
                    </span>{" "}
                    de vídeo aulas
                  </p>
                  <li>• WhatsApp Business</li>
                  <li>• Quebra de Objeções</li>
                  <li>• Aúdios</li>
                  <li>• Oferta </li>
                  <li>• Catálogo de produtos</li>
                  <li>• Qualificação</li>
                  <li>• Guia de negócios</li>
                  <li>• Etiquetas</li>
                  <li>• Respostas rápidas</li>
                  <li>• Apresentação técnica</li>
                  <li>• Saudação</li>
                  <li>• Fúnil de vendas</li>
                  <li>• Provas sociais</li>
                  <li>• E muito mais...</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
