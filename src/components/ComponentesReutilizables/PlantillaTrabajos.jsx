export const PlantillaTrabajos = ({ titulo, descripcion, imagen }) => {
  return (
    <div className="flex justify-center">
      <div className="cajaTrabajosDesarrollo bg-gray-300 rounded-xl py-8 px-8 shadow-md mb-5 mx-5">
        <div className="cajaImagenPagWeb bg-white rounded-xl">
          <img className="rounded-xl shadow-md" src={imagen} />
        </div>
        <p className="mt-4 mb-4 text-black">
          <span className="font-bold text-black">{titulo}</span> <br />
          {descripcion}
        </p>
        <div className="flex justify-center">
        <a href="https://www.behance.net/SaromaDG" target="_blank">
            <button
              id="gitHub"
              className="botonVistayGitHub block font-bold rounded-full text-white p-2 px-5 cursor-pointer drop-shadow-xl"
            >Vista previa</button>
          </a>

          <a href="https://www.behance.net/SaromaDG" target="_blank">
            <button
              id="gitHub"
              className="botonVistayGitHub block font-bold rounded-full text-white p-2 px-5 cursor-pointer drop-shadow-xl ml-6"
            >GitHub</button>
          </a>
        </div>
      </div>
    </div>
  );
};
