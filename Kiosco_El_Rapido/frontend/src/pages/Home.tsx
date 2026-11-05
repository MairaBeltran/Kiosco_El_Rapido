import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "1rem auto", padding: "0 1rem", textAlign: "center" }}>
      <div
        style={{
          background: "linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)",
          color: "white",
          padding: "1.5rem 1.2rem",
          borderRadius: "14px",
          boxShadow: "0 6px 20px rgba(124, 58, 237, 0.2)",
        }}
      >
        <span
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            padding: "0.2rem 0.6rem",
            borderRadius: "9999px",
            fontSize: "0.7rem",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          Bienvenido a tu punto de confianza
        </span>
        <h1 style={{ fontSize: "1.6rem", fontWeight: "800", margin: "0.4rem 0" }}>
          Todo lo que buscas, al instante 🛒
        </h1>
        <p style={{ fontSize: "0.9rem", maxWidth: "480px", margin: "0 auto 1rem auto", opacity: "0.9", lineHeight: "1.3" }}>
          Encontra bebidas bien frias, golosinas y snacks de forma rapida, facil y sin hacer filas.
        </p>
        <div style={{ display: "flex", gap: "0.8rem", justifyContent: "center" }}>
          <Link
            to="/products"
            style={{
              background: "white",
              color: "#7c3aed",
              padding: "0.5rem 1.2rem",
              borderRadius: "6px",
              fontWeight: "700",
              textDecoration: "none",
              fontSize: "0.85rem",
              boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
            }}
          >
            Ver Catalogo 🛍️
          </Link>
          <Link
            to="/cart"
            style={{
              background: "rgba(255, 255, 255, 0.15)",
              color: "white",
              padding: "0.5rem 1.2rem",
              borderRadius: "6px",
              fontWeight: "700",
              textDecoration: "none",
              fontSize: "0.85rem",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            Ver Carrito 🛒
          </Link>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "0.8rem",
          marginTop: "1rem",
        }}
      >
        <div style={{ background: "white", padding: "1rem", borderRadius: "8px", border: "1px solid #e5e7eb", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
          <h3 style={{ fontSize: "0.95rem", fontWeight: "700", color: "#1f2937", marginBottom: "0.2rem" }}>⚡ Pedidos al Instante</h3>
          <p style={{ color: "#6b7280", fontSize: "0.8rem", margin: 0 }}>Armá tu carrito en segundos y retirá tu pedido sin esperas.</p>
        </div>
        <div style={{ background: "white", padding: "1rem", borderRadius: "8px", border: "1px solid #e5e7eb", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
          <h3 style={{ fontSize: "0.95rem", fontWeight: "700", color: "#1f2937", marginBottom: "0.2rem" }}>🍫 Gran Variedad</h3>
          <p style={{ color: "#6b7280", fontSize: "0.8rem", margin: 0 }}>Stock actualizado de golosinas, bebidas y snacks todos los días.</p>
        </div>
        <div style={{ background: "white", padding: "1rem", borderRadius: "8px", border: "1px solid #e5e7eb", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
          <h3 style={{ fontSize: "0.95rem", fontWeight: "700", color: "#1f2937", marginBottom: "0.2rem" }}>🛡️ Compra Confiable</h3>
          <p style={{ color: "#6b7280", fontSize: "0.8rem", margin: 0 }}>Sistema transparente con validación de stock en tiempo real.</p>
        </div>
      </div>
    </div>
  );
};