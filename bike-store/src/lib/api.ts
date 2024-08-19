import axios from "axios";

export const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    "https://api-frontend-test.orbesoft.com.br/api",
});

export default api;
