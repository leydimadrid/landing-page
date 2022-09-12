
import logoSaroma from '../assets/logo-saroma.svg';
import { NavBar } from '../routes/Navbar';
import { Link } from 'react-scroll';

export const Header = () => {
  return (
    <div className="header w-full h-12 fixed">
      <div className="float-left my-3 ml-6">
          <a href="/inicio">
          <img src={logoSaroma} className="w-24 my-1 rounded-md" />
          </a>
      </div>
      <div className="float-right my-3 mr-1">
      <nav className="nav__container__actions">
          <ul>
          <li className="cursor-pointer">
              <Link activeClass="active" smooth spy to="inicio">
                Inicio
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link activeClass="active" smooth spy to="sobremi">
                Sobre mi
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link activeClass="active" smooth spy to="habilidades">
                Habilidades
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link activeClass="active" smooth spy to="estudios">
                Estudios
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link activeClass="active" smooth spy to="experiencia">
                Experiencia
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link activeClass="active" smooth spy to="portafolio">
                Portafolio
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link activeClass="active" smooth spy to="contacto">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
