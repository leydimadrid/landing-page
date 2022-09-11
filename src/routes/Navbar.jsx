import { Link } from "react-router-dom"

export const NavBar = () => {

  

  return (
    <div>
    
    <Link className=" text-white mx-3 my-2 hover:underline" to="/inicio"  >Inicio</Link>
    <Link className=" text-white mx-3 my-2 hover:underline" to="#sobremi">Sobre mí</Link>
    {/* <Link className=" text-white mx-3 my-2 hover:underline" to="/habilidades">Habilidades</Link>
    <Link className=" text-white mx-3 my-2 hover:underline" to="/estudios">Estudios</Link>
    <Link className=" text-white mx-3 my-2 hover:underline" to="/experiencia">Experiencia</Link> */}
    {/* <Link className=" text-white mx-3 my-2 hover:underline" to="/portafolio">Portafolio</Link>
    <Link className=" text-white mx-3 my-2 hover:underline" to="/contactame">Contáctame</Link> */}
    </div>
  )
}