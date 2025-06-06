// src/types/product.ts

export interface Product {
  id: number;
  img: string;
  images: string[];
  title: string;
  name?: string;
  rating: string;
  priceOld: number;
  discount: string;
  price: number;
  category: string;
}

export interface ProductCardProps {
  product: Product;
}
