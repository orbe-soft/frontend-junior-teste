import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

if (!BASE_URL) {
  throw new Error("BASE_URL não está definido");
}

interface QueryParams {
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

export const getSingleBike = async (id: QueryParams) => {
  try {
    const response = await axios.get(`${BASE_URL}/id=${id}`);
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

export const getByName = async(name: QueryParams)=>{
  try{
    const response = await axios.get(`${BASE_URL}?name=${name}`)
    return response.data
  } catch(err){
    console.error(err)
  }
}
