export type Area = "A" | "B" | "C" | "D" | "E";

export type Product = {
  code: string;
  area: Area;
  category: string;
  price: number; // Final website price, inclusive of service charge.
  image?: string;
  size?: string;
  createdAt: string;
};

export type WebGroup = {
  slug: string;
  label: string;
  areas: Area[];
};
