import { Routes, Route } from "react-router-dom";

import { NavBar } from "./NavBar";

export const AppNav = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/*" />
        <Route path="/inicio" />
        <Route path="/perfil" />
        <Route path="/habilidades" />
        <Route path="/estudios" />
        <Route path="/experiencia" />
      </Routes>
    </div>
  );
};

export default AppNav;
