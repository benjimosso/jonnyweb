import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

export default function PreguntasFrecuentes() {
  return (
    <div className="flex flex-col w-[100%] min-h-[600px]  px-44 py-28">
        <div>
      <h1 className="text-5xl font-bold font-garamond border-b-2 border-y-argblue w-fit"> Preguntas Frecuentes</h1>
      </div>
      <div className="mt-20">
        <Accordion type="single" collapsible >
          <AccordionItem value="1" className="mb-12">
            <AccordionTrigger>
              <h2 className="text-3xl font-bold">¿Toma Jony Casos en Hanuka?</h2>
            </AccordionTrigger>
            <AccordionContent className="mt-4">
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                Nulla quis sem at nib
                </p>
            </AccordionContent>
            </AccordionItem>
            <AccordionItem value="2" className="mb-12">
            <AccordionTrigger>
              <h2 className="text-3xl font-bold">¿Es Jony Hebreo?</h2>
            </AccordionTrigger>
            <AccordionContent className="mt-4">
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                Nulla quis sem at nib
                </p>
            </AccordionContent>
            </AccordionItem>
            <AccordionItem value="3" className="mb-12">
            <AccordionTrigger>
              <h2 className="text-3xl font-bold">¿Es verdad que Dami es Brasilero?</h2>
            </AccordionTrigger>
            <AccordionContent className="mt-4">
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                Nulla quis sem at nib
                </p>
            </AccordionContent>
            </AccordionItem>
            </Accordion>
      </div>
    </div>
  )
}
