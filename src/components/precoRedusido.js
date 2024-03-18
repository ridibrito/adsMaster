import Image from "next/image";
import BtnComprar from "./btnComprar";

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
            <h2 className="mb-4 mt-6 lg:text-lg text-lg  tracking-tight font-normal  text-white text-center">
              Todos os produtos daria mais de <br />{" "}
              <span className="font-extrabold text-3xl line-through">
                {" "}
                R$ 2.064,00
              </span>
            </h2>
            <div className="border rounded-xl w-full px-2 py-3 lg:p-6 mx-auto">
              <p className="flex items-center text-xs justify-center">
                HOJE: 12X DE{" "}
                <span className="lg:text-4xl text-2xl ml-4 font-bold">
                  R$ 9,74
                </span>
              </p>
            </div>
            <h2 className="mb-4 mt-6 lg:text-lg text-lg  tracking-tight font-normal  text-white ">
              OU R$ 97,00 Á VISTA
            </h2>
          </div>
          <div className="px-12">
            <hr />
          </div>
          <div className="mt-6">
            <BtnComprar />
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
