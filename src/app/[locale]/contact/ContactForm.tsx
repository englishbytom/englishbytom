"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import useWeb3Forms from "@web3forms/react";
import { useState } from "react";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  class: string;
  level: string;
  message: string;
  "h-captcha-response": string;
};

export type ContactFormProps = {
  title: string;
  placeholders: { firstName: string; lastName: string; email: string; telephone: string };
  selectOptions: {
    class: { value: string; label: string }[];
    level: { value: string; label: string }[];
  };
  submitButton: string;
  successMessage: string;
  errorMessage: string;
};

export default function ContactForm(props: ContactFormProps) {
  const formSchema = z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    email: z.email(),
    telephone: z.string().min(10),
    class: z.string().nonempty(),
    level: z.string().nonempty(),
    message: z.string().max(600),
    "h-captcha-response": z.string().nonempty(),
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      telephone: "",
      class: "",
      level: "",
      message: "",
      "h-captcha-response": "",
    },
  });

  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const { submit } = useWeb3Forms({
    access_key: "597c551f-db35-46cf-87ea-621745939468",
    settings: {
      from_name: "English by Tom",
      subject: "Nuevo mensaje del formulario",
    },
    onSuccess: () => {
      setIsSuccess(true);
      form.reset();
    },
    onError: () => setIsSuccess(false),
  });

  const handleSubmit = (data: FormValues) => submit(data);
  const onHCaptchaChange = (token: string) =>
    form.setValue("h-captcha-response", token, { shouldValidate: true });

  return (
    <section className="section">
      <h2>{props.title}</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="border p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
        >
          {/* Text Inputs */}
          <FormField
            name="firstName"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={props.placeholders.firstName}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="lastName"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={props.placeholders.lastName}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder={props.placeholders.email} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="telephone"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={props.placeholders.telephone}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Select Inputs */}
          <FormField
            name="class"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select class" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {props.selectOptions.class.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="level"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {props.selectOptions.level.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Textarea */}
          <FormField
            name="message"
            control={form.control}
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormControl>
                  <Textarea placeholder="Message" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Captcha */}
          <FormField
            name="h-captcha-response"
            control={form.control}
            render={() => (
              <FormItem className="sm:col-span-2">
                <HCaptcha
                  sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                  reCaptchaCompat={false}
                  onVerify={onHCaptchaChange}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit */}
          <div className="flex flex-row items-center gap-4 sm:col-span-2">
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {props.submitButton}
            </Button>
            {isSuccess === true && (
              <p className="text-sm text-green-600">{props.successMessage}</p>
            )}
            {isSuccess === false && (
              <p className="text-sm text-red-600">{props.errorMessage}</p>
            )}
          </div>
        </form>
      </Form>
    </section>
  );
}
