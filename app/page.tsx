"use client";
import Image from "next/image";
import MailchimpFormContainer from "./components/mailchimp";
import logo from "@/public/phutureG.png";

export default function Home() {
  return (
    <div className="relative min-h-screen h-screen overflow-hidden w-screen bg-[url('/bg.jpg')] bg-cover bg-center opacity-95">
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_rgba(30,215,96,0.25)_0%,_transparent_40%)] transition-all duration-300" />
      <div className="flex flex-row items-center text-center md:gap-0 gap-1 p-2">
        <Image src={logo} alt="phuture-logo" className="w-15 h-15" />
        <h1
          className="md:text-3xl text-xl text-turquoise1 font-medium p-2 m-1 font-quango!"
          style={{ textShadow: "2px 2px 6px rgba(110, 255, 163, 0.70)" }}
        >
          phuture.ai
        </h1>
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
          <div className="md:w-[50%] w-[90%] bg-turquoise3/25 rounded-lg p-1 backdrop-blur-[2px]">
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
              —&apos;nature&apos;. we&apos;re currently building an app to
              intertwine
              {""}
              <span className="font-semibold"> ecological realities.</span>
            </h1>
          </div>
        </div>

        <div id="mailing-list" className="flex justify-center items-center md:mt-[2.5%] flex-col">
          <h1
            className="px-5 text-center text-turquoise2 font-semibold md:bg-turquoise3/25 bg-turquoise3/20 rounded-t-lg p-1 backdrop-blur-[2px]"
            style={{ textShadow: "2px 2px 6px rgba(112, 226, 255, 0.7)" }}
          >
            join our waiting list.
          </h1>
          <MailchimpFormContainer className=" md:bg-turquoise3/20 bg-turquoise3/10 p-2 rounded-xl backdrop-blur-[5px] md:w-[35%] w-[75%]" />
        </div>
      </div>
    </div>
  );
}
