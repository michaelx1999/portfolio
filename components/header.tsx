import { links } from "@/index/data"
import Link from "next/link"

export default function Header() {
  return (
    <header className="">
      <div className="fixed top-5 left-1/2 transform -translate-x-1/2 h-[3rem] w-1/2 border border-white rounded-full border-opacity-40 bg-white bg-opacity-80">
        <ul className="flex justify-evenly items-center h-full w-full font-medium text-gray-500">
          {links.map((link) => (
            <li key={link.hash}>
              <Link href={link.hash} className=" hover:text-gray-950 transition">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
