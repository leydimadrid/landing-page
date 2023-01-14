import { HeaderPage } from "./pages/HeaderPage";
import { InicioPage } from "./pages/InicioPage";
import { SobreMiPage } from "./pages/SobreMiPage";
import { HabilidadesPage } from "./pages/HabilidadesPage";
import { EstudiosPage } from "./pages/EstudiosPage";
import { ExperienciaPage } from "./pages/ExperienciaPage";
import { PortafolioPage } from "./pages/PortafolioPage";
import { Footer } from "./components/Footer";
import { ContactamePage } from "./pages/ContactamePage";
import { useTranslation } from "react-i18next";

function App() {
  const {t} = useTranslation()
  return (
    <div>
      <HeaderPage />
      <InicioPage/>
      <SobreMiPage />
      <HabilidadesPage />
      <EstudiosPage />
      <ExperienciaPage />
      <PortafolioPage />
      <ContactamePage />
      <Footer />
    </div>
  );
}

export default App;
