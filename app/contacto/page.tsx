// Code: Contacto page
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"


export default function Contacto() {
    return (
        <div className="flex flex-col items-center  bg-lightWhite w-[100%] min-h-[750px]  px-44 pb-12 pt-12 ">
        <Card className="w-[500px]">
            <CardHeader>
                <CardTitle className="text-xl">Forma de Contacto</CardTitle>
                <CardDescription>Por Favor dejanos una descripcion de tu caso</CardDescription>
            </CardHeader>
            <CardContent >
            <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="nombre" className="text-[16px]">Nombre</Label>
              <Input  id="name" placeholder="Nombre" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="nombre" className="text-[16px]">Apellido</Label>
              <Input id="name" placeholder="Apellido" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email" className="text-[16px]">Email</Label>
              <Input id="email" placeholder="Email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="message" className="text-[16px]">Mensaje</Label>
              <Textarea className="min-h-40" id="message" placeholder="Message" />
            </div>

            </div>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button variant="outline">Enviar</Button>
            </CardFooter>
        </Card>
        </div>
    )
}
