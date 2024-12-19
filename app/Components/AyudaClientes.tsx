'use client'
import Image from "next/image";

const asesorias = [
  {
    id: 1,
    nombre: "Divorcios",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.11111",
  },
  {
    id: 2,
    nombre: "Defensa Criminal",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.2222",
  },
  {
    id: 3,
    nombre: "Defensa de Inmigracion",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.3333",
  },
];

function handleClick(id: number) {
  console.log(`Clicked on asesoria with id: ${id}`);
  const paragraph = document.getElementById("Paragraph");
  if (paragraph) {
    paragraph.innerText = asesorias[id - 1].descripcion ;
  }
    
}

export default function AyudaClientes() {
  return (
    <div className="grid grid-rows-1 gap-4">
      <h1>Como Ayudamos a nuestros Clientes?</h1>
      <div className="grid grid-cols-3 gap-4">
        {asesorias.map((asesoria) => (
          <div
            key={asesoria.id}
            className="flex flex-col items-center p-4 border border-solid border-lightgreen rounded-3xl hover:bg-argblue hover:opacity-75 cursor-pointer font-medium"
            onClick={() => handleClick(asesoria.id)}
          >
            <h2 >{asesoria.nombre}</h2>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 min-h-{900px} border border-solid border-lightgreen rounded-3xl p-10">
        <div >
            <h1 className="text-xl font-bold ">Title</h1>
            <p id="Paragraph">Paragraph</p>
        </div>
        <div>
            <Image src="/next.svg" alt="Johnny Abogado" width={500} height={500} className="rounded-xl"/>
        </div>
      </div>
    </div>
  );
}
