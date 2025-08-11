import { TestimonialCards } from "@/components/testimonialCards"

export default function About() {
  return (
    <>
      <section className="section">
        <h3 className="h3">Sobre Mi</h3>
        <p>
          Soy profesor de inglés certificado, nacido en Estados Unidos, donde estudié el idioma y comencé mi camino como docente. Actualmente vivo en Tucumán, adonde vine por amor y donde encontré un lugar en el que me siento muy cómodo enseñando y aprendiendo todos los días.
        </p>
        <p>
          En mi tiempo libre me gusta salir a caminar, tomar mate, dibujar y estudiar cosas nuevas. Me interesan mucho los procesos de aprendizaje, no solo como docente, sino también como estudiante curioso que siempre quiere entender un poco más.
        </p>
        <p>
          Mi vocación por la enseñanza empezó en la secundaria, gracias a profesores de inglés que me marcaron por su claridad, dedicación y estilo humano. Fue su forma de enseñar la que me inspiró a seguir ese mismo camino.
        </p>

      </section>
      <section className="section">
        <h3 className="h3">Mi enfoque pedagógico</h3>
        <p>
          Cada persona aprende de manera distinta, y eso es algo que tengo muy presente al planificar mis clases. Mi objetivo no es solo enseñar reglas gramaticales o vocabulario, sino crear espacios donde el idioma cobre vida y tenga sentido real para cada estudiante.
        </p>
        <p>
          A lo largo de estos años desarrollé un enfoque flexible, que combina distintos métodos pedagógicos según las necesidades del grupo o de cada persona. Puedo trabajar con estructura cuando es necesario, pero también doy mucha importancia a la práctica real del idioma: hablar, escuchar, entender y sentirse cómodo usando el inglés.
        </p>
        <p>
          Creo en el aprendizaje como un proceso activo, donde equivocarse no es un problema, sino una parte fundamental del camino. Mi rol es acompañar ese proceso con paciencia, claridad y compromiso, para que cada estudiante pueda avanzar con confianza y disfrutar el proceso.
        </p>

      </section>
      <section className="section">
        <h3 className="h3">Testimoniales</h3>
        <TestimonialCards />
      </section>
    </>
  )
}