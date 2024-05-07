import About from "./components/about";
import Hero from "./components/hero";
import Services from "./components/services";

import Container from "./components/container";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-full h-32 bg-primary"></div>
      <About />
      <Services />
    </>
  );
}
