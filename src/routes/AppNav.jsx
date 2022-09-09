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
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/sobremi" element={<SobreMi />}/>
        <Route path="/habilidades" element={<Habilidades />}/>
        <Route path="/estudios" element={<Estudios />}/>
        <Route path="/experiencia" element={<Experiencia />}/>
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/contactame" element={<Contactame />} />
      </Routes>
    </div>
  );
};

export default AppNav;
