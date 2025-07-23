"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import MailchimpFormContainer from "./components/email-list/mailchimp";
import Link from "next/link";
import logo from "@/public/phuture4.png";
import {
  FaYoutube,
  // FaSquareXTwitter,
  FaSquareInstagram,
  // FaLinkedin,
} from "react-icons/fa6";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hideScreen, setHideScreen] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 2500);

    const contentTimer = setTimeout(() => {
      setShowMainContent(true);
    }, 2700);

    const screenTimer = setTimeout(() => {
      setHideScreen(true);
    }, 3000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(contentTimer);
      clearTimeout(screenTimer);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-[url('/bg_.jpg')] bg-cover bg-center transition-opacity duration-1000 ease-out ${
          hideScreen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="relative w-full h-full">
          <div
            className={`absolute transition-all duration-2000 ease-out transform ${
              !isLoaded
                ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100"
                : "top-0 left-0 -translate-x-1/2 -translate-y-1/2 scale-10"
            }`}
            style={{
              zIndex: !isLoaded ? 30 : 10,
            }}
          >
            <Image
              src="/phuture1.png"
              alt="logo"
              width={400}
              height={400}
              className="opacity-80"
            />
          </div>

          <div className="absolute top-[70%] left-1/2 -translate-x-1/2 flex gap-2">
            <div className="md:w-3 md:h-3 w-2 h-2 rounded-full bg-green2 shadow-[0_0_10px_#87ceeb] animate-pulse dot" />
            <div className="md:w-3 md:h-3 w-2 h-2 rounded-full bg-green2 shadow-[0_0_10px_#87ceeb] animate-pulse dot" />
            <div className="md:w-3 md:h-3 w-2 h-2 rounded-full bg-green2 shadow-[0_0_10px_#87ceeb] animate-pulse dot" />
          </div>
        </div>
      </div>

      <div
        className={`relative min-h-screen h-screen overflow-hidden w-screen bg-[url('/bg.jpg')] bg-cover bg-center transition-opacity duration-700 ease-out ${
          showMainContent ? "opacity-95" : "opacity-0"
        }`}
      >
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
              <h1
                style={{ textShadow: "2px 2px 6px rgba(110, 255, 163, 0.70)" }}
              >
                founders&apos; letter
              </h1>
            </Link>
          </div>
        </div>

        {/* <div className="absolute bottom-0 right-0 p-5 opacity-75">
          <div
            className="flex flex-row items-center gap-3 p-3 rounded-2xl backdrop-blur-xl"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.06) 0%, rgba(6, 182, 212, 0.02) 70%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, rgba(0,0,0,0.95) 30%, rgba(0,0,0,0.7) 90%, rgba(0,0,0,0.1) 100%)",
            }}
          >
            <a href=""><FaSquareInstagram className="text-2xl text-pink-600 hover:text-pink-800 transition-colors delay-75" /></a>
            <a href=""></a><FaSquareXTwitter className="text-2xl text-black/90 hover:text-black transition-colors delay-75" />
            <a href=""></a><FaYoutube className="text-2xl text-red-600 hover:text-red-800 transition-colors delay-75" />
            <a href=""></a><FaLinkedin className="text-2xl text-blue-700 hover:text-blue-900 transition-colors delay-75" />
          </div>
        </div> */}

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
              className="md:w-[50%] w-[90%] rounded-2xl md:p-3 p-1 backdrop-blur-xl"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.06) 0%, rgba(6, 182, 212, 0.02) 70%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(circle at center, rgba(0,0,0,0.90) 50%, rgba(0,0,0,0.6) 90%, rgba(0,0,0,0.1) 100%)",
              }}
            >
              <h1
                className="p-2 px-5 text-center font-semibold"
                style={{ textShadow: "2px 2px 6px rgba(110, 255, 163, 0.3)" }}
              >
                reimagining a paradigm where ai meets the <span className="text-transparent bg-clip-text bg-linear-to-r from-green1/60 via-green1/95 to-green1/80 animate-gradient-x">wild.</span>
              </h1>
              <h1
                className="p-2 px-5 text-center"
                style={{ textShadow: "2px 2px 6px rgba(110, 255, 163, 0.3)" }}
              >
                <span className="font-bold italic">phuture </span>is inspired by
                the greek word{" "}
                <span className="font-semibold italic">phusis &apos;φύσις&apos;</span>
                —nature. we&apos;re currently developing a game to
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
            <div
              className="lg:w-[35%] w-[90%] rounded-2xl md:p-3 p-1 backdrop-blur-xl"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.06) 0%, rgba(6, 182, 212, 0.02) 70%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(circle at center, rgba(0,0,0,0.95) 30%, rgba(0,0,0,0.7) 90%, rgba(0,0,0,0.1) 100%)",
              }}
            >
              <div className="flex flex-row items-center justify-center gap-2">
                <h1
                  className="text-center text-turquoise2 font-bold p-1"
                  style={{ textShadow: "2px 2px 6px rgba(112, 226, 255, 0.5)" }}
                >
                  coming soon to ios & android.
                </h1>
                <a
                  href="https://www.instagram.com/phuturegroup/"
                  target="_black"
                >
                  <FaSquareInstagram className="text-2xl text-pink-600 hover:text-pink-800 transition-colors delay-200" />
                </a>
                <a
                  href="https://www.youtube.com/@phuturegroup/"
                  target="_black"
                >
                  <FaYoutube className="text-2xl text-red-600 hover:text-red-800 transition-colors delay-200" />
                </a>
              </div>
              <MailchimpFormContainer className="p-1 pb-3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
