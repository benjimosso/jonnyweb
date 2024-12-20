"use client";
import Image from "next/image";
// import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useState } from "react";

const asesorias = [
  {
    id: 1,
    nombre: "Divorcios",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.11111",
    image: "/images/divorcio.jpg",
  },
  {
    id: 2,
    nombre: "Defensa Criminal",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.2222",
    image: "/images/defensaCriminal.jpg",
  },
  {
    id: 3,
    nombre: "Custodia de hijos",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.3333",
    image: "/images/custodia.jpg",
  },
];

export default function AyudaClientes() {
  const [selectedAsesoria, setSelectedAsesoria] = useState<number>(1);

  return (
    <div className="flex flex-col  bg-lightWhite w-[100%] min-h-[750px]  px-44 py-28">
      <h1 className="text-4xl font-bold font-garamond">
        Como Ayudamos a nuestros Clientes?
      </h1>
      <div className="flex flex-col gap-4 mt-8">
      <div className="flex gap-8">
        {asesorias.map((asesoria) => (
          <div
            key={asesoria.id}
            className={`flex flex-col items-center justify-center max-w-72 max-h-11 p-4  rounded-3xl cursor-pointer font-light ${selectedAsesoria === asesoria.id ? "bg-argblue" : "bg-lightgreen"}`}
            onClick={() => setSelectedAsesoria(asesoria.id)}
          >
            <p>{asesoria.nombre}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 border-2 border-solid border-lightgreen rounded-3xl p-10">
        <div className="flex flex-col gap-4 ">
          {/* <Image className="mb-2" src="/images/Balanza.png" alt="Divorcio" width={100} height={100} /> */}
          <h1 className="text-3xl font-bold ">
            {asesorias[selectedAsesoria - 1].nombre}
          </h1>
          <p className="max-w-72 ">
            {asesorias[selectedAsesoria - 1].descripcion}
          </p>
        </div>
        <div className="flex justify-center items-center">
          {/* <AspectRatio ratio={16 / 9}> */}
            <Image
              src={asesorias[selectedAsesoria - 1].image}
              alt={asesorias[selectedAsesoria - 1].nombre}
              width={600}
              height={400}
              className="rounded-xl max-w-{800px} max-h-[310px] min-w-[200px] min-h-[300px]"
            />
          {/* </AspectRatio> */}
        </div>
      </div>
      </div>
    </div>
  );
}
