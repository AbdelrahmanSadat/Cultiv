import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(1).max(50),
  email: z.string().email().min(1),
  password: z.string().min(8).max(30),
});
