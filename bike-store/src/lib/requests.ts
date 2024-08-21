export const req = {
  product: "/products",
  productAll: "/products?limit=9999",
  byId: (id: string) => `/products/${id}`,
  filterPage: (page: number) => `/products?page=${page}`,
  filterOrder: (order: string) => `/products?order=${order}`,
  filterName: (name: string) => `/products?name=${name}`,
  filterBrand: (brand: string) => `/products?brand=${brand}`,

  fiterOrderBrand: (order: string, brand: string) =>
    `/products?order=${order}&brand=${brand}`,

  filterOrderPage: (order: string, page: number) =>
    `/products?order=${order}&page=${page}`,
  filterOrderPageBrand: (order: string, page: number, brand: string) =>
    `/products?order=${order}&page=${page}&brand=${brand}`,
};
