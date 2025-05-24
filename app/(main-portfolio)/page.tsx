"use client";
import Contact from "@/components/Contact/Contact";
import Cursor from "@/components/Cursor/Cursor";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Intro from "@/components/Intro/Intro";
import Projects from "@/components/Projects/Projects";
import { Skills } from "@/components/Skills/Skills";
import { Skills2 } from "@/components/Skills/Skills2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MouseEvent } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main
      // onContextMenu={(e: MouseEvent) => {
      //   e.preventDefault();
      // }}
    >
      <Cursor />
      <Intro /> 
     <Hero />
      <Skills />
      <Skills2 />
      <Projects />
      <Contact />

      <Footer />
    </main>
  );
}
