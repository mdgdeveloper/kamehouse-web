import { FaDiscord } from "react-icons/fa";
import Countdown from "./Countdown";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="-mt-96 z-20 relative max-w-[1250px] mx-auto flex flex-col md:flex-row gap-5 px-4 sm:px-6 items-center">
      {/* Countdown section */}
      <div className="flex-grow py-4 px-6 sm:px-10 rounded-lg bg-stone-900">
        <Countdown
          endDate="2025-05-10T00:00:00Z"
          eventText="Nos ponemos en marcha en..."
        />
      </div>

      {/* Discord CTA */}
      <Link href="https://discord.gg/RnPtQhzv" target="_blank" rel="noopener noreferrer">
        <div className="flex-shrink-0 py-6 px-6 sm:px-10 rounded ring-2 ring-green-500 shadow-[0_0_10px_rgba(144,238,144,0.5)] bg-green-700 hover:bg-green-600 transition duration-300 cursor-pointer text-white text-center flex flex-col justify-center items-center">
          <div className="text-lg font-medium mb-2">Accede a nuestro server</div>
          <div className="flex items-center gap-3 text-4xl sm:text-5xl">
            <FaDiscord />
            <div className="font-semibold">Discord</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Hero;
