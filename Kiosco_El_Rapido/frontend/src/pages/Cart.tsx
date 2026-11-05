import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { createOrder } from "../services/api";

export const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart() as any;
  const [submitting, setSubmitting] = useState(false);
  const [orderError, setOrderError] = useState<string | null>(null);
  const [orderSuccess, setOrderSuccess] = useState<boolean>(false);
  const handleCheckout = async () => {
    setSubmitting(true);
    setOrderError(null);
    setOrderSuccess(false);
    try {
      const orderItems = items.map((item: any) => ({
        product_id: item.product.id,
        quantity: item.quantity,
      }));
      await createOrder(orderItems);
      setOrderSuccess(true);
      clearCart();
    } catch (err: any) {
      setOrderError(err.message || "Error al procesar el pedido. Verifica el stock.");
    } finally {
      setSubmitting(false);
    }
  };
  if (!items || items.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        {orderSuccess ? (
          <div style={{ background: "#dcfce7", color: "#166534", padding: "1.5rem", borderRadius: "12px", maxWidth: "500px", margin: "0 auto 1.5rem auto" }}>
            <h2>🎉 ¡Pedido realizado con exito!</h2>
            <p>Tu orden ha sido enviada al backend y el stock fue actualizado.</p>
          </div>
        ) : (
          <h2>El carrito esta vacio</h2>
        )}
        <Link to="/products">Volver al catalogo</Link>
      </div>
    );
  }
  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto", padding: "0 1rem" }}>
      <h1>Carrito de Compras</h1>
      {orderError && (
        <div style={{ background: "#fee2e2", color: "#991b1b", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}>
          ⚠️ {orderError}
        </div>
      )}
      {items.map((item: any) => (
        <div
          key={item.product?.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "white",
            padding: "1rem",
            borderRadius: "8px",
            marginBottom: "0.8rem",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
          }}
        >
          <div>
            <h3 style={{ margin: "0 0 0.3rem 0" }}>{item.product?.name}</h3>
            <p style={{ margin: 0, color: "#666" }}>${item.product?.price} c/u</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.product?.id, Number(e.target.value))}
              style={{ width: "50px", padding: "0.4rem", textAlign: "center" }}
            />
            <span><strong>${(item.product?.price || 0) * item.quantity}</strong></span>
            <button onClick={() => removeFromCart(item.product?.id)} style={{ background: "#ef4444", color: "white", border: "none", padding: "0.4rem 0.8rem", borderRadius: "4px", cursor: "pointer" }}>
              Eliminar
            </button>
          </div>
        </div>
      ))}

      <div style={{ textAlign: "right", marginTop: "1.5rem" }}>
        <h2>Total: ${totalPrice}</h2>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "flex-end", marginTop: "1rem" }}>
          <button onClick={clearCart} style={{ background: "#6b7280", color: "white", border: "none", padding: "0.6rem 1.2rem", borderRadius: "6px", cursor: "pointer" }}>
            Vaciar Carrito
          </button>
          <button onClick={handleCheckout} disabled={submitting} style={{ background: "#7c3aed", color: "white", border: "none", padding: "0.6rem 1.2rem", borderRadius: "6px", cursor: "pointer" }}>
            {submitting ? "Procesando..." : "Finalizar pedido"}
          </button>
        </div>
      </div>
    </div>
  );
};