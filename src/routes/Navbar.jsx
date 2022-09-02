import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <div>
    <Link className=" text-white my-2" to="/inicio">Inicio</Link>
    <Link className=" text-white mx-2 my-2" to="/perfil">Perfil</Link>
    <Link className=" text-white mx-2 my-2" to="/habilidades">Habilidades</Link>
    <Link className=" text-white mx-2 my-2" to="/estudios">Estudios</Link>
    <Link className=" text-white mx-2 my-2" to="/experiencia">Experiencia</Link>
    </div>
  )
}