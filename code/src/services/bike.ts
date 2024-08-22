import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

if (!BASE_URL) {
  throw new Error("BASE_URL não está definido");
}

interface QueryParams {
  id?: string;
  page?: number;
  order?: "ASC" | "DESC";
  limit?: number;
  name?: string;
  brand?: string;
}

const buildQueryString = (params: QueryParams) => {
  const query = new URLSearchParams(params as any).toString();
  return query ? `?${query}` : "";
};

export const getAllBikes = async (
  queryParams: QueryParams = { limit: 10, page: 1, order: "ASC" }
) => {
  try {
    const queryString = buildQueryString(queryParams);
    const response = await axios.get(`${BASE_URL}${queryString}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter bicicletas:", error);
    throw error;
  }
};

export const getSingleBike = async (id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter bicicleta pelo ID:", error);
    throw error;
  }
};

export const getByBrand = async (queryParams: QueryParams) => {
  try {
    const queryString = buildQueryString(queryParams);
    const response = await axios.get(`${BASE_URL}${queryString}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter bicicletas por marca:", error);
    throw error;
  }
};

export const getByName = async ({ name, order }: QueryParams) => {
  try {
    const queryString = buildQueryString({ name, order });
    const response = await axios.get(`${BASE_URL}${queryString}`);
    return response.data;
  } catch (err) {
    console.error("Erro ao obter bicicletas por nome:", err);
    throw err;
  }
};
