export default function Home() {
  return (
    <div className="relative min-h-screen h-screen overflow-hidden w-screen bg-[url('@/app/assets/bg4.jpg')] bg-cover bg-center opacity-95">
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_rgba(30,215,96,0.25)_0%,_transparent_40%)] transition-all duration-300" />
      <div>
        <h1 className="text-3xl text-turquoise1 font-medium p-2">phuture.ai</h1>
      </div>

      <div className="flex justify-center flex-col">
        <div className="flex justify-center items-center">
          <span
            id="title"
            className="relative mt-[7.5%] text-green2 font-bold overflow-hidden py-5 m-0 "
            style={{ textShadow: "2px 2px 6px rgba(110, 255, 163, 0.75)" }}
          >
            building the future.
            <div className="absolute top-0 left-0 w-full h-full z-[2] mix-blend-darken pointer-events-none">
              <div className="aurora__item"></div>
              <div className="aurora__item"></div>
              <div className="aurora__item"></div>
              <div className="aurora__item"></div>
            </div>
          </span>
        </div>

        <div className="flex justify-center items-center text-turquoise1 text-2xl flex-col">
          <h1 className="font-bold">phuture is derived from phusis (φύσις, greek for nature) + future</h1>
          <h1>build a world with nature, not by destroying it.</h1>
        </div>
      </div>
    </div>
  );
}
