import logoSaroma from "../assets/logo-saroma.svg";
import { Link } from "react-scroll";

export const Header = () => {
  return (
    <div className="header w-full md:w-full fixed md:flex md:justify-between block">
      <a  href="/inicio">
        <img src={logoSaroma} className="w-20 md:w-24 my-4 ml-4" />
      </a>

      <nav className=" my-4 mr-1">
        <ul className="md:flex md:text-base text-md text-center">
          <li className="cursor-pointer text-white hover:underline mx-3">
            <Link activeClass="active" smooth spy to="inicio">
              Inicio
            </Link>
          </li>
          <li className="cursor-pointer  text-white hover:underline mx-3">
            <Link activeClass="active" smooth spy to="sobremi">
              Sobre mi
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
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
