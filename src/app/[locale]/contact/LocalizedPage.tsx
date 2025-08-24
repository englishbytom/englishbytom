"use client";
// import { useLocale } from "next-intl";
import { useState, useEffect } from "react";
import ContactForm, { ContactFormProps } from "./ContactForm";
import { content } from "./content/en"

export default function LocalizedPage() {
  // const locale = useLocale();
  // const [content, setContent] = useState<ContactFormProps | null>(null);

  // useEffect(() => {
  //   import(`./content/${locale}.mdx`).then((module) => {
  //     setContent(module.default);
  //   });
  // }, [locale]);

  return <ContactForm {...content}  />
}
