import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ({
  title,
  items,
}: {
  title: string;
  items: FAQItem[];
}) {
  return (
    <>
      <h3 className="h3">{title}</h3>
      <Accordion type="single" collapsible className="w-full sm:max-w-full md:max-w-2xl lg:max-w-3xl self-center">
        {items.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
