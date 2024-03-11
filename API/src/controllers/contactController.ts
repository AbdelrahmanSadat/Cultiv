import { Request, Response } from "express";
import { db } from "../../lib/db";
import { Contact } from "@prisma/client";

export const createContact = (req: CreateContactRequest, res: Response) => {
  const contact = db.contact.create({ data: req.body });
  res.status(201).send({ contact });
};

export const getContacts = async (req: Request, res: Response) => {
  const contacts = await db.contact.findMany();
  res.status(200).send({ contacts });
};

export const getContact = (req: Request, res: Response) => {
  const id = req.params.id;
  const contact = db.contact.findFirst({ where: { id } });
  res.status(200).send({ contact });
};

export const updateContact = (req: UpdateContactRequest, res: Response) => {
  const id = req.params.id;
  const contact = db.contact.update({ where: { id }, data: req.body });
  res.status(200).send({ contact });
};

export const deleteContact = (req: Request, res: Response) => {
  const id = req.params.id;
  const contact = db.contact.delete({ where: { id } });
  res.status(200).send({ contact });
};

export default {
  createContact,
  getContacts,
  getContact,
  updateContact,
  deleteContact,
};

interface CreateContactRequest extends Request {
  body: Contact;
}

interface UpdateContactRequest extends Request {
  body: Partial<Contact>;
}
