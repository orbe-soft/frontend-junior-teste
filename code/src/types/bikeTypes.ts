import { UrlObject } from "url";

export interface BikeProps {
  id: string;
  name: string;
  description: string;
  brand: string;
  price: number;
  images: ImageProps[];
  quantity?: number | undefined
}

export interface ImageProps {
  id: string;
  url: string;
  order_id: string;
  images: UrlObject[] | string[]
}
