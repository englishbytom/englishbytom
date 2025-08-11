import { ClassCards } from "@/components/classCards"
import { ClassDetailCard } from "@/components/classDetailCard"
import { FAQ } from "@/components/faq"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, MessageCircle, Lightbulb, DollarSign, CheckCircle, Book, Laptop } from "lucide-react"

export default function GroupClass() {
  return (
    <>
      <section className="section">
        <h3 className="h3">Detalles</h3>
        <p>
          Las clases grupales son una forma dinámica, accesible y motivadora de mejorar tu inglés junto a otras personas con intereses similares. Los grupos son reducidos para que cada estudiante tenga tiempo real de hablar, practicar, y recibir correcciones. Nos enfocamos en la conversación, la fluidez y en usar el idioma de forma práctica desde el primer día. No necesitás tener un nivel alto: hay grupos para distintos niveles, desde principiante hasta avanzado.
        </p>
        <p><b>Costo: </b>$40.000 ARS por mes (4 clases)</p>
        <DetailCards />
        <Button asChild variant="yellow" className="w-fit">
          <Link href="/contacto" >Consultame</Link>
        </Button>
      </section>
      <section className="section">
        <h3 className="h3">Otras tipos de clases</h3>
        <ClassCards types={["unt", "individuales"]} />
      </section>
      <section className="section">
        <h3 className="h3">Preguntas Frecuentes</h3>
  <FAQ types={["grupales"]} />
      </section>

    </>
  )
}

const DetailCards = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-4 w-full">
      <ClassDetailCard
        icon={<Users size={30} />}
        text={`Grupos reducidos`}
      />
      <ClassDetailCard
        icon={<MessageCircle size={30} />}
        text={`Enfoque en conversación`}
      />
      <ClassDetailCard
        icon={<Lightbulb size={30} />}
        text={`Temas útiles y actuales`}
      />
      <ClassDetailCard
        icon={<DollarSign size={30} />}
        text={`Bajo costo por clase`}
      />
      <ClassDetailCard
        icon={<CheckCircle size={30} />}
        text={`Corrección activa`}
      />
      <ClassDetailCard
        icon={<Book size={30} />}
        text={`Material incluido`}
      />
      <ClassDetailCard
        icon={<Laptop size={30} />}
        text={`100% online`}
      />
    </div>

  )
}