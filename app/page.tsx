"use client";
import Image from "next/image";
import MailchimpFormContainer from "./components/email-list/mailchimp";
import Link from "next/link";
import logo from "@/public/phuture4.png";

export default function Home() {
  return (
    <div className="relative min-h-screen h-screen overflow-hidden w-screen bg-[url('/bg.jpg')] bg-cover bg-center opacity-95">
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_rgba(30,215,96,0.25)_0%,_transparent_40%)] transition-all duration-300" />
      <div className="flex flex-row justify-between text-center p-2 font-quango! font-medium mr-5">
        <div className="flex flex-row items-center md:text-2xl text-xl">
          <Image src={logo} alt="phuture-logo" className="w-12 h-12" />
          <h1
            className="px-2 m-1 text-turquoise1"
            style={{ textShadow: "2px 2px 6px rgba(110, 255, 163, 0.70)" }}
          >
            phuture
          </h1>
        </div>
        
        <div className="flex flex-row items-center md:text-xl text-md underline underline-offset-4 text-turquoise1/90 decoration-turquoise1/50 hover:text-turquoise1/80 transiton-all delay-75 ease-in-out duration-100">
          <Link href="/about">
            <h1 style={{ textShadow: "2px 2px 6px rgba(110, 255, 163, 0.70)" }}>
              founders&apos; letter
            </h1>
          </Link>
        </div>
      </div>

      <div className="flex justify-center flex-col">
        <div className="flex justify-center items-center text-center">
          <span
            id="title"
            className="relative text-green2 font-bold overflow-hidden py-5 m-0"
            style={{ textShadow: "2px 2px 6px rgba(110, 255, 163, 0.75)" }}
          >
            welcome 2 the phuture.
            <div className="absolute top-0 left-0 w-full h-full z-[2] mix-blend-darken pointer-events-none">
              <div className="aurora__item"></div>
              <div className="aurora__item"></div>
              <div className="aurora__item"></div>
              <div className="aurora__item"></div>
            </div>
          </span>
        </div>

        <div className="flex justify-center items-center text-green2 md:text-xl text-md flex-col">
          <div
            className="md:w-[50%] w-[90%] bg-turquoise3/10 rounded-lg p-1 backdrop-blur-[2px]"
            style={{
              WebkitMaskImage:
                "radial-gradient(circle, rgba(0,0,0,0.95) 30%, rgba(0,0,0,0.7) 70%)",
            }}
          >
            <h1
              className="p-2 px-5 text-center font-semibold"
              style={{ textShadow: "2px 2px 6px rgba(110, 255, 163, 0.3)" }}
            >
              reimagining a paradigm where ai meets the wild.
            </h1>
            <h1
              className="p-2 px-5 text-center"
              style={{ textShadow: "2px 2px 6px rgba(110, 255, 163, 0.3)" }}
            >
              <span className="font-bold italic">phuture </span>is inspired by
              the greek word{" "}
              <span className="font-semibold italic">φύσις (phusis)</span>
              —&apos;nature&apos;. we&apos;re currently developing an app to
              intertwine
              {""}
              <span className="font-semibold"> ecological realities.</span>
            </h1>
          </div>
        </div>

        <div
          id="mailing-list"
          className="flex justify-center items-center absolute bottom-10 w-full"
        >
          <div className="md:w-[35%] w-[75%] backdrop-blur-[10px] md:bg-turquoise3/10 bg-turquoise3/20 rounded-lg px-3">
            <h1
              className="px-5 text-center text-turquoise2 font-bold p-1"
              style={{ textShadow: "2px 2px 6px rgba(112, 226, 255, 0.7)" }}
            >
              coming to ios & android soon. get notified.
            </h1>
            <MailchimpFormContainer className="p-1 pb-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
