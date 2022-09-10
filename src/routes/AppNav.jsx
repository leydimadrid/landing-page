import { Routes, Route } from "react-router-dom";
import { Inicio } from "../components/Inicio";
import { SobreMi } from "../components/SobreMi";
import { Estudios } from "../components/Estudios";
import { Experiencia } from "../components/Experiencia";
import { Habilidades } from "../components/Habilidades";
import { Portafolio } from "../components/Portafolio";
import { Contactame } from "../components/Contactame";
import { NavBar } from "./NavBar";


export const AppNav = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/*" />
        <Route path="#inicio" />
        <Route path="/sobremi" />
        <Route path="/habilidades" />
        <Route path="/estudios" />
        <Route path="/experiencia" />
        <Route path="/portafolio"  />
        <Route path="/contactame"  />
      </Routes>
    </div>
  );
};

export default AppNav;
