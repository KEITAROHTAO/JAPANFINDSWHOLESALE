export type Area = "A" | "B" | "C" | "D" | "E";

export type Product = {
  code: string;
  area: Area;
  category: string;
  price: number; // Website final price including service charge.
  image?: string;
  size?: string;
  createdAt: string;
  status?: string;
};

export type WebGroup = {
  slug: string;
  label: string;
  areas: Area[];
};
