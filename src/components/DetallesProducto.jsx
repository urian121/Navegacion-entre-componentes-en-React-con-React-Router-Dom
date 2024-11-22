import { useParams, useNavigate } from "react-router-dom";
import productos from "../assets/productos.json"; // Importa los productos desde el archivo JSON

const DetallesProducto = () => {
  // Obtén el parámetro productoId de la URL
  const { productoId } = useParams();
  const navigate = useNavigate(); // Hook para navegar

  const handleBack = () => {
    navigate(-1); // Esto lleva al usuario a la página anterior
  };

  // Encuentra el producto que coincida con el productoId
  const producto = productos.find((prod) => prod.id === parseInt(productoId));

  // Si el producto no se encuentra, muestra un mensaje de error
  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div>
      <h2>
        Detalles del Producto <hr />
      </h2>
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <p>
        Precio: <span className="fw-bold"> ${producto.precio}</span>
      </p>

      <button className="btn btn-primary" onClick={handleBack}>
        <i className="bi bi-arrow-left"></i> Atrás
      </button>
    </div>
  );
};

export default DetallesProducto;
