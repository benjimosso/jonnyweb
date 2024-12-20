import { Button } from "@/components/ui/button";


export default function Footer() {
    return (
        <div className="flex flex-col items-center w-[100%] min-h-[400px]  px-44 py-28 bg-lightgreen">
            <div className="flex flex-col items-center gap-2 border-b-2 border-solid border-lightWhite pb-8"> 
                <div className="flex flex-col items-center text-4xl font-bold font-garamond mb-8 text-lightWhite ">
                    <h1>Servicio de Calidad para los momentos </h1>
                    <h1>buenos y malos de la vida</h1>
                </div>
                <Button variant="outline" className=" w-fit mt-6 min-h-16 min-w-44 text-green-500 font-bold">Empezar Consulta &#8594;</Button>
            </div>
        </div>
    )
}
