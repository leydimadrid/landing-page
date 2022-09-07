export const Contactame = () => {
  return (
    <div className="contactame">
      <div className=" text-black text-2xl font-black text-center underline pt-5 mb-5">
        Contáctame
      </div>
      <div className="flex justify-center">
        <div className="formulario rounded-xl py-8 px-8 drop-shadow-md mb-5 mx-5">
          <label className="block font-medium text-gray-900 uppercase mb-2">
            Nombre completo
          </label>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            className="w-full rounded-xl px-3 py-2 mb-2"
          />
          <label className="block font-medium text-gray-900 uppercase mb-2">
            Correo electrónico
          </label>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            className="w-full rounded-xl px-3 py-2 mb-2"
          />
          <label className="block font-medium  text-gray-900 uppercase mb-2">
            Número de contacto
          </label>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            className="w-full rounded-xl px-3 py-2 mb-2"
          />
          <label className="block font-medium  text-gray-900 uppercase mb-2">
            Mensaje
          </label>
          <textarea
            type="text"
            placeholder="Ingresa tu nombre"
            className="w-full rounded-xl px-3 py-2"
          >
          </textarea>
          <div className="flex justify-center mt-4">
          <input
          id="enviar"
          type="submit"
          value="Enviar Mensaje"
          className="enviarMensaje block font-bold rounded-full p-2 px-5 cursor-pointer drop-shadow-xl"
        />
        </div>

        </div>
      </div>
    </div>
  );
};
