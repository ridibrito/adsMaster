import Image from "next/image";

export default function PrecoRedusido() {
  return (
    <>
      <div className="p-6">
        <div className="flex flex-col mt-12 p-6 lg:p-12  mx-auto max-w-lg text-center t  rounded-lg  shadow border-gray-600 xl:p-8 bg-gray-900 text-white">
          <div className="flex items-center justify-center mb-6 ">
            <Image
              src="/logo_png.png"
              alt="logo facebook"
              width="200"
              height="300"
            />
          </div>
          <div className="px-12">
            <hr />
          </div>
          <div className=" lg:min-h-[270px] max-w-lg p-6">
            <h2 className="mb-4 mt-6 lg:text-lg text-lg  tracking-tight font-normal text-gray-900 dark:text-white ">
              VALOR TOTAL: R$ 0000,000
            </h2>
            <div className="border rounded-xl p-2 py-3 lg:p-6 mx-au">
              <p className="flex items-center  justify-center">
                HOJE: 12X DE{" "}
                <span className="lg:text-4xl text-2xl ml-4 font-bold">
                  R$ 14,76
                </span>
              </p>
            </div>
            <h2 className="mb-4 mt-6 lg:text-lg text-lg  tracking-tight font-normal text-gray-900 dark:text-white ">
              OU R$ 147,00 Á VISTA
            </h2>
          </div>
          <div className="px-12">
            <hr />
          </div>
          <div className="mt-6">
            <a
              href="https://pay.kiwify.com.br/HbFhJK4"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center  border border-green-600 rounded-lg bg-[#008a37] hover:bg-[#008a37c5] focus:ring-4 focus:ring-blue-100 text-white"
            >
              EU QUERO SER UM ADS MASTER
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
