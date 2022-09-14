export const PlantillaTrabajosWeb = ({ titulo, descripcion, imagen, urlvistaprevia, urlgithub }) => {
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
          <a
            href={urlvistaprevia}
            target="_blank"
            id="vistaprevia"
            className="botonVistayGitHub block font-bold rounded-full text-white p-2 px-5 cursor-pointer shadow-xl"
          >
            Vista previa
          </a>

          <a
            href={urlgithub}
            target="_blank"
            id="gitHub"
            className="botonVistayGitHub block font-bold rounded-full text-white p-2 px-5 cursor-pointer shadow-xl ml-6"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
