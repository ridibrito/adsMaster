import Image from "next/image";
import BtnComprar from "./btnComprar";

export default function PrecoCanva() {
  return (
    <>
      <div id="precoCanva" className="p-6">
        <div className="flex flex-col mt-12 p-6 lg:p-12  mx-auto max-w-lg text-center t  rounded-lg  shadow border-gray-600 xl:p-8 bg-gray-900 text-white">
          <div className="px-12">
            <hr />
          </div>
          <div className=" lg:min-h-[270px] max-w-lg p-6">
            <h2 className="mb-4 mt-6 lg:text-lg text-lg  tracking-tight font-normal  text-white text-center">
              Acesso imediato e vitalício ao <br />{" "}
              <span className="font-extrabold text-3xl text-violet-600">
                {" "}
                PACK ULTRA CANVA
              </span>
            </h2>
            <div className="border rounded-xl w-full px-2 py-3 lg:p-6 mx-auto">
              <p className="flex items-center text-xs justify-center">
                HOJE:{" "}
                <span className="lg:text-4xl text-2xl ml-4 font-bold">
                  R$ 9,00
                </span>
              </p>
            </div>
            <h2 className="mb-4 mt-6 lg:text-lg text-lg  tracking-tight font-normal  text-white ">
              É ISSO MESMO R$ 9,00
            </h2>
            <h2 className="mb-4 mt-6 lg:text-lg text-lg  tracking-tight font-normal  text-purple-500 ">
              Não é mensalidade!
            </h2>
            <h2 className="mb-4 mt-6 lg:text-lg text-lg  tracking-tight font-normal  text-violet-600 ">
              Só paga uma vez
            </h2>
          </div>
          <div className="px-12">
            <hr />
          </div>
          <div className="mt-6">
            <a
              href="https://pay.kiwify.com.br/v7xMbM9"
              className="inline-flex w-full lg:w-80 items-center justify-center px-5 py-3 text-base font-medium text-center  border border-violet-600 rounded-lg bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:ring-blue-100 text-white"
            >
              QUERO GARANTIR MEU ULTRA PACK
            </a>
          </div>
          <div className="mx-auto mt-6">
            <Image
              src="/segura.png"
              alt="compra segura"
              width="200"
              height="100"
            />
          </div>
        </div>
      </div>
    </>
  );
}
