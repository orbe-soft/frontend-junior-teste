type Image = {
  id: string;
  url: string;
  order_id: string;
};

type Bike = {
  id: string;
  name: string;
  description: string;
  brand: string;
  price: number;
  images: Image[];
};

type Pagination = {
  currentPage: number;
  lastPage: number;
  limit: number;
  total: number;
};

type ApiResponse = {
  content: Bike[];
  pagination: Pagination;
};

export type { ApiResponse, Bike };
