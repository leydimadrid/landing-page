import logoSaroma from "../assets/logo-saroma.svg";

import { NavBar } from "../components/NavBar";

export const HeaderPage = () => {
  return (
    <header className="header w-full md:w-full fixed md:flex md:justify-between block">
      <a href="/inicio">
        <img src={logoSaroma} className="w-20 md:w-24 my-4 ml-4" />
      </a>
      <NavBar />
    </header>
  );
};
