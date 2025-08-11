"use client"

import Image from 'next/image'
import BannerImg from './banner.jpg'
import Link from 'next/link';
import { Button } from './ui/button';
import { usePathname } from "next/navigation";
import { useTranslations } from 'next-intl';

export default function Banner() {

  const t = useTranslations('Banner');
  const pathname = usePathname();

  // Strip locale from path
  const segments = pathname.split("/");
  const pathWithoutLocale = "/" + segments.slice(2).join("/");
  const normalizedPath = pathWithoutLocale === "/" ? "/" : pathWithoutLocale;

  type BannerContent = {
    title: any;
    subtitle: string;
    buttonText: string | null;
  };

  const bannerContentByPath: Record<string, BannerContent> = {
    "/": {
      title: t('home.title'),
      subtitle: t('home.subtitle'),
      buttonText: t('home.button')
    },
    "/sobre": {
      title: "Tom Frame",
      subtitle: "Profesor de inglés",
      buttonText: null,
    },
    "/contacto": {
      title: "Contacto",
      subtitle: "Escribime tu consulta y nos contactaremos a la brevedad",
      buttonText: null,
    },
    "/cursos-grupales": {
      title: "Cursos Grupales",
      subtitle: "Mejorar tu inglés junto a otras personas",
      buttonText: null,
    },
    "/cursos-para-la-unt": {
      title: "Cursos para la UNT",
      subtitle: "Clases enfocadas en reforzar lo que ves en clase",
      buttonText: null,
    },
    "/clases-individuales": {
      title: "Clases Individuales",
      subtitle: "Las clases se adaptan completamente a tus objetivos",
      buttonText: null,
    },
    "/blog/*": {
      title: "Blog",
      subtitle: "Ideas, consejos y recursos para acompañarte en tu camino con el inglés",
      buttonText: null,
    },
    // fallback
    default: {
      title: "Lográ tus objetivos de inglés",
      subtitle: "Ya seas estudiante o profesional, estoy para ayudarte a avanzar",
      buttonText: null,
    },
  };

  function getBannerContent(path: string) {
    if (bannerContentByPath[path]) {
      return bannerContentByPath[path];
    }
    if (path.startsWith("/blog/") || path === "/blog") {
      return bannerContentByPath["/blog/*"];
    }
    return bannerContentByPath.default;
  }

  const { title, subtitle, buttonText } = getBannerContent(normalizedPath);

  return (
    <div className="relative flex responsive-container px-2! md:px-8! h-fit items-center justify-center">
      <Image
        src={BannerImg}
        style={{ objectFit: "cover" }}
        className="opacity-15 rounded-md"
        sizes="100vw"
        fill
        alt="Students at university"
      />
      <div className='z-40 flex flex-col gap-4 responsive-container py-8'>
        <div className='flex flex-col gap-0.5 md:gap-1'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>{title}</h1>
          <h2 className='text-lg md:text-xl'>{subtitle}</h2>
        </div>
        {buttonText &&
          <Button asChild variant="yellow" className="w-fit">
            <Link href="/contacto" >{buttonText}</Link>
          </Button>
        }
      </div>
    </div>
  )
}