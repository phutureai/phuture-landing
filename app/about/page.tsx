import Link from "next/link";
import Sky from "../components/shooting-star/sky";

export default function About() {
  return (
    <div className="relative min-h-screen h-screen overflow-hidden w-screen bg-black text-white">
      <Sky numberOfStars={150} className="absolute inset-0 z-0 " />
      <div className="w-full absolute left-0">
        <button className="px-5 p-3 bg-white m-2 rounded-sm text-black hover:bg-white/95 hover:text-black/95">
          <Link href="/">home.</Link>
        </button>
      </div>
      <div className="w-full h-full flex items-center justify-center text-center">
        <div className="w-[80%] h-[80%] flex items-center border-r justify-center bg-white/10 rounded-md"></div>
      </div>
    </div>
  );
}
