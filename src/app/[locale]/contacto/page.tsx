"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useState } from "react"
import useWeb3Forms from "@web3forms/react"
import HCaptcha from '@hcaptcha/react-hcaptcha';

// 1. Zod schema
const formSchema = z.object({
  nombre: z.string().min(2, "Tu nombre debe tener al menos 2 caracteres."),
  apellido: z.string().min(2, "Tu apellido debe tener al menos 2 caracteres."),
  correo: z.email("No parece correcto."),
  telefono: z.string().min(10, "Tu número de teléfono debe tener 10 números."),
  clase: z.string().nonempty("Campo obligatorio"),
  nivel: z.string().nonempty("Campo obligatorio"),
  mensaje: z.string().max(600, "No podés escribir más que 600 caracteres aquí."),
  "h-captcha-response": z.string().nonempty("Captcha obligatorio"),
})

type FormValues = z.infer<typeof formSchema>

export default function Contact() {
  const accessKey = "597c551f-db35-46cf-87ea-621745939468"

  const [isSuccess, setIsSuccess] = useState<boolean | null>(null)
  // const { setValue } = useForm();

  // 2. Main form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      apellido: "",
      correo: "",
      telefono: "",
      clase: "",
      nivel: "",
      mensaje: "",
      "h-captcha-response": "",
    },
    shouldUnregister: false, // <- keeps hidden/unmounted fields in state
  })

  // 3. Web3Forms submit
  const { submit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "English by Tom",
      subject: "Nuevo mensaje del formulario",
    },
    onSuccess: (msg) => {
      setIsSuccess(true)
      form.reset()
    },
    onError: (msg) => {
      setIsSuccess(false)
    },
  })

  // 4. Handler
  const handleSubmit = (data: FormValues) => {
    submit(data)
  }

  // Captcha
  const onHCaptchaChange = (token: any) => {
    form.setValue("h-captcha-response", token, { shouldValidate: true });
  };

  return (
    <section className="section">
      <h3 className="h3">¡Dejame tu mensaje!</h3>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="border p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
        >

          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Nombre *" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="apellido"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Apellido *" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="correo"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Correo *" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="telefono"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Teléfono *" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="clase"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl className="w-full">
                    <SelectTrigger>
                      <SelectValue placeholder="Tipo de clase *" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="grupales">Cursos Grupales</SelectItem>
                    <SelectItem value="unt">Cursos para la UNT</SelectItem>
                    <SelectItem value="individuales">Clases Individuales</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="nivel"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl className="w-full">
                    <SelectTrigger>
                      <SelectValue placeholder="Su nivel de inglés *" className="text-base!" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">Nunca estudié</SelectItem>
                    <SelectItem value="2">Hablo con dificultad</SelectItem>
                    <SelectItem value="3">Hablo en presente y con frases simples</SelectItem>
                    <SelectItem value="4">Hablo en pasado y de deseos</SelectItem>
                    <SelectItem value="5">Hablo de historias con todos los pasados</SelectItem>
                    <SelectItem value="6">Debato bien, falta expresividad</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mensaje"
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormControl>
                  <Textarea placeholder="Escribí tu mensaje aquí" className="resize-none" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col gap-4">
            {/* <HCaptcha
              sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
              reCaptchaCompat={false}
              onVerify={onHCaptchaChange}
              languageOverride="es"
              
            /> */}

            <FormField
              control={form.control}
              name="h-captcha-response"
              render={() => (
                <FormItem>
                  <HCaptcha
                    sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                    reCaptchaCompat={false}
                    onVerify={onHCaptchaChange}
                    languageOverride="es"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-row items-center gap-4">
              <Button type="submit" className="w-fit" disabled={form.formState.isSubmitting}>
                Enviar
              </Button>

              {isSuccess === true && (
                <p className="text-sm text-center text-green-600">
                  {"Mensaje enviado con éxito."}
                </p>
              )}
              {isSuccess === false && (
                <p className="text-sm text-red-600">
                  {"Ocurrió un error. Intente más tarde."}
                </p>
              )}
            </div>
          </div>

        </form>
      </Form>



    </section>
  )
}
