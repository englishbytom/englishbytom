import { ClassCards } from "@/components/classCards"
import { ClassDetailCard } from "@/components/classDetailCard"
import { FAQ } from "@/components/faq"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, MessageCircle, Lightbulb, ClipboardPenLine, CheckCircle, Book, Laptop } from "lucide-react"

export default function UntClass() {
  return (
    <>
      <section className="section">
        <h3 className="h3">Detalles</h3>
        <p>
         Estas clases están diseñadas especialmente para estudiantes de la Universidad Nacional de Tucumán que necesitan apoyo extra con las materias de inglés de la facultad. Nos enfocamos en explicar los temas gramaticales que suelen generar más dudas, practicar los contenidos que se ven en clase, y preparar a los estudiantes para rendir con confianza. El objetivo es ayudarte a entender mejor lo que se trabaja en la cursada, reforzar puntos clave, y darte herramientas concretas para que llegues bien preparado a los parciales y finales.
        </p>
        <p><b>Costo: </b>$60.000 ARS por mes (8 clases)</p>
        <DetailCards />
        <Button asChild variant="yellow" className="w-fit">
          <Link href="/contacto" >Consultame</Link>
        </Button>
      </section>
      <section className="section">
        <h3 className="h3">Otras tipos de clases</h3>
        <ClassCards types={["grupales", "individuales"]} />
      </section>
      <section className="section">
        <h3 className="h3">Preguntas Frecuentes</h3>
   <FAQ types={["unt"]} />
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
        icon={<Lightbulb size={30} />}
        text={`Explicaciones claras`}
      />
      <ClassDetailCard
        icon={<ClipboardPenLine size={30} />}
        text={`Apoyo en exámenes`}
      />
        <ClassDetailCard
        icon={<CheckCircle size={30} />}
        text={`Practica dirigida`}
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