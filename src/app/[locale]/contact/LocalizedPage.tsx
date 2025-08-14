"use client";
import { useLocale } from "next-intl";
import { useState, useEffect } from "react";
import ContactForm, { ContactFormProps } from "./ContactForm";

export default function LocalizedPage() {
  const locale = useLocale();
  const [content, setContent] = useState<ContactFormProps | null>(null);

  useEffect(() => {
    import(`./content/${locale}.mdx`).then((module) => {
      setContent(module.default || module.formContent);
    });
  }, [locale]);

  return content ? <ContactForm {...content}  /> : <p>Loading...</p>;
}
