import paginaPersonal from "../assets/paginaPersonal.png";

export const PortafolioDesarrolloWeb = () => {
  return (

    
    <div className="flex justify-center">
        <div className="cajaTrabajosDesarrollo rounded-xl py-8 px-8 drop-shadow-md mb-5 mx-5">
          <div className="cajaImagenPagWeb bg-white rounded-xl">
          <img className="rounded-xl" src={paginaPersonal} />
          </div>
          <p className="mt-4 mb-4 text-black">
            <span className="font-bold text-black">Título de la página</span> <br/>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic
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
