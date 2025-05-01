import Image from "next/image"
import { IoCalendarNumberSharp } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
type Props = {
  img: string,
  title: string,
  text: string,
  date: string,
  discord: string
}
const MainCard = ({ img, title, text, date, discord }: Props) => {
  return (
    <div className="w-full mt-5">
      <div className="mx-auto max-w-[1200px] ">

        <div className="flex gap-15 bg-stone-900 px-5 rounded-xl py-5">
          <div className="flex-2/4 overflow-hidden rounded-xl relative w-[750px] h-[300px]">
            <Image
              src={img}
              alt="Main Card Image"
              fill
              className="object-cover transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-3"
            />
          </div>
          <div className="flex flex-col justify-around mt-5 mb-5 flex-2/4">
            <h2 className="text-green-600 text-3xl">{title}</h2>
            <p>{text}</p>
            <div className="flex gap-5">

              <p className="inline-flex self-start gap-2 items-center text-white bg-green-600 px-3 py-2 rounded-lg">
                <IoCalendarNumberSharp />
                <span>{date}</span>
              </p>
              <Link href={discord} target="_blank" rel="noopener noreferrer">
                <p className="cursor-pointer inline-flex self-start gap-2 items-center text-white hover:bg-blue-800 bg-blue-900 px-3 py-2 rounded-lg">
                  <FaDiscord className="text-2xl" />
                  <span>Unete a la aventura</span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MainCard