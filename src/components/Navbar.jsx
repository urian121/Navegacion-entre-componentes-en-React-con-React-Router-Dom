import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import Perfil from "./Perfil";
import Productos from "./Productos";
import AcercaDe from "./AcercaDe";
import Inicio from "./Inicio";
import DetallesProducto from "./DetallesProducto";
import NotFound from "./NotFound";

const Navbar = () => {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navegación
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    Inicio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/acerca-de"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    Acerca De
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/mi-perfil"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    Perfil
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/mis-productos"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    Productos
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/acerca-de" element={<AcercaDe />} />
                <Route path="/mis-productos" element={<Productos />} />
                <Route
                  path="/detalle-producto/:productoId"
                  element={<DetallesProducto />}
                />
                <Route path="/mi-perfil" element={<Perfil />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Navbar;
