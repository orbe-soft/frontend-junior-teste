import { z } from "zod";

// Aqui nesse arquivo, encontrei um problema que não consegui resolver, ao utilizar o schema no arquivo Bike.ts, para validar os dados obtidos da api, os dados eram logados normalmente, sem nenhum aviso de erro, ou falha na validação, mas os cards das bicicletas não eram exibidos, pelo curto tempo desde que tentei implementar, não consegui avançar muito na solução desse problema

const ImageSchema = z.object({
  id: z.string(),
  url: z.string(),
  order_id: z.string(),
  images: z.array(z.string().url()).optional(),
});

export const BikeSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  brand: z.string(),
  price: z.number(),
  images: z.array(ImageSchema),
  quantity: z.number().optional()
});

const PaginationSchema = z.object({
  currentPage: z.number(),
  lastPage: z.number(),
  total: z.number(),
  limit: z.number(),
});

export const BikesApiResponseSchema = z.object({
  content: z.array(BikeSchema),
  pagination: PaginationSchema,
});

