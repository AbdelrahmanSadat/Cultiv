import express from "express";
import contactController from "../controllers/contactController";
import { validate } from "../../middleware/validate";
import { idObjectSchema } from "../../lib/validations/common";
import {
  createContactSchema,
  updateContactSchema,
} from "../../lib/validations/contact";

export const contactRouter = express.Router();

contactRouter.get("contacts", contactController.getContacts);

contactRouter.post(
  "contacts",
  validate(createContactSchema, "body"),
  contactController.createContact
);

contactRouter.get(
  "contacts/:id",
  validate(idObjectSchema, "params"),
  contactController.getContact
);

contactRouter.delete(
  "contacts/:id",
  validate(idObjectSchema, "params"),
  contactController.deleteContact
);

contactRouter.put(
  "contacts/:id",
  validate(idObjectSchema, "params"),
  validate(updateContactSchema, "body"),
  contactController.updateContact
);
