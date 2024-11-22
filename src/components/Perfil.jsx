import { Link } from "react-router-dom";

const Perfil = () => {
  return (
    <>
      <p>Estas en la página de Perfil</p>
      <Link className="btn btn-light" to="/acerca-de">
        Ir a la página de Acerca De <i className="bi bi-arrow-right"></i>
      </Link>
    </>
  );
};

export default Perfil;
