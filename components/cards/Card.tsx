import Image from "next/image"
import Link from "next/link";
import { MdCalendarMonth } from "react-icons/md";

type Props = {
  img: string,
  title: string,
  text: string,
  date: string,
  discord: string
  link?: string
}

const Card = ({ img, title, text, date, discord, link = "#" }: Props) => {
  return (
    <div className="w-full mt-5 bg-stone-900">
      <div className="mx-auto">
        <Link href={link}>
          <div className="bg-stone-900 rounded relative w-full h-[200px] sm:h-[300px] overflow-hidden">
            <Image src={img} alt="Main Card Image" fill className="object-cover transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-3 rounded" />
          </div>
        </Link>
        <div className="px-5 py-5">
          <div className="flex gap-1">
            <MdCalendarMonth />
            <p className="text-xs sm:text-sm">{date}</p>
          </div>
          <Link href={link}><h2 className="text-green-600 text-lg sm:text-2xl">{title}</h2></Link>
          <p className="text-white mt-2 sm:text-justify text-sm sm:text-md">{text}</p>
          <div className="flex gap-5 mt-7 justify-between">
            <Link href={link}>
              <p className="inline-flex self-start gap-2 items-center text-sm text-white bg-green-600 px-3 py-2 rounded-lg">
                <span>Mas informacion</span>
              </p>
            </Link>
            <a href={discord} target="_blank" rel="noopener noreferrer">
              <p className="cursor-pointer text-sm inline-flex self-start gap-2 items-center text-white hover:bg-blue-800 bg-blue-900 px-3 py-2 rounded-lg">
                <span>Discord</span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </div >
  )
}
export default Card