import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const validate = (
  schema: z.ZodSchema<any>,
  location: "body" | "query" | "params"
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req[location];
    const result = schema.safeParse(data);

    if (!result.success) {
      res.status(400).send({
        error: true,
        message: result.error.issues.map((issue) => issue.message).join(", "),
      });
    } else {
      //   Object.assign(location === "body" ? req.body : req.query, result.data);
      next();
    }
  };
};
