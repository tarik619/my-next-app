"use client";

import { CartContextProvider } from "@/hooks/useCart";
import React from "react";

interface CartProviderProps {
  children: React.ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  return <CartContextProvider className="">{children}</CartContextProvider>;
};

export default CartProvider;
