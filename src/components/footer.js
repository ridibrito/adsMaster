import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="mx-auto p-4  md:p-8 lg:p-10 bg-gray-800">
        <div className="grid grid-cols-2 mx-auto max-w-screen-xl text-center">
          <div className="text-left text-gray-400">
            <Image
              src="/logo_png.png"
              alt="logo Adsmaster"
              width={200}
              height={30}
            />
            <div>
              <p className="mt-6">Atendimento ao cliente</p>
              <p className="">
                E-mail:{" "}
                <span className="font-normal">contato@adsmaster.com.br</span>
              </p>
              <p className="">
                WhatsApp: <span className="font-normal">(61) 9 9861-5656</span>
              </p>
            </div>
            <div className="mt-6">
              <p className="">Alb Soluções e Serviços LTDA</p>
              <p className="">
                CNPJ: <span className="font-normal">44.981.253/0001-69</span>
              </p>
            </div>
          </div>
          <div>
            <p className="my-6 mx-auto max-w-96  text-gray-400">
              Este site não é afiliado ao Facebook ou a qualquer entidade do
              Facebook. Depois que você sair do Facebook, a responsabilidade não
              é deles e sim do nosso site.
            </p>
            <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
              <li>
                <a
                  href="/politicasPrivacidade"
                  target="_blank"
                  className="mr-4 hover:underline md:mr-6 "
                >
                  Politicas de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="/termosCondicoes"
                  target="_blank"
                  className="mr-4 hover:underline md:mr-6"
                >
                  Termos de Uso
                </a>
              </li>
            </ul>
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024 Ads Master. Todos os diretos reservados.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
