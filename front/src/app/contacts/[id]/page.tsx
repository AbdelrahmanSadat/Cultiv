import ContactForm from "../components/form";


export default async function Contact({ params }: { params: { id: string } }) {

    const getContact = async()=>{
        const res = await fetch(`${process.env.API_URL}/contacts/${params.id}`, {cache: "no-cache"});
        const data = await res.json();
        console.log("let data por la edit", data);
        return data.contact
    }

    const contact = await getContact()
    const {name, email, phone, image} = contact

    return (
    <div className="w-full">
      <div>
        <ContactForm contact={{name, email, phone, image}} type="update"/>
      </div>
    </div>
  )
}
