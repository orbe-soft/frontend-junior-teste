export interface BikeProps {
  id: string;
  name: string;
  description: string;
  brand: string;
  price: number;
  images: string[];
  quantity?: number
}

export interface ImageProps {
  id: string;
  url: string;
  order_id: string;
}
