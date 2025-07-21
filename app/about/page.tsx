"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Sky from "../components/shooting-star/sky";
import Typewriter from "../components/shooting-star/typewriter";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    document.getElementById("letter-page")?.classList.add("loaded");

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="letter-page"
      className="relative min-h-screen lg:h-screen bg-black text-white lg:overflow-hidden overflow-auto max-w-screen"
    >
      <Sky numberOfStars={150} className="absolute inset-0 z-0" />

      <div className="absolute bottom-0 left-0 w-full z-0">
        <Image
          src="/earth_.png"
          alt="earth"
          width={1920}
          height={500}
          priority
          className="w-full h-auto opacity-75"
        />
      </div>
      <div
        className={`w-full absolute left-0 transition-all duration-1000 ease-out ${
          isVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
      >
        <Link href="/" passHref>
          <button className=" px-5 p-3 border border-white/50 m-4 rounded-sm hover:bg-white/10 duration-75 delay-100 transition-all ease-in-out">
            close.
          </button>
        </Link>
      </div>

      <div
        id="letter"
        className="w-full h-full flex items-center justify-center text-center flex-col lg:my-0 my-20"
        style={{ touchAction: "pan-y" }}
      >
        <h1
          className={`text-md transition-all duration-1000 delay-300 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.8)" }}
        >
          a message from the founders
        </h1>
        <div
          id="letter-container"
          className={`w-[80%] h-auto flex flex-col items-center bg-turquoise1/5 rounded-md border border-white/40 p-5 transition-all duration-1200 delay-500 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-20 opacity-0 scale-95"
          }`}
          style={{ touchAction: "pan-y" }}
        >
          <div className="flex">
            <h1 className="md:backdrop-blur-[3px] rounded-md p-2 cursor-default italic">
              <Typewriter text={`the phuture is at the palm of your hands.`} />
            </h1>
          </div>

          <br />
          <div
            className={`flex transition-all duration-800 delay-900 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <h1 className="md:backdrop-blur-[3px] p-2 rounded-md cursor-default">
              <span className="italic">6.7 million</span> hectares of primary
              rainforest were lost in 2024. the global population races toward{" "}
              <span className="italic">8.5 billion</span> by 2030.{" "}
              <span className="underline underline-offset-4 decoration-white/40 font-bold">
                death wish.
              </span>
            </h1>
          </div>

          <hr
            className={`w-[75%] border-t border-white/10 my-4 transition-all duration-600 delay-1100 ease-out ${
              isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          />

          <div
            className={`flex transition-all duration-800 delay-1300 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-15 opacity-0"
            }`}
          >
            <h1 className="md:backdrop-blur-[3px] rounded-md p-2 cursor-default">
              we&apos;re living through an extraordinary moment in human
              history—technological breakthroughs arrive daily, reshaping
              industries and redefining what&apos;s possible. artificial
              intelligence processes information at superhuman speeds, virtual
              environments offer infinite escapism, and digital realities
              dominate every moment. yet here&apos;s the{" "}
              <span className="font-semibold"> contradiction: </span>
              <span className="italic">
                as the screens grow brighter, our connection to the natural
                world grows dimmer.
              </span>
            </h1>
          </div>

          <br />
          <div
            className={`flex transition-all duration-800 delay-1500 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-15 opacity-0"
            }`}
          >
            <h1 className="md:backdrop-blur-[3px] rounded-md p-2 cursor-default">
              at <span className="italic">phuture</span>, we see an opportunity
              to bridge our digital lives and the living planet that sustains
              us. by transforming how people discover and interact with
              biodiversity, we can turn casual outdoor moments into limitless
              connections with nature. this isn&apos;t simply about
              entertainment—it&apos;s about rewriting the entire paradigm of the
              relationship between the environment and humankind. we&apos;re
              creating the infrastructure for nature discovery at scale. this
              means building computer vision systems that can identify any
              species in real-time and gamification frameworks that make
              ecological learning irresistible. the world becomes your
              database—every insect, every bird, every berry. whether you
              explore the city, stroll along national trails, or wander off the
              beaten path, the wildlife you engage with are all cataloged and
              connected in one unified system.{" "}
            </h1>
          </div>

          <br />
          <div
            className={`flex transition-all duration-800 delay-1700 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-15 opacity-0"
            }`}
          >
            <h1 className="md:backdrop-blur-[3px] rounded-md p-2 cursor-default">
              a note on our technical philosophy: while our robust machine
              learning models trained on millions of species drive our core
              recognition capabilities, genuine environmental connection
              can&apos;t be solved through pure computation. perfect
              identification is useless if people lose touch with nature. our
              guiding principle is that nature should be protected and people
              should actually want to be in it.{" "}
              <span className="font-bold">
                {" "}
                our biography is depicted through the game but it&apos;s only
                part of our mission.{" "}
              </span>
            </h1>
          </div>

          <br />
          <div
            className={`flex transition-all duration-800 delay-1900 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-15 opacity-0"
            }`}
          >
            <h1
              className="md:backdrop-blur-[3px] bg-black/5 rounded-md p-2 cursor-default"
              style={{
                WebkitMaskImage:
                  "radial-gradient(circle at center, rgba(0,0,0,0.90) 10%, rgba(0,0,0,0.9) 95%, rgba(0,0,0,0.5) 100%)",
              }}
            >
              our founding duo of incoming uwaterloo cs & math undergrad
              students combines expertise in data science and full stack
              development, but most importantly—we see eye to eye and the vision
              is 4k. every species represents millions of years of evolutionary
              innovation, yet we&apos;re losing them faster than we can catalog
              them.
              <span className="italic">
                {" "}
                wishing on a shooting star won&apos;t cut it.
              </span>{" "}
              <span className="font-bold">
                to protect what we&apos;re losing, people must fall in love with
                what we still have.
              </span>
            </h1>
          </div>
          <br />

          <div
            className={`flex transition-all duration-800 delay-2100 ease-out ${
              isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <h1 className="md:backdrop-blur-[3px] rounded-md p-2 cursor-default underline underline-offset-4 decoration-white/40">
              go outside. touch some grass. adventure is near.
            </h1>
          </div>

          <hr
            className={`w-full border-t border-white/40 my-4 transition-all duration-600 delay-2300 ease-out ${
              isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          />
          <div
            className={`flex flex-col md:flex-row backdrop-blur-xl rounded-2xl p-5 items-center transition-all duration-1000 delay-2500 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-20 opacity-0 scale-95"
            }`}
          >
            <h1 className="p-2 cursor-default">
              we breathe the same air, drink the same water, under the same sky.
              the future we&apos;re building shouldn&apos;t come at
              nature&apos;s expense—it should remind us that we&apos;re all united
              and part of something infinitely more nuanced than any screen
              could ever display.
            </h1>
            <Image
              src="/letter/james.png"
              alt="james"
              width={100}
              height={100}
              className="letter-signature w-[50%] md:w-[10%] h-auto md:mt-0 mt-3"
              style={{ width: undefined, height: undefined }}
            />
            <Image
              src="/letter/andy.png"
              alt="andy"
              width={100}
              height={100}
              className="letter-signature w-[50%] md:w-[10%] h-auto"
              style={{ width: undefined, height: undefined }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
