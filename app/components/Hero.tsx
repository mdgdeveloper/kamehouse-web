import { FaDiscord } from "react-icons/fa";
// import CurrentEvent from "./events/CurrentEvent";
import Countdown from "./Countdown";

const Hero = () => {
  return (
    <div className="-mt-54 z-20 relative max-w-[1200px] mx-auto flex gap-5">
      <div className="flex-4/5 py-5 rounded px-10 bg-stone-900">
        <Countdown
          endDate="2025-05-10T00:00:00Z" // Replace with your event date
          eventText="Nos ponemos en marcha en..." // Replace with your event text     

        />

      </div>
      <div className="hover:bg-green-600 flex-1/5 py-10 px-10 rounded ring-2 ring-green-500 shadow-[0_0_10px_rgba(144,238,144,0.5)] bg-green-700 ease-in-out transform duration-300 cursor-pointer ">
        <div>Accede a nuestro server</div>
        <div className="flex gap-3 text-5xl">

          <FaDiscord />
          <div className="text-5xl font-semibold">Discord</div>
        </div>
      </div>
    </div>
  )
}
export default Hero