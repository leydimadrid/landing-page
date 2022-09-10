export const PortafolioDesarrolloWeb = ({titulo, descripcion, imagen}) => {
  return (

    
    <div className="flex justify-center">
        <div className="cajaTrabajosDesarrollo rounded-xl py-8 px-8 shadow-md mb-5 mx-5">
          <div className="cajaImagenPagWeb bg-white rounded-xl">
          <img className="rounded-xl" src={imagen} />
          </div>
          <p className="mt-4 mb-4 text-black">
            <span className="font-bold text-black">{titulo}</span> <br/>
            {descripcion}
          </p>
          <div className="flex justify-center">
          <input
          id="vistaPrevia"
          type="submit"
          value="Vista previa"
          className="botonVistayGitHub block font-bold rounded-full text-white p-2 px-5 cursor-pointer drop-shadow-xl mr-6"
        />
        <input
          id="gitHub"
          type="submit"
          value="GitHub"
          className="botonVistayGitHub block font-bold rounded-full text-white p-2 px-5 cursor-pointer drop-shadow-xl"
          
        />
        </div>
        </div>
      </div>
      
  )
}
