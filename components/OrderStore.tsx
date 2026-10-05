"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Product } from "@/lib/types";

export type OrderItem = Product & { note: string };

type OrderContextValue = {
  items: OrderItem[];
  add: (product: Product) => void;
  remove: (code: string) => void;
  setNote: (code: string, note: string) => void;
  clear: () => void;
  has: (code: string) => boolean;
};

const OrderContext = createContext<OrderContextValue | null>(null);
const KEY = "japan-finds-order-list";

export function OrderStore({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<OrderItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch {}
  }, [items]);

  const value = useMemo<OrderContextValue>(() => ({
    items,
    add: (product) => setItems((current) =>
      current.some((x) => x.code === product.code)
        ? current
        : [...current, { ...product, note: "" }]
    ),
    remove: (code) => setItems((current) => current.filter((x) => x.code !== code)),
    setNote: (code, note) => setItems((current) => current.map((x) => x.code === code ? { ...x, note } : x)),
    clear: () => setItems([]),
    has: (code) => items.some((x) => x.code === code),
  }), [items]);

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}

export function useOrderStore() {
  const value = useContext(OrderContext);
  if (!value) throw new Error("useOrderStore must be used inside OrderStore");
  return value;
}
