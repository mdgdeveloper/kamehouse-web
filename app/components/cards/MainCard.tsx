import Image from "next/image";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";

type Props = {
  img: string;
  title: string;
  text: string;
  date: string;
  discord: string;
};

const MainCard = ({ img, title, text, date, discord }: Props) => {
  return (
    <div className="w-full mt-5">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col md:flex-row gap-6 bg-stone-900 sm:px-5 px-3 rounded py-5">
          {/* Image */}
          <div className="relative w-full md:w-1/2 h-[250px] md:h-[300px] rounded overflow-hidden">
            <Image
              src={img}
              alt="Main Card Image"
              fill
              className="object-cover transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-3"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-around mt-4 md:mt-0 md:w-1/2 text-white gap-4">
            <h2 className="text-green-600 text-2xl md:text-3xl">{title}</h2>
            <p className="text-sm md:text-base">{text}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <p className="inline-flex gap-2 items-center text-white bg-green-600 px-3 py-2 rounded-lg">
                <IoCalendarNumberSharp />
                <span>{date}</span>
              </p>
              <Link href={discord} target="_blank" rel="noopener noreferrer">
                <p className="cursor-pointer inline-flex gap-2 items-center text-white hover:bg-blue-800 bg-blue-900 px-3 py-2 rounded-lg">
                  <FaDiscord className="text-xl" />
                  <span>Únete a la aventura</span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
