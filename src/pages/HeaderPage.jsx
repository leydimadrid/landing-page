import logoSaroma from "../assets/logo-saroma.svg";
import { useTranslation } from "react-i18next";

import { NavBar } from "../components/NavBar";

export const HeaderPage = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <header className="header w-full md:w-full fixed md:flex md:justify-between block">
      <a href="#inicio">
        <img src={logoSaroma} className="w-20 md:w-24 my-4 ml-4" />
      </a>
      <NavBar />
      <div className="my-auto mx-2">
      <button onClick={() => i18n.changeLanguage("es")} className="w-8 h-8 bg-white rounded-lg font-semibold">ES</button>
      <button onClick={() => i18n.changeLanguage("en")} className="w-8 h-8 bg-white rounded-lg font-semibold">EN</button>
      </div>
    </header>
  );
};
