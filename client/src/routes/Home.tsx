import HomeCards from "../components/HomeCards";
import HeroSection from "../components/HeroSection";
import { useRef } from "react";

const Home = () => {
  const cardsRef = useRef<HTMLDivElement | null>(null);

  const scrollToCards = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <HeroSection scrollToCards={scrollToCards} />
      <HomeCards cardsRef={cardsRef} />
    </>
  );
};

export default Home;
