export interface Product {
  _id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  color: Color;
  images: string[];
}

export interface Billboard {
  _id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  _id: string;
  name: string;
  billboard: Billboard;
}

export interface Size {
  _id: string;
  name: string;
  value: string;
}

export interface Color {
  _id: string;
  name: string;
  value: string;
}
