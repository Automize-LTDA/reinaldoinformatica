export interface Product {
  id: string;
  name: string;
  category: string;
  rating: number;
  price: number;
  oldPrice?: number;
  discount?: number;
  image: string;
  inStock: boolean;
  description: string;
  isPromotion?: boolean;
  isFeatured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string; // Dynamic icon reference
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Dynamic icon reference
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface BuildPart {
  id: string;
  name: string;
  price: number;
  category?: string; // made optional since parts are grouped in a Record
  specs?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  role?: string;
}
