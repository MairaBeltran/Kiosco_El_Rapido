const BASE_URL = "http://127.0.0.1:8000/api";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  description?: string;
}
export interface OrderItem {
  product_id: number;
  quantity: number;
}
export const getProducts = async (category?: string): Promise<Product[]> => {
  const url = category ? `${BASE_URL}/products?category=${category}` : `${BASE_URL}/products`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Error al obtener la lista de productos");
  return res.json();
};
export const getProductById = async (id: number): Promise<Product> => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  if (!res.ok) throw new Error("Producto no encontrado o error de servidor");
  return res.json();
};
export const createOrder = async (items: OrderItem[]) => {
  const res = await fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items }),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.detail || "Error al procesar la compra");
  }
  return data;
};