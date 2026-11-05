import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import { useCart } from "../context/CartContext";

export const Products = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar productos:", err);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "4rem", fontSize: "1.2rem", color: "#6b7280" }}>
        Cargando productos del kiosco... 🔄
      </div>
    );
  }
  return (
    <div style={{ maxWidth: "1200px", margin: "2rem auto", padding: "0 1.5rem" }}>
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#1f2937", marginBottom: "0.5rem" }}>
          Catalogo de Productos
        </h1>
        <p style={{ color: "#4b5563", fontSize: "1.1rem" }}>
          Elige tus productos favoritos y agregalos al carrito para armar tu pedido.
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              background: "white",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
              border: "1px solid #e5e7eb",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "hidden",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.05)";
            }}
          >
            <div style={{ padding: "1.5rem" }}>
              <span
                style={{
                  display: "inline-block",
                  padding: "0.25rem 0.75rem",
                  fontSize: "0.75rem",
                  fontWeight: "700",
                  color: "#6d28d9",
                  background: "#f3e8ff",
                  borderRadius: "9999px",
                  marginBottom: "0.75rem",
                  textTransform: "uppercase",
                }}
              >
                {product.category}
              </span>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#111827", marginBottom: "0.5rem" }}>
                {product.name}
              </h3>
              <p style={{ color: "#6b7280", fontSize: "0.9rem", lineHeight: "1.4", marginBottom: "1rem" }}>
                {product.description}
              </p>
              <p style={{ color: "#374151", fontSize: "0.85rem", fontWeight: "600" }}>
                Stock disponible: <span style={{ color: product.stock > 0 ? "#059669" : "#dc2626" }}>{product.stock} un.</span>
              </p>
            </div>
            <div
              style={{
                padding: "1rem 1.5rem",
                background: "#f9fafb",
                borderTop: "1px solid #f3f4f6",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontSize: "1.35rem", fontWeight: "800", color: "#111827" }}>
                ${product.price}
              </span>
              <button
                onClick={() => addToCart(product, 1)}
                style={{
                  background: "#7c3aed",
                  color: "white",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "8px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#6d28d9")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#7c3aed")}
              >
                Agregar 🛒
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};