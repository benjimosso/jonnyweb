import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="flex justify-between border-b-4 border-lightgreen sticky top-0 z-50 bg-lightWhite p-4 min-h-12 min-w-full">
      <div>
        <Link href="/" className="flex items-center gap-2">
            <Image src="/JohnnyAbogadologo.png" alt="Johnny Abogado" width={100} height={100} />
        </Link>
      </div>
    </div>
  )
}
