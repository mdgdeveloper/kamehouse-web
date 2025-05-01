import Image from "next/image"

type Props = {
  img: string,
  title: string,
  text: string,
  date: string,
  discord: string
}

const Card = ({ img, title, text, date, discord }: Props) => {
  return (
    <div className="w-full mt-5 bg-stone-900">
      <div className="mx-auto">
        <div className="bg-stone-900 rounded relative w-full h-[300px] overflow-hidden">
          <Image src={img} alt="Main Card Image" fill className="object-cover transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-3 rounded" />
        </div>
        <div className="px-5 py-5">
          <h2 className="text-green-600 text-2xl mt-2">{title}</h2>
          <p className="text-white mt-2 text-justify">{text}</p>
          <div className="flex gap-5 mt-7 justify-between">
            <p className="inline-flex self-start gap-2 items-center text-sm text-white bg-green-600 px-3 py-2 rounded-lg">
              <span>{date}</span>
            </p>
            <a href={discord} target="_blank" rel="noopener noreferrer">
              <p className="cursor-pointer text-sm inline-flex self-start gap-2 items-center text-white hover:bg-blue-800 bg-blue-900 px-3 py-2 rounded-lg">
                <span>Discord</span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card