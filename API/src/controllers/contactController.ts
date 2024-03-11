import { Request, Response } from "express";
import { db } from "../../lib/db";
import { Contact } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export const createContact = async (
  req: CreateContactRequest,
  res: Response
) => {
  try {
    const contact = await db.contact.create({
      // todo: createdBy is set to same user until auth is added
      data: { ...req.body, createdBy: "1" },
    });
    res.status(201).send({ contact });
  } catch (e) {
    if (e instanceof PrismaClientKnownRequestError) {
      // todo?: send proper message for bad (non-unique) request data
      return res.status(400).send({ error: e.message });
    }
    console.log(e);
    res.status(500).send({ error: e });
  }
};

export const getContacts = async (req: Request, res: Response) => {
  const contacts = await db.contact.findMany();
  res.status(200).send({ contacts });
};

export const getContact = async (req: Request, res: Response) => {
  const id = req.params.id;
  const contact = await db.contact.findFirst({ where: { id } });
  res.status(200).send({ contact });
};

export const updateContact = async (
  req: UpdateContactRequest,
  res: Response
) => {
  try {
    const id = req.params.id;
    const contact = await db.contact.update({ where: { id }, data: req.body });
    res.status(200).send({ contact });
  } catch (e) {
    if (e instanceof PrismaClientKnownRequestError) {
      // todo?: send proper message for bad (non-unique) request data
      return res.status(400).send({ error: e.message });
    }
    console.log(e);
    res.status(500).send({ error: e });
  }
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
