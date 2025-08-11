import { ClassCards } from "@/components/classCards";
import { ClassDetailCard } from "@/components/classDetailCard";
import { FAQ } from "@/components/faq"
import { Button } from "@/components/ui/button"
import { Brush, ThumbsUp, CalendarRange, Laptop, Book } from "lucide-react"
import Link from "next/link"

export default function IndividualClass() {
  return (
    <>
      <section className="section">
        <h3 className="h3">Detalles</h3>
        <p>
          Ofrezco clases individuales para todos los niveles, desde principiantes hasta avanzados. Las clases se adaptan completamente a tus objetivos: ya sea mejorar la conversación, preparar un examen, practicar entrevistas de trabajo, escribir mails profesionales o avanzar con vocabulario específico de tu área (negocios, derecho, medicina, etc).
        </p>
        <p><b>Costo: </b>$25.000 ARS por hora</p>
        <DetailCards />
        <Button asChild variant="yellow" className="w-fit">
          <Link href="/contacto" >Consultame</Link>
        </Button>
      </section>
      <section className="section">
        <h3 className="h3">Otras tipos de clases</h3>
        <ClassCards types={["unt", "grupales"]} />
      </section>
      <section className="section">
        <h3 className="h3">Preguntas Frecuentes</h3>
        <FAQ types={["individuales"]} />
      </section>

    </>
  )
}

const DetailCards = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-4 w-full">
      <ClassDetailCard
        icon={<Brush size={30} />}
        text={`100% personalizada`}
      />
      <ClassDetailCard
        icon={<ThumbsUp size={30} />}
        text={`Consulta gratuita`}
      />
      <ClassDetailCard
        icon={<CalendarRange size={30} />}
        text={`Horario flexible`}
      />
      <ClassDetailCard
        icon={<Laptop size={30} />}
        text={`100% online`}
      />
      <ClassDetailCard
        icon={<Book size={30} />}
        text={`Material incluido`}
      />
    </div>

  )
}

