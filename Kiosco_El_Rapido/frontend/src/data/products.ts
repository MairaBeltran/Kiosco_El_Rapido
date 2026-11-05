export type Category = "bebidas" | "snacks" | "golosinas" | "varios";

export interface Product {
  id: number;
  name: string;
  category: Category;
  price: number;
  stock: number;
  description: string;
  image?: string;
}
export const products: Product[] = [
  { id: 1, name: "Coca-Cola 500ml", category: "bebidas", price: 1200, stock: 25, description: "Gaseosa clasica" },
  { id: 2, name: "Agua mineral 500ml", category: "bebidas", price: 800, stock: 40, description: "Agua sin gas" },
  { id: 3, name: "Papas Lays Clasicas", category: "snacks", price: 1500, stock: 30, description: "Papas fritas clasicas" },
  { id: 4, name: "Alfajor Jorgito", category: "golosinas", price: 900, stock: 50, description: "Alfajor de chocolate" },
  { id: 5, name: "Chicles Beldent", category: "golosinas", price: 600, stock: 60, description: "Pack de chicles" },
  { id: 6, name: "Cigarrillos", category: "varios", price: 2500, stock: 20, description: "Atado de cigarrillos" },
  { id: 7, name: "Gatorade 500ml", category: "bebidas", price: 1800, stock: 15, description: "Bebida isotonica" },
  { id: 8, name: "Mani salado", category: "snacks", price: 1100, stock: 35, description: "Mani tostado con sal" },
];