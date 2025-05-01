"use client";
import { useState } from "react";
import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";
import { FaTeamspeak } from "react-icons/fa";
import { GrAttraction } from "react-icons/gr";
import { MdEvent, MdOutlineEmojiEvents } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";

type LinkProps = {
  name: string;
  icon: React.ReactNode;
  href: string;
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Links: LinkProps[] = [
    { name: "Inicio", icon: <IoHomeSharp />, href: "/" },
    { name: "Escuadron", icon: <FaTeamspeak />, href: "/squad" },
    { name: "Aventuras", icon: <GrAttraction />, href: "/adventures" },
    { name: "Eventos", icon: <MdEvent />, href: "/events" },
    { name: "Premios", icon: <MdOutlineEmojiEvents />, href: "/prizes" },
  ];

  return (
    <nav className="relative z-50 w-full text-white p-4">
      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center items-center gap-6">
        {Links.map((link, index) => (
          <Link key={index} href={link.href}>
            <div className="flex gap-2 items-center text-center hover:bg-green-500 hover:shadow-green-400 hover:shadow py-2 px-4 rounded-lg transition duration-300 ease-in-out text-lg">
              <span className="text-2xl">{link.icon}</span>
              <span>{link.name}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden flex justify-between items-center">
        <div className="text-xl font-semibold">Menú</div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-3xl focus:outline-none">
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Absolute Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 mt-2 bg-[#1f1f1f] rounded-md shadow-lg flex flex-col items-center gap-2 py-4 transition-all duration-300 md:hidden">
          {Links.map((link, index) => (
            <Link key={index} href={link.href}>
              <div
                className="flex items-center gap-2 px-6 py-2 hover:bg-green-600 w-full justify-center transition"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-xl">{link.icon}</span>
                <span className="text-base">{link.name}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
