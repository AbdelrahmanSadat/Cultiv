import ContactForm from "../components/form";


export default async function Contact({ params }: { params: { id: string } }) {




    return (
    <div className="w-full">
      <div>
        <ContactForm contact={{}} type="create"/>
      </div>
    </div>
  )
}
