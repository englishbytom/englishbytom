import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, CalendarCheck2, GraduationCap, User, Edit } from "lucide-react";

import { useTranslations } from "next-intl";

const cardData = [
  {
    id: "grupales",
    link: "/cursos-grupales",
    title: "Cursos Grupales",
    text: "Clases dinámicas, accesibles y motivadoras de mejorar tu inglés junto a otras personas con intereses similares.",
    title_icon: <Users color="black" size={24} />,
    note_icon: <CalendarCheck2 color="#5E5E5E" size={16} />,
    note: "Nuevos grupos cada semana",
  },
  {
    id: "unt",
    link: "/cursos-para-la-unt",
    title: "Cursos para la UNT",
    text: "Estas clases son enfocadas en reforzar lo que ves en clase, pero en un entorno más práctico y participativo.",
    title_icon: <GraduationCap color="black" size={24} />,
    note_icon: <Edit color="#5E5E5E" size={16} />,
    note: "Contenidos alineados con la facultad",
  },
  {
    id: "individuales",
    link: "/clases-individuales",
    title: "Clases Individuales",
    text: "Se adaptan completamente a tus objetivos: ya sea mejorar la conversación, preparar un examen...",
    title_icon: <User color="black" size={24} />,
    note_icon: <CalendarCheck2 color="#5E5E5E" size={16} />,
    note: "Horario flexible",
  },
];

export const ClassCards = ({
  title = ["1", "2"],
  types = ["grupales", "unt", "individuales"],
}: {
  types?: string[];
  title?: string[];
}) => {
  const filteredCards = cardData.filter((card) => types.includes(card.id));

  const t = useTranslations("ClassCards");

  return (
    <section className="section">
      <h2>{title[0] === "1" ? t("title") : t("title2")}</h2>
      <div className="flex flex-col lg:flex-row gap-4 w-full">
        {filteredCards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

const Card = ({
  title,
  text,
  link,
  title_icon,
  note_icon,
  note,
}: {
  title: string;
  text: string;
  link: string;
  title_icon: React.ReactNode;
  note_icon: React.ReactNode;
  note: string;
}) => {
  return (
    <div className="flex flex-col bg-primary-card rounded-md px-4 py-4 w-full gap-y-4 justify-between">
      <div className="flex flex-col gap-y-2">
        <div className="flex flex-row gap-x-2">
          {title_icon}
          <h4 className="prose-h4:m-4!">{title}</h4>
        </div>
        <small>{text}</small>
        <div className="flex flex-row gap-x-2 items-center">
          {note_icon}
          <small className="text-[#5E5E5E] text-sm">{note}</small>
        </div>
      </div>
      <Button asChild className="w-fit">
        <Link href={link}>Saber más</Link>
      </Button>
    </div>
  );
};
