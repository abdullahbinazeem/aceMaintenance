import { MessageSquareQuote } from "lucide-react";
import Container from "./components/container";
import Navbar from "./components/navbar";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="absolute z-[-1] top-10 right-[-100px] h-[250px] w-[250px] rounded-full blur-[130px] bg-primary"></div>
        <div className="absolute z-[-1] bottom-10 left-[-100px] h-[250px] w-[250px] rounded-full blur-[150px] bg-primary"></div>
        <Container>
          <Navbar />
          <div className="h-[85vh] mb-20 flex flex-col lg:flex-row gap-12">
            <div className="lg:mt-36 mt-14 md:mt-24 lg:flex-1">
              <h2 className="text-lg uppercase">High Pressional Cleaning</h2>
              <h1 className="uppercase text-5xl font-bold leading-[110%] text-secondary">
                <span className="text-primary">Easy To Clean</span> <br /> House
                and Exteriors
              </h1>
              <p className="mt-6 text-lg">
                The Most Affordable, High-End House and Exterior Cleaning
                <br className="xl:block hidden" /> Provider In Vancouver.
              </p>
              <div className="inline-block mt-6">
                <a className="k bg-primary text-white py-4 px-8 rounded-full flex gap-2">
                  <MessageSquareQuote />
                  <p>Get a Quote Now!</p>
                </a>
              </div>
            </div>
            <div className="relative flex-1 scale-x-[-100%]">
              <Image
                src="/assets/cleanhouse.png"
                alt="Clean House"
                fill
                objectFit="contain"
              />
            </div>
          </div>
        </Container>
      </div>
      <div className="w-full h-20 bg-primary"></div>
    </>
  );
}
