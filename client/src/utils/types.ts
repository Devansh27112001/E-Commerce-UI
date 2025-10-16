import { ElementType, SVGProps } from "react";

export interface ProductDataType {
  id: number | string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
}

export interface CategoryDataType {
  name: string;
  icon?: React.ReactNode;
  slug: string;
}
