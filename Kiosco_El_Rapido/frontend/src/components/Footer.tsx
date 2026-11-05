export const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "0 1rem",
        marginTop: "3rem",
        marginBottom: "2rem",
        background: "transparent", 
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          background: "#1e1b4b", 
          color: "#9ca3af",
          fontSize: "0.85rem",
          textAlign: "center",
          padding: "1rem 1.2rem",
          borderRadius: "12px", 
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p style={{ margin: 0, fontWeight: "500" }}>Kiosco El Rapido – 2026</p>
      </div>
    </footer>
  );
};