import { skills } from "@/lib/const";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import SplitType from "split-type";

export function Skills() {
    const skillsTextRef = useRef<HTMLHeadingElement>(null);
    const skillsContainerRef = useRef<HTMLDivElement>(null);
    
 

  // Text animation
  useEffect(() => {
    if (!skillsTextRef.current) return;

    const split = new SplitType(skillsTextRef.current, {
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
          trigger: skillsTextRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => split.revert();
  }, []);

  // Skills animation
  useEffect(() => {
    const skillCards = skillsContainerRef.current?.children;
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
          trigger: skillsContainerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  // Progress animation

  return (
    <div>
      <div
        id="skills"
        className="relative bg-alt-black text-alt-white sm:mt-0 tablet:mt-20 sm:mb-12 tablet:mb-32 laptop:mb-40 laptop_l:mb-52 w-screen overflow-hidden"
      >
        <div className="sm:pl-6 laptop:pl-16 relative mt-20">
          <h1
            ref={skillsTextRef}
            className="milker-font text-left sm:text-6xl tablet:text-7xl uppercase perspective-1000"
          >
            Skills
          </h1>
        </div>

        <div
          ref={skillsContainerRef}
          className="sm:px-6 laptop:px-16 mt-14 grid sm:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-4"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-4 px-2 gap-4 h-fit w-auto overflow-hidden border-2 border-gray-500 rounded-2xl"
            >
              <skill.svgElement className="ml-10" />

              <div className="w-full">
                <p className="font-medium sm:text-sm laptop_l:text-lg capitalize tracking-wider font-sans">
                  {skill.skill}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
