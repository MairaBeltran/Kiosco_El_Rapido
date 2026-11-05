import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

export const Header = () => {
  const cartContext: any = useCart ? useCart() : { cart: [] };
  const cart = cartContext?.cart || [];
  const location = useLocation();
  const totalItems = cart.reduce((acc: number, item: any) => acc + (item.quantity || 0), 0);
  const isActive = (path: string) => location.pathname === path;
  return (
    <header
      style={{
        position: "sticky",
        top: "0.3rem",
        zIndex: 50,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "0 1rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "840px",
          backgroundColor: "#2e1065", 
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.25)",
          boxShadow: "0 -12px 25px rgba(49, 5, 74, 0.99)",
          padding: "0.6rem 1.2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            fontSize: "1.2rem",
            fontWeight: "800",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span>🛒</span> Kiosco El Rapido
        </Link>
        <nav style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              padding: "0.35rem 0.75rem",
              borderRadius: "8px",
              fontSize: "0.85rem",
              fontWeight: isActive("/") ? "700" : "500",
              borderBottom: isActive("/") ? "2px solid white" : "2px solid transparent",
            }}
          >
            Inicio
          </Link>
          <Link
            to="/products"
            style={{
              color: "white",
              textDecoration: "none",
              padding: "0.35rem 0.75rem",
              borderRadius: "8px",
              fontSize: "0.85rem",
              fontWeight: isActive("/products") ? "700" : "500",
              borderBottom: isActive("/products") ? "2px solid white" : "2px solid transparent",
            }}
          >
            Productos
          </Link>
          <Link
            to="/cart"
            style={{
              color: "white",
              textDecoration: "none",
              padding: "0.35rem 0.75rem",
              borderRadius: "8px",
              fontSize: "0.85rem",
              fontWeight: isActive("/cart") ? "700" : "500",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              borderBottom: isActive("/cart") ? "2px solid white" : "2px solid transparent",
            }}
          >
            Carrito
            {totalItems > 0 && (
              <span
                style={{
                  background: "#ef4444",
                  color: "white",
                  fontSize: "0.7rem",
                  fontWeight: "800",
                  padding: "0.1rem 0.4rem",
                  borderRadius: "9999px",
                }}
              >
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};