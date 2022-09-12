import { TituloPaginas } from "./ComponentesReutilizables/TituloPaginas";

export const Contacto = () => {
  return (
    <div id="contacto" className="contacto">
      <TituloPaginas titulo="Contacto" />
      <div className="flex justify-center ">
        <form className="formulario rounded-xl py-8 px-8 mb-5 mx-5">
          <label className="block font-medium text-white mb-2">
            Nombre completo
          </label>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            className="w-full rounded-lg px-3 py-2 mb-6 border-none"
          />
          <label className="block font-medium text-white mb-2">
            Correo electrónico
          </label>
          <input
            type="text"
            placeholder="Ingresa tu correo"
            className="w-full rounded-lg px-3 py-2 mb-6"
          />
          <label className="block font-medium text-white mb-2">
            Número de contacto
          </label>
          <input
            type="text"
            placeholder="Ingresa tu contacto"
            className="w-full rounded-lg px-3 py-2 mb-6"
          />
          <label className="block font-medium  text-white mb-2">Mensaje</label>
          <textarea
            type="text"
            placeholder="Escribe tu mensaje"
            className="w-full rounded-lg px-3 py-2 mb-4"
          ></textarea>
          <div className="flex justify-center mt-4">
            <input
              id="enviar"
              type="submit"
              value="Enviar mensaje"
              className="enviarMensaje block font-bold rounded-lg p-3 px-8 cursor-pointer shadow-xl w-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
