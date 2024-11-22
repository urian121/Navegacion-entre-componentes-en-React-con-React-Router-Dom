import { Link } from "react-router-dom";
import productos from "../assets/productos.json";

const Productos = () => {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul className="list-group list-group-flush">
        {productos.map((producto) => (
          <li className="list-group-item" key={producto.id}>
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <Link
              className="btn btn-info"
              to={`/detalle-producto/${producto.id}`}
            >
              Detalles <i className="bi bi-arrow-up-right"></i>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;
