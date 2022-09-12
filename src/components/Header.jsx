
import logoSaroma from '../assets/logo-saroma.svg';
import { NavBar } from '../routes/Navbar';

export const Header = () => {
  return (
    <div className="header w-full h-12 fixed">
      <div className="float-left my-3 ml-6">
          <a href="/inicio">
          <img src={logoSaroma} className="w-24 my-1 rounded-md" />
          </a>
      </div>
      <div className="float-right my-3 mr-1">
        <NavBar />
      </div>
    </div>
  );
};
