"use client";

import { useState, useEffect } from "react";
import Nav from "."; 
import { useLocale } from "next-intl";

export default function LocalizedNav() {
  const locale = useLocale();
  const [Content, setContent] = useState<any>(null);

  useEffect(() => {
    import(`./content/${locale}.mdx`).then((module) => {
      setContent(() => module.default); // assign default export as component
    });
  }, [locale]);

  if (!Content) return null; // or a loading skeleton

  return <Nav Content={Content} />;
}
