import Link from "next/link";
import Image from "next/image";
import Sky from "../components/shooting-star/sky";
import Typewriter from "../components/shooting-star/typewriter";

export default function About() {
  return (
    <div className="relative min-h-screen md:h-screen w-screen bg-black text-white md:overflow-hidden overflow-auto">
      <Sky numberOfStars={150} className="absolute inset-0 z-0 " />

      <div className="absolute bottom-0 left-0 w-full z-0">
        <Image
          src="/earth_.png"
          alt="earth"
          width={1920}
          height={500}
          className="w-full h-auto opacity-75"
        />
      </div>
      <div className="w-full absolute left-0">
        <button className="px-5 p-3 border border-white/50 m-4 rounded-sm hover:bg-white/10 duration-75 delay-100 transition-all ease-in-out">
          <Link href="/">close.</Link>
        </button>
      </div>

      <div className="w-full h-full flex items-center justify-center text-center flex-col md:my-0 my-20">
        <h1 className="text-md">founders&apos; letter</h1>
        <div className="w-[80%] h-auto flex flex-col items-center bg-turquoise1/5 rounded-md border border-white/50 p-5">
          <div className="flex">
            <h1 className="backdrop-blur-[3px] p-2 italic">
              <Typewriter text={`the phuture is at the palm of your hands.`}/>
            </h1>
          </div>

          <br />
          <div className="flex">
            <h1>
              {" "}
              <span className="italic">6.7 million</span> hectares of primary
              rainforest were lost in 2024. the global population races toward{" "}
              <span className="italic">8.5 billion</span> by 2030.{" "}
              <span className="underline underline-offset-4 decoration-white/40 font-bold">
                death wish.
              </span>{" "}
            </h1>
          </div>

          <hr className="w-[75%] border-t border-white/10 my-4" />
          <div className="flex">
            <h1 className="backdrop-blur-[3px] p-2">
              we&apos;re living through an extraordinary moment in human
              history—technological breakthroughs arrive daily, reshaping
              industries and redefining what&apos;s possible. artificial
              intelligence processes information at superhuman speeds, virtual
              environments offer infinite escapism, and digital realities
              dominate every moment. yet here&apos;s the <span className="font-semibold"> contradiction:{" "}</span>
              <span className="italic">
                as the screens grow brighter, our connection to the natural
                world grows dimmer.
              </span>
            </h1>
          </div>

          <br />
          <div className="flex">
            <h1 className="backdrop-blur-[3px] p-2">
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
          <div className="flex">
            <h1 className="backdrop-blur-[3px] p-2">
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
          <div className="flex">
            <h1 className="backdrop-blur-[4px] p-2">
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

          <div className="flex">
            <h1 className="backdrop-blur-[3px] p-2 underline underline-offset-4 decoration-white/40">
              go outside. touch some grass. adventure is near.
            </h1>
          </div>

          <hr className="w-full border-t border-white/40 my-4" />
          <div className="flex flex-col md:flex-row backdrop-blur-xl rounded-2xl p-5 items-center">
            <h1 className="p-2">
              we breathe the same air, drink the same water, under the same sky.
              the future we&apos;re building shouldn&apos;t come at
              nature&apos;s expense—it should help us remember that we&apos;re
              all united and part of something infinitely more nuanced than any
              screen could ever display.
            </h1>
            <Image
              src="/letter/james.png"
              alt="james"
              width={100}
              height={50}
            />
            <Image src="/letter/andy.png" alt="andy" width={100} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
}
