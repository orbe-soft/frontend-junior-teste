import { z } from "zod";

export const searchSchema = z.object({
  searchName: z.string().min(2, "Digite pelo menos 2 (dois) caracteres."),
});
