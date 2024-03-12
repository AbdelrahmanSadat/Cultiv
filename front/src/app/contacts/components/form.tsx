"use client";

import { createContact, updateContact } from "@/actions";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name required",
  }),
  email: z.string().email({ message: "Invalid email address" }).optional().nullable(),
  phone: z.union([z.string(), z.number()]).pipe(z.coerce.string()),
  image: z.string().optional().nullable(),
});

export default function ContactForm(props: {
  contact: { name?: string; email?: string; phone?: string; image?: string };
  type: "create" | "update";
  id?: string;
}) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: props.contact.name,
      email: props.contact.email,
      phone: props.contact.phone,
      image: props.contact.image,
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    if (props.type === "create") {
      const contact = await createContact(data).catch((err) => {
        console.log(err);
        toast({
          title: "Error",
          variant: "destructive",
          description: `${err.message ?? err}`,
        });
      });
      if (contact) {
        toast({
          title: "Success",
          description: "Contact created",
        });
      }
    } else if (props.type === "update") {
      const contact = await updateContact(data, props.id!).catch((err) => {
        console.log(err);
        toast({
          title: "Error",
          variant: "destructive",
          description: `${err.message ?? err}`,
        });
      });
      if (contact) {
        toast({
          title: "Success",
          description: "Contact updated",
        });
      }
    }
  };

  return (
    <div className="py-16 px-24 flex flex-wrap justify-between gap-56">
      <div className="flex-grow">
        <Image
          src={props.contact.image ?? "/profile.png"}
          alt=""
          width={240}
          height={0}
          className="mx-auto object-cover w-full"
        >

        </Image>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex-grow">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="name" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="0123456789" {...field} />
                </FormControl>
                <FormDescription>This is your phone number.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="user@example.com" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public email address.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image Link</FormLabel>
                <FormControl>
                  <Input placeholder="https://example.com/image" {...field} />
                </FormControl>
                <FormDescription>
                  Link to your profile image (until image upload is implemented)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
