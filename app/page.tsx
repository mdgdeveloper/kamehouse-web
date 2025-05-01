import Card from "./components/cards/Card";
import MainCard from "./components/cards/MainCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";



export default function Home() {

  // Info de Main Card 

  const img = "/events/01.png";
  const title = "El Despertar del Ki Explorador";
  const text = "Forma parte del escuadrón de reconocimiento inicial y explora el mapa antes de que el mal despierte. Consigue ser el primero en llegar a la cima de la montaña y conseguir el poder del Ki Explorador. El evento comienza el 10 de mayo de 2025 y termina el 20 de mayo de 2025.";
  const date = "2025-05-10";
  const discord = "https://discord.com/channels/1365587302688100403/1367232798745694278";


  // Info de Card #1

  const Card1 = {
    img: "/images/welcomepack.png",
    title: "Welcome Pack disponible para todos los jugadores",
    text: "Recibe un pack de bienvenida al registrarte en el juego. Incluye 1000 monedas, 10 gemas y un personaje exclusivo.",
    date: "2025-05-10",
    discord: "https://discord.com/channels/1365587302688100403/1367232798745694278"
  }
  const Card2 = {
    img: "/images/conclave.png",
    title: "Primera reunión del Conclave",
    text: "Únete a la primera reunión del Conclave, donde se discutirán los planes para el futuro del juego y se tomarán decisiones importantes.",
    date: "2025-05-10",
    discord: "https://discord.com/channels/1365587302688100403/1367232798745694278"
  }

  return (
    <div>
      <Header />
      <Hero />
      <div className="absolute w-full">
        <MainCard
          img={img}
          title={title}
          text={text}
          date={date}
          discord={discord}
        />
        <div className="mx-auto max-w-[1200px] flex gap-5">

          <Card
            img={Card1.img}
            title={Card1.title}
            text={Card1.text}
            date={Card1.date}
            discord={Card1.discord}
          />

          <Card
            img={Card2.img}
            title={Card2.title}
            text={Card2.text}
            date={Card2.date}
            discord={Card2.discord}
          />
        </div>
        <div className="mt-10">
          <Footer />
        </div>
      </div>

    </div>
  );
}