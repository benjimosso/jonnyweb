'use client'
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Playwrite_AU_QLD } from "next/font/google";

const PlaywriteAustralia = Playwrite_AU_QLD({
  weight: "400",
  style: "normal",
});

export default function NavBar() {
  return (
    <div className="flex justify-between border-b-4 border-lightgreen sticky top-0 z-50 bg-lightWhite px-20 min-h-12 min-w-full items-center">
      <div>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/JohnnyAbogadologo.png" alt="Johnny Abogado" width={100} height={100} />
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <p className={`text-gray-500 font-serif font-bold text-lg ${PlaywriteAustralia.className}`}>Johnathan Lavie</p>
        <p className={`text-gray-500 font-serif font-bold text-xs ${PlaywriteAustralia.className}`}>& ASC</p>
      </div>
      <div>
        <Link href="contacto" > <Button variant="outline" className="bg-lightgreen text-gray-500 font-sans font-bold">Contactanos !</Button></Link>
      </div>
    </div>
  )
}
