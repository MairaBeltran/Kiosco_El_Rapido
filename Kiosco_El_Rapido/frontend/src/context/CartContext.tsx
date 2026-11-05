import React, { createContext, useContext, useState } from "react";
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
export interface CartItemType {
  product: Product;
  quantity: number;
}
interface CartContextType {
  items: CartItemType[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}
const CartContext = createContext<CartContextType | undefined>(undefined);
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItemType[]>([]);
  const addToCart = (product: Product, quantity: number = 1) => {
    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      }
      return [...prevItems, { product, quantity }];
    });
  };
  const removeFromCart = (productId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
  };
  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };
  const clearCart = () => setItems([]);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart debe usarse dentro de un CartProvider");
  return context;
};