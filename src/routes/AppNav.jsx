import { Routes, Route } from "react-router-dom";

import { NavBar } from "./NavBar";

export const AppNav = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/*" />
        <Route path="/inicio" />
        <Route path="/sobremi" />
        <Route path="/habilidades" />
        <Route path="/estudios" />
        <Route path="/experiencia" />
        <Route path="/portafolio" />
        <Route path="/contactame" />
      </Routes>
    </div>
  );
};

export default AppNav;
