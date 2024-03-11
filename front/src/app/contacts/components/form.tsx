"use client";

import { createContact } from "@/actions";
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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name required",
  }),
  email: z.string().email({ message: "Invalid email address" }).optional(),
  phone: z.union([z.string(), z.number()]).pipe(z.coerce.string()),
});

export default function ContactForm(props: {
  contact: { name?: string; email?: string; phone?: string };
  type: "create" | "update";
}) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: props.contact.name,
      email: props.contact.email,
      phone: props.contact.phone,
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
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
