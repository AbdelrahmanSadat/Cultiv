import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

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
    contacts = data.contacts;
    return data;
  };
  await getContacts();

  return (
    <div className="flex flex-wrap p-10 px-16 gap-x-24 gap-y-16 w-full justify-between">
      <div className="w-full flex justify-between">
        <div></div>
        <div><Link href="/contacts/create"><FaPlus/></Link></div>
      </div>
      {contacts.map((contact) => (
        <Link key={contact.id} href={`/contacts/${contact.id}`}>
          <Card>
            <CardHeader className="p-0 h-[240px]">
              <Image
                src={contact.image ?? "/profile.png"}
                alt={""}
                width={240}
                height={0}
                sizes="100vw"
                className="mx-auto object-cover h-full"
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
