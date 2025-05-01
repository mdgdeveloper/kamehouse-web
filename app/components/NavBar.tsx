import Link from "next/link"
import { IoHomeSharp } from "react-icons/io5";
import { FaTeamspeak } from "react-icons/fa";
import { GrAttraction } from "react-icons/gr";
import { MdEvent } from "react-icons/md";
import { MdOutlineEmojiEvents } from "react-icons/md";

type LinkProps = {
  name: string
  icon: React.ReactNode
  href: string
}

const NavBar = () => {
  const Links: LinkProps[] = [
    {
      name: "Inicio",
      icon: <IoHomeSharp />,
      href: "/",
    },
    {
      name: "Escuadron",
      icon: <FaTeamspeak />,
      href: "/squad",
    },
    {
      name: "Aventuras",
      icon: <GrAttraction />,
      href: "/adventures",
    },
    {
      name: "Eventos",
      icon: <MdEvent />,
      href: "/events",
    },
    {
      name: "Premios",
      icon: <MdOutlineEmojiEvents />,
      href: "/prizes",
    }
  ]


  return (
    <div>
      <div className="flex justify-center items-center  text-white p-4 gap-6">
        {Links.map((link, index) => (
          <Link href={link.href} key={index}>
            <div className="flex gap-3 items-center text-center hover:bg-green-500 hover:shadow-green-400 hover:shadow py-2 px-4 rounded-lg transition duration-300 ease-in-out text-lg">
              <div className="drop-shadow-black drop-shadow-xs">{link.icon}</div>
              <div className="drop-shadow-black drop-shadow-xs">{link.name}</div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default NavBar

