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
      <Container className="mt-28 mb-40">
        <h2 className="text-center text-primary text-medium sm:text-lg tracking-wider uppercase">
          OUR PORTFOLIO
        </h2>
        <h1 className="text-center text-secondary text-3xl sm:text-4xl  font-bold mt-4">
          RECENT WORK SHOWCASE{" "}
        </h1>
      </Container>
    </>
  );
}
