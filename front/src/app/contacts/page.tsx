import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

type ContactCardProps = {
  name: string;
  email: string,
  phone: string,
  imageSrc: string;
  imageAlt: string;
};

let contacts: ContactCardProps[] = [
  {
    name: "Joshua Ong",
    email: "someone@mail.com",
    phone: "0000000000",
    imageSrc:
      "/woman.jpg",
    imageAlt: "Joshua Ong",
  },
  {
    name: "Evelyn Kim",
    email: "someone@mail.com",
    phone: "0000000000",
    imageSrc:
      "/woman.jpg",
    imageAlt: "Evelyn Kim",
  },
  {
    name: "Sean Kang",
    email: "someone@mail.com",
    phone: "0000000000",
    imageSrc:
      "/woman.jpg",
    imageAlt: "Sean Kang",
  },
  {
    name: "Joshua Yoon",
    email: "someone@mail.com",
    phone: "0000000000",
    imageSrc:
      "/woman.jpg",
    imageAlt: "Joshua Yoon",
  },
  {
    name: "Joshua Yoon",
    email: "someone@mail.com",
    phone: "0000000000",
    imageSrc:
      "/woman.jpg",
    imageAlt: "Joshua Yoon",
  },
  {
    name: "Joshua Yoon",
    email: "someone@mail.com",
    phone: "0000000000",
    imageSrc:
      "/woman.jpg",
    imageAlt: "Joshua Yoon",
  },
  {
    name: "Joshua Yoon",
    email: "someone@mail.com",
    phone: "0000000000",
    imageSrc:
      "/woman.jpg",
    imageAlt: "Joshua Yoon",
  },
];

const ContactCard = ({ name, imageSrc, imageAlt }: ContactCardProps) => {
  const getContacts = async () => {
    const res = await fetch("http://localhost:3001/contacts");
    console.log(res)
    const data = await res.json();
    console.log(data)
    return data;
  };
  getContacts();
  return (
    <div className="flex flex-wrap p-10 gap-x-24 gap-y-16 padding-10 w-full justify-center">
      {contacts.map((contact) => (
        <>
        <Card>
          <CardHeader className="p-0">
            <Image
              src={contact.imageSrc}
              alt={imageAlt}
              width={240}
              height={360}
              className="mx-auto"
            />
          </CardHeader>
          <CardContent className="pt-6">
            <CardTitle className="font-bold text-center">{contact.name}</CardTitle>
            <p className="text-center text-muted-foreground pt-6">  
              {contact.email} <br />
              {contact.phone}
            </p>

          </CardContent>
        </Card>
        </>
      ))}
    </div>
  );
};

export default ContactCard;
