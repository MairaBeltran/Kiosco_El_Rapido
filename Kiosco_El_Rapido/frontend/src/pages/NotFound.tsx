import { Link } from "react-router-dom";

export const NotFound = () => (
  <div style={{ textAlign: "center", marginTop: "3rem" }}>
    <h1>404 - Pagina no encontrada</h1>
    <p>La ruta que buscas no existe.</p>
    <Link to="/">Volver al inicio</Link>
  </div>
);