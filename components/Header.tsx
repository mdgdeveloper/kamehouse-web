import Image from "next/image";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] bg-[#101010] overflow-hidden">
      {/* Background image and gradient */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[url('/images/maingb.jpg')] bg-cover bg-center filter blur-xs scale-110"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(255,255,255,0.1)_20%,_#101010_70%)]"></div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full px-4 sm:px-6 py-6">
        <NavBar />
        <div className="mt-12 w-full max-w-[90%] sm:max-w-[750px]">
          <Image
            src="/images/kamehouse.png"
            alt="Logo"
            width={750}
            height={200}
            className="mx-auto mt-4 mb-2 w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
