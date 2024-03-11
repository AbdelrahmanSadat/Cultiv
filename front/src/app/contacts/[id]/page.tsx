import ContactForm from "./form";


export default async function Contact({ params }: { params: { id: string } }) {

    const getContact = async()=>{
        const res = await fetch(`${process.env.API_URL}/contacts/${params.id}`, {cache: "no-cache"});
        const data = await res.json();
        console.log(data);
        return data
    }

    const contact = await getContact()

    return (
    <div className="w-full">
      <div>
        <ContactForm {...contact} />
      </div>
    </div>
  )
}
