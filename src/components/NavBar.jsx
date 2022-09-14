import { Link } from "react-scroll";

export const NavBar = () => {
  return (
    <>
      <nav className=" my-4 mr-1">
        <ul className="md:flex md:text-base text-lg text-center">
          <li className="cursor-pointer text-white hover:underline mx-3">
            <Link activeClass="active" smooth spy to="inicio">
              Inicio
            </Link>
          </li>
          <li className="cursor-pointer  text-white hover:underline mx-3">
            <Link activeClass="active" smooth spy to="sobremi">
              Sobre mí
            </Link>
          </li>
          <li className="cursor-pointer  text-white hover:underline mx-3">
            <Link activeClass="active" smooth spy to="habilidades">
              Habilidades
            </Link>
          </li>
          <li className="cursor-pointer  text-white hover:underline mx-3">
            <Link activeClass="active" smooth spy to="estudios">
              Estudios
            </Link>
          </li>
          <li className="cursor-pointer  text-white hover:underline mx-3">
            <Link activeClass="active" smooth spy to="experiencia">
              Experiencia
            </Link>
          </li>
          <li className="cursor-pointer  text-white hover:underline mx-3">
            <Link activeClass="active" smooth spy to="portafolio">
              Portafolio
            </Link>
          </li>
          <li className="cursor-pointer text-white hover:underline mx-3">
            <Link activeClass="active" smooth spy to="contacto">
              Contáctame
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
