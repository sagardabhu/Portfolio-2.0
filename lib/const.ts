import AWSSVG from "@/components/Skills/SVGs/AWS";
import FirebaseSVG from "@/components/Skills/SVGs/Firebase";
import GithubSVG from "@/components/Skills/SVGs/Github";
import MongodbSVG from "@/components/Skills/SVGs/MongoDB";
import NextjsSVG from "@/components/Skills/SVGs/NextJS";
import NodeJsSVG from "@/components/Skills/SVGs/NodeJS";
import PlaywrightSVG from "@/components/Skills/SVGs/Playwright";
import PNPMSVG from "@/components/Skills/SVGs/PNPM";
import ReactjsSVG from "@/components/Skills/SVGs/ReactJS";
import TailwindSvg from "@/components/Skills/SVGs/TailwindCSS";
import TypescriptSVG from "@/components/Skills/SVGs/Typescript";
import VercelSVG from "@/components/Skills/SVGs/Vercel";

// import Html from "@/components/Skills/SVGs/Html"

export interface MenuItem {
  title: string;
  href: string;
}

export const menuItem: MenuItem[] = [
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contacts",
    href: "#contacts",
  },
];


export const socials = [
  { name: "Discord", href: "https://discord.com/users/sagardabhi0844" },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/sagar-dabhi-131a1626a/",
  },
  { name: "Telegram", href: "https://t.me/Sagardabhi816" },
  {
    name: "Whatsapp",
    href: "https://wa.me/919843849354?text=Hello!%20I%27m%20interested%20in%20your%20web%20development%20services.%20Could%20you%20please%20provide%20more%20details%3F",
  },
];

// Projects Section
interface Project {
  title: string;
  color: string;
  link?: string;
}

export const projects: Project[] = [
  {
    title: "maria cars",
    color: "#FFD1DC",
    link: "https://www.maria-cars.com/",
  },
  { title: "p8.io", color: "#C1FFC1", link: "sagardabhiportfolio" },
  { title: "Wood Bird", color: "#B0E2FF" },
  { title: "Minimal Goods", color: "#E6E0F8" },
  { title: "Mini Bricks", color: "#FFFFC0" },
  { title: "Hold Work", color: "#FFE4B5" },
  { title: "Framer", color: "#FFA07A" },
  { title: "Cinema Point", color: "#FFE4E1" },
];

// Skills Section
interface Skills {
  skill: string;
  svgElement: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const skills: Skills[] = [
  // Frontend Skills
  { skill: "Nextjs", svgElement: NextjsSVG },
  { skill: "Reactjs", svgElement: ReactjsSVG },
  { skill: "Typescript", svgElement: TypescriptSVG },
  { skill: "Tailwind CSS", svgElement: TailwindSvg },

  // Backend & Database Skills
  { skill: "Nodejs", svgElement: NodeJsSVG },
  { skill: "Mongo DB", svgElement: MongodbSVG },
  { skill: "Firebase", svgElement: FirebaseSVG },
  // { skill: "Html", level: 64, svgElement: Html },

  // Tools & Deployment
  { skill: "Github", svgElement: GithubSVG },
  { skill: "Vercel", svgElement: VercelSVG },
  { skill: "AWS", svgElement: AWSSVG },
  { skill: "PNPM", svgElement: PNPMSVG },
  { skill: "Playwright", svgElement: PlaywrightSVG },
];

// What i am good at  Section
export interface WhatIamGoodAt {
  goodskill: string;
  svgelement: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const whatIamGoodAt: WhatIamGoodAt[] = [
  // Frontend Skills
  { goodskill: "Reactjs", svgelement: ReactjsSVG },
  { goodskill: "Nextjs", svgelement: NextjsSVG },
  { goodskill: "Tailwind CSS", svgelement: TailwindSvg },

  // Backend & Database Skills
  { goodskill: "Nodejs", svgelement: NodeJsSVG },
  { goodskill: "Mongo DB", svgelement: MongodbSVG },
  { goodskill: "Firebase", svgelement: FirebaseSVG },

  // Tools & Deployment
  { goodskill: "Github", svgelement: GithubSVG },
  { goodskill: "Vercel", svgelement: VercelSVG },
  { goodskill: "AWS", svgelement: AWSSVG },
  { goodskill: "PNPM", svgelement: PNPMSVG },
  { goodskill: "Playwright", svgelement: PlaywrightSVG },
];

interface FooterMenuItem {
  href: string;
  name: string;
}

export const footerMenuItem: FooterMenuItem[] = [
 
  {
    href: "#projects",
    name: "Projects",
  },
  {
    href: "#contacts",
    name: "Contacts",
  },
  {
    href: "#skills",
    name: "Skills",
  }
];
