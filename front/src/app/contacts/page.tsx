import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type Contact = {
  id: string;
  name: string;
  email: string;
  phone: string;
  image: string;
};

const ContactCard = async () => {
  let contacts: Contact[] = [];
  const getContacts = async () => {
    const res = await fetch(`${process.env.API_URL}/contacts`, {
      cache: "no-cache",
    });
    const data = await res.json();
    console.log(data);
    contacts = data.contacts;
    return data;
  };
  await getContacts();

  return (
    <div className="flex flex-wrap p-10 gap-x-24 gap-y-16 padding-10 w-full justify-center">
      {contacts.map((contact) => (
        <Link key={contact.id} href={`/contacts/${contact.id}`}>
          <Card>
            <CardHeader className="p-0">
              <Image
                src={contact.image ?? "/profile.png"}
                alt={""}
                width={240}
                height={360}
                className="mx-auto"
              />
            </CardHeader>
            <CardContent className="pt-6">
              <CardTitle className="font-bold text-center">
                {contact.name}
              </CardTitle>
              <p className="text-center text-muted-foreground pt-6">
                {contact.email} <br />
                {contact.phone}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default ContactCard;

// let contacts = [
//   {
//     name: "Joshua Ong",
//     email: "someone@mail.com",
//     phone: "0000000000",
//     imageSrc:
//       "/woman.jpg",
//     imageAlt: "Joshua Ong",
//   },
//   {
//     name: "Evelyn Kim",
//     email: "someone@mail.com",
//     phone: "0000000000",
//     imageSrc:
//       "/woman.jpg",
//     imageAlt: "Evelyn Kim",
//   },
//   {
//     name: "Sean Kang",
//     email: "someone@mail.com",
//     phone: "0000000000",
//     imageSrc:
//       "/woman.jpg",
//     imageAlt: "Sean Kang",
//   },
//   {
//     name: "Joshua Yoon",
//     email: "someone@mail.com",
//     phone: "0000000000",
//     imageSrc:
//       "/woman.jpg",
//     imageAlt: "Joshua Yoon",
//   },
//   {
//     name: "Joshua Yoon",
//     email: "someone@mail.com",
//     phone: "0000000000",
//     imageSrc:
//       "/woman.jpg",
//     imageAlt: "Joshua Yoon",
//   },
//   {
//     name: "Joshua Yoon",
//     email: "someone@mail.com",
//     phone: "0000000000",
//     imageSrc:
//       "/woman.jpg",
//     imageAlt: "Joshua Yoon",
//   },
//   {
//     name: "Joshua Yoon",
//     email: "someone@mail.com",
//     phone: "0000000000",
//     imageSrc:
//       "/woman.jpg",
//     imageAlt: "Joshua Yoon",
//   },
// ];
