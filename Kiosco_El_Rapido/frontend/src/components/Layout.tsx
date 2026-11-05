import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = () => (
  <div>
    <Header />
    <main style={{ padding: "2rem", minHeight: "70vh" }}>
      <Outlet />
    </main>
    <Footer />
  </div>
);