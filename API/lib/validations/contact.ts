import { z } from "zod";

export const createContactSchema = z.object({
  name: z.string().min(1).max(50),
  phone: z.string().min(1).max(20),
  email: z.string().email().min(1).optional(),
  image: z.string().min(1).optional(),
});

export const updateContactSchema = z.object({
  name: z.string().min(1).max(50).optional(),
  email: z.string().email().min(1).optional().nullable(),
  phone: z.string().min(1).max(20).optional(),
  image: z.string().min(1).optional().nullable(),
});

