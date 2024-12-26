import "./App.css";
import Header from "./componentes/header/Header";
import Footer from "./componentes/footer/Footer";
import Seccion from "./componentes/secccion/Seccion";
import Menu from "./componentes/menu/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListaCasas from "./componentes/casas/ListaCasas";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Menu />
        <main>
          <Routes>
            <Route path="/" element={<Seccion />} />
            <Route path="/casas" element={<ListaCasas />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
