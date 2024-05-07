import About from "./components/about";
import Hero from "./components/hero";

import Container from "./components/container";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-full h-32 bg-primary"></div>
      <About />
    </>
  );
}
