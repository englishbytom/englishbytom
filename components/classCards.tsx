import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, CalendarCheck2, GraduationCap, User, Edit, TrafficCone } from "lucide-react";

import { useTranslations } from "next-intl";

const cardData = [
  // {
  //   id: "grupales",
  //   link: "/cursos-grupales",
  //   title: "Cursos Grupales",
  //   text: "Clases dinámicas, accesibles y motivadoras de mejorar tu inglés junto a otras personas con intereses similares.",
  //   title_icon: <Users color="black" size={24} />,
  //   note_icon: <CalendarCheck2 color="#5E5E5E" size={16} />,
  //   note: "Nuevos grupos cada semana",
  // },
  // {
  //   id: "unt",
  //   link: "/cursos-para-la-unt",
  //   title: "Cursos para la UNT",
  //   text: "Estas clases son enfocadas en reforzar lo que ves en clase, pero en un entorno más práctico y participativo.",
  //   title_icon: <GraduationCap color="black" size={24} />,
  //   note_icon: <Edit color="#5E5E5E" size={16} />,
  //   note: "Contenidos alineados con la facultad",
  // },
  {
    id: "individual",
    link: "/classes/individual",
    title: "Individual Classes",
    text: "I offer individual classes for all levels, from beginners to advanced. Classes are fully tailored to your goals: whether it's improving your conversation skills, preparing for an exam, practicing job interviews, writing professional emails, or improving your vocabulary specific to your field (business, law, medicine, etc.).",
    title_icon: <User color="black" size={24} />,
    note_icon: <CalendarCheck2 color="#5E5E5E" size={16} />,
    note: "Flexible schedule",
  },
];

export const ClassCards = ({
  // title = ["1", "2"],
  types = ["individual"],
    // types = ["grupales", "unt", "individuales"],
}: {
  types?: string[];
  // title?: string[];
}) => {
  const filteredCards = cardData.filter((card) => types.includes(card.id));

  // const t = useTranslations("ClassCards");

  return (
    <div className="container-fluid">
      <h2>Types of classes</h2>
      <div className="flex flex-col gap-4 w-full items-center">
        {filteredCards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
      {/* <div className="flex flex-row justify-center items-center gap-4 pt-8">
        <TrafficCone color="#5E5E5E" size={20} />
        <span>More classes coming soon</span>
      </div> */}
      
    </div>
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
    <div className="flex flex-col bg-gray-100 border-1 rounded-md px-4 py-4 gap-4! w-full sm:max-w-full md:max-w-2xl lg:max-w-3xl self-center gap-y-4 justify-between">
      <div className="flex flex-col gap-y-2">
        <div className="flex flex-row gap-x-2 prose-h4:m-0!">
          {title_icon}
          <h4>{title}</h4>
        </div>
        <p className="line-clamp-3">{text}</p>
        <div className="flex flex-row gap-x-2 items-center">
          {note_icon}
          <small className="text-[#5E5E5E] text-sm">{note}</small>
        </div>
      </div>
      <Button asChild className="w-fit">
        <Link href={link}>Learn more</Link>
      </Button>
    </div>
  );
};
