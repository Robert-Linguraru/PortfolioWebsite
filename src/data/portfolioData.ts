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
import React from "react";


export interface Project {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  link: string;
}

export interface Certificate {
  id: string;
  name: string;
  imageUrl: string;
  issuedBy: string;
  date: string;
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
    imageUrl: "/images/waypoint.png",
    link: "#",
  },
  {
    id: "2",
    name: "AI - EEG Reader",
    description: "completed a project that utilizes AI to read EEG data and perform actions(blinking).",
    imageUrl: "/images/eeg-reader.png",
    link: "#"
  },
  {
    id: "3",
    name: "Nail Salon Website",
    description: "A personal project solicited by a nail salon.",
    imageUrl: "/images/nail-salon.png",
    link: "#",
  },
  {
    id: "4",
    name: "OmniFood - Food Delivery App",
    description: "A food delivery app built with HTML, CSS and Javascript.",
    imageUrl: "/images/omnifood.png",
    link: "#",
  }
  // Add more projects here
];

export const certificates: Certificate[] = [
  {
    id: "1",
    name: "Web Development Fundamentals",
    imageUrl: "/images/certificate-1.png",
    issuedBy: "Dicoding",
    date: "2023-01-15",
  },
  {
    id: "2",
    name: "React Basics",
    imageUrl: "/images/certificate-2.png",
    issuedBy: "Dicoding",
    date: "2023-03-20",
  },
  // Add more certificates here
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
    name: "Tailwind CSS",
    iconComponent: IconTailwindCSS,
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
    name: "Typescript",
    iconComponent: IconTypescript,
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
  }
  // Add more tech stack items here
];