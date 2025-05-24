import { Lumiflex } from "uvcanvas";
import { VelocityScroll } from "../ui/scroll-based-velocity";
import HeroContent from "./HeroContent";
import Sparks from "./Sparks";
import { SparklesCore } from "../ui/sparkles";

export default function Hero() {
  return (
    <div
      data-scroll-container
      className="h-screen w-full bg-alt-black overflow-hidden relative"
    >
      {" "}
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={10}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />
      <div className="absolute sm:inset-5 tablet:inset-10 laptop_l:inset-20 text-alt-white z-10 text-center w-screen sm:py-12 tablet:py-24 laptop_l:py-32">
        <HeroContent />
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <VelocityScroll
          text="✺ Scroll to explore"
          default_velocity={3}
          className="sm:text-2xl laptop:text-4xl milker-font py-4 bg-[#f2f2f2] text-alt-black"
        />
      </div>
    </div>
  );
}
