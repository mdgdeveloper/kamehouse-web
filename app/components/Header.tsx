import Image from "next/image"
import NavBar from "./NavBar"

const Header = () => {
  return (

    <div className="relative w-full h-[600px] bg-[#101010] overflow-hidden">

      <div className="absolute inset-0">
        <div className="w-full h-full bg-[url('/images/maingb.jpg')] bg-cover bg-center filter blur-xs scale-110"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(255,255,255,0.1)_20%,_#101010_70%)]"></div>

      </div>

      <div className="relative z-10 flex items-start justify-center h-full p-6">
        <div className="text-white text-center">
          <NavBar />
          <div className="mt-12">
            <Image src="/images/kamehouse.png" alt="Logo" width={750} height={200} className="mx-auto mt-4 mb-2" />
          </div>
        </div>
      </div>
    </div>

  )
}
export default Header