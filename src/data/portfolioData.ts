import IconHTML from "../assets/icons/IconHTML";
import IconCSS from "../assets/icons/IconCSS";
import IconJavascript from "../assets/icons/IconJavascript";
import IconTailwindCSS from "../assets/icons/IconTailwindCSS";
import IconReactJS from "../assets/icons/IconReactJS";
import IconVercel from "../assets/icons/IconVercel";
import IconNodeJS from "../assets/icons/IconNodeJS";
import IconTypescript from "../assets/icons/IconTypescript";
import IconVite from "../assets/icons/IconVite";
import IconCSharp from "../assets/icons/IconCSharp";
import IconPython from "@/assets/icons/IconPython";
import IconDotnet from "@/assets/icons/IconDotnet";
import React from "react";

export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  tags?: string[];
}

export interface Certificate {
  name: string;
  issuedBy: string;
  type: string; 
}

export interface TechStack {
  id: string;
  name: string;
  iconComponent: React.ElementType;
}

export const projects: Project[] = [
  {
    id: "1",
    name: "Waypoint - AI driving app",
    description: "Work in progress, a waypoint map, ai trained to give routes.",
    image: "/wip.png",
    link: "https://github.com/Robert-Linguraru",
    github: "https://github.com/Robert-Linguraru",
    tags: ["React-Native", "AI" ]
  },
  {
    id: "2",
    name: "AI - EEG Reader",
    description: "Completed a project that utilizes AI to read EEG data and perform actions(blinking).",
    image: "/astra.jpeg",
    link: "https://github.com/Robert-Linguraru/BrainBit-EEG-Experiments-with-AI",
    github: "https://github.com/Robert-Linguraru/BrainBit-EEG-Experiments-with-AI",
    tags: ["Python", "AI" ]
  },
  {
    id: "3",
    name: "Nail Salon Website",
    description: "A personal project solicited by a nail salon.",
    image: "/sabinails.png",
    link: "https://www.sabinails.com/",
    github: "https://github.com/Robert-Linguraru/nails-site",
    tags: ["HTML", "CSS", "Javascript" ]
  },
  {
    id: "4",
    name: "OmniFood - Food Delivery App",
    description: "A food delivery app built with HTML, CSS and Javascript.",
    image: "/omnifood.jpg",
    link: "https://github.com/Robert-Linguraru/Omnifood",
    github: "https://github.com/Robert-Linguraru/Omnifood",
    tags: ["HTML", "CSS", "Javascript" ]
  },  
  {
    id: "5",
    name: "E-commerce Website - Book Store",
    description: "Built using C#, ASP.NET Core MVC, EF Core and ASP.NET Core Identity.",
    image: "/book.png",
    link: "https://github.com/Robert-Linguraru/Bulky",
    github: "https://github.com/Robert-Linguraru/Bulky",
    tags: ["C#", ".Net", "HTML/CSS/JS" ]
  }
];

export const certificates: Certificate[] = [
  {
    name: "Web Development Fundamentals",
    issuedBy: "MateAcademy",
    type: "web"
  },
  {
    name: "React Basics",
    issuedBy: "Udemy",
    type: "react"
  },
  {
    name: "C# Programming Basics",
    issuedBy: "Udemy",
    type: "csharp"
  },  
  {
    name: "ASP.NET Core MVC, EF Core and ASP.NET Core Identity",
    issuedBy: "Udemy",
    type: "dotnet"
  },
  {
    name: "Aws",
    issuedBy: "Amazon",
    type: "aws"
  }
];

export const techStack: TechStack[] = [
  {
    id: "1",
    name: "HTML",
    iconComponent: IconHTML, 
  },
  {
    id: "2",
    name: "CSS",
    iconComponent: IconCSS,
  },
  {
    id: "3",
    name: "JavaScript",
    iconComponent: IconJavascript,
  },
  {
    id: "4",
    name: "Typescript",
    iconComponent: IconTypescript,
  },
  {
    id: "5",
    name: "ReactJS",
    iconComponent: IconReactJS,
  },
  {
    id: "6",
    name: "Vercel",
    iconComponent: IconVercel,
    },
  {
    id: "7",
    name: "Node JS",
    iconComponent: IconNodeJS,
  },
    {
    id: "8",
    name: "Tailwind CSS",
    iconComponent: IconTailwindCSS,
  },
  {
    id: "9",
    name: "Vite",
    iconComponent: IconVite,
  },
  {
    id: "10",
    name: "C#",
    iconComponent: IconCSharp,
  },
  {
    id: "11",
    name: "Python",
    iconComponent: IconPython,
  },
  {
    id: "12",
    name: ".Net",
    iconComponent: IconDotnet,
  }
];