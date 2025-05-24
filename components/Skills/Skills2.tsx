import { whatIamGoodAt } from "@/lib/const";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import SplitType from "split-type";

export function Skills2() {
  const goodskillTextRef = useRef<HTMLHeadingElement>(null);
  const goodskillsContainerRef = useRef<HTMLDivElement>(null);
  
  // Text animation

   useEffect(() => {
      if (!goodskillTextRef.current) return;
  
      const split = new SplitType(goodskillTextRef.current, {
        types: "chars",
        absolute: false,
      });
  
      gsap.fromTo(
        split.chars,
        {
          y: 100,
          opacity: 0,
          rotationX: -90,
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1,
          stagger: 0.02,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: goodskillTextRef.current,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
  
      return () => split.revert();
    }, []); // Add goodskillTextRef as a dependency

  // Skills animation
  useEffect(() => {
      const skillCards = goodskillsContainerRef.current?.children;
      if (!skillCards) return;
  
      gsap.fromTo(
        skillCards,
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: goodskillsContainerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, []); // Add skillsContainerRef as a dependency

  return (
    <div>
      <div className="relative bg-alt-black text-alt-white sm:mt-0 tablet:mt-20 sm:mb-12 tablet:mb-32  laptop:mb-40 laptop_l:mb-52 w-screen overflow-hidden">
        <div className="sm:pl-6 laptop:pl-16 relative ">
          <h1
            ref={goodskillTextRef}  
            className="milker-font text-left sm:text-6xl tablet:text-7xl uppercase perspective-1000"
          >
            I am good @ {/* You can remove console.log from JSX */}
          </h1>
        </div>

        <div
          ref={goodskillsContainerRef}  
          className="sm:px-6 laptop:px-16 mt-8 grid sm:grid-cols-2 tablet:grid-cols-2 laptop:grid-cols-4 gap-4"
        >
          {whatIamGoodAt.map((skill, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-4 px-2 gap-4 h-fit w-auto overflow-hidden border-2 border-gray-500 rounded-2xl"
            >
              <skill.svgelement className="ml-10" />

              <div className="w-full">
                <p className="font-medium sm:text-sm laptop_l:text-lg capitalize tracking-wider font-sans text-white">
                  {skill.goodskill}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
