"use server";



export const createContact = async (data: any) => {
  const res = await fetch(`${process.env.API_URL}/contacts`, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log("res", res)
  if (!res.ok) {
    const error = await res.json();
    // todo? propagate error to UI
    throw new Error(`${res.status} ${res.statusText}.`);
  }
  const contact = await res.json();
  console.log("contact", contact)
  return contact
};
