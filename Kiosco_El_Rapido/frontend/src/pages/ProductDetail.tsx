import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { getProductById } from "../services/api";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  description?: string;
}
export const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (!id) return;
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getProductById(Number(id));
        setProduct(data as Product);
      } catch (err: any) {
        setError(err.message || "Error al cargar la información del producto.");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);
  if (loading) return <div style={{ textAlign: "center", margin: "3rem" }}>Cargando detalle del producto...</div>;
  if (error || !product) {
    return (
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <h2>⚠️ {error || "Producto no encontrado"}</h2>
        <Link to="/products">Volver al catalogo</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", background: "white", padding: "2.5rem", borderRadius: "16px", boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }}>
      <Link to="/products" style={{ textDecoration: "none", color: "#7c3aed", fontWeight: "bold" }}>← Volver al catálogo</Link>
      
      <h1 style={{ marginTop: "1rem", color: "#333" }}>{product.name}</h1>
      <span style={{ background: "#7c3aed", color: "white", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.9rem", fontWeight: "bold", textTransform: "uppercase" }}>
        {product.category}
      </span>
      
      <p style={{ fontSize: "1.1rem", color: "#666", margin: "1.5rem 0" }}>{product.description || "Sin descripción disponible."}</p>
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #eee", borderBottom: "1px solid #eee", padding: "1rem 0", margin: "1rem 0" }}>
        <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#7c3aed" }}>Precio: ${product.price}</span>
        <span style={{ color: "#555" }}>Stock disponible: <strong>{product.stock}</strong></span>
      </div>
      
      <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginTop: "1.5rem" }}>
        <input
          type="number"
          min="1"
          max={product.stock}
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
          style={{ width: "60px", padding: "0.6rem", textAlign: "center", fontSize: "1rem", borderRadius: "8px", border: "1px solid #ccc" }}
        />
        <button onClick={() => addToCart(product as any, quantity)} style={{ flex: 1, padding: "0.8rem", fontSize: "1rem" }}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};