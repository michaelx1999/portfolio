import cicd from "@/public/cicd.webp"
import portfolio from "@/public/portfolio.png"
import { StaticImageData } from "next/image"

interface LinkData {
  name: string
  hash: string
}

export const links: LinkData[] = [
  {
    name: "Home",
    hash: "#home"
  },
  {
    name: "About",
    hash: "#about"
  },
  {
    name: "Skills",
    hash: "#skills"
  },
  {
    name: "Experience",
    hash: "#experience"
  },
  {
    name: "Projects",
    hash: "#projects"
  }
] as const

export interface ProjectData {
  title: string
  description: string
  tags: string[]
  link: string
  imageUrl: StaticImageData
}

export const projects: ProjectData[] = [
  {
    title: "CICD Pipeline",
    description:
      "Developed a CRUD app using FastAPI and PostgreSQL with full test coverage and automated CI/CD via GitHub Actions, AWS ECR, and Docker.",
    tags: ["Python", "FastAPI", "Testing", "GitHub Action"],
    link: "https://github.com/michaelx1999/cicd",
    imageUrl: cicd
  },
  {
    title: "Portfolio",
    description:
      "Developed a portfolio site with Next.js and TypeScript, emphasizing performance, UX, and code quality.",
    tags: ["HTML", "Tailwind CSS", "React", "Next Js"],
    link: "https://github.com/michaelx1999/portfolio",
    imageUrl: portfolio
  }
] as const

interface ExperienceData {
  title: string
  company: string
  location: string
  description: string
  date: string
}

export const experience: ExperienceData[] = [
  {
    title: "Software Engineer Intern",
    company: "Symetra",
    location: "Bellevue, WA",
    description: "Develop and maintain backend microservices & cloud infrastructure.",
    date: "May 2023 - Aug 2023"
  },
  {
    title: "Software Engineer Intern",
    company: "NASA NYSG",
    location: "Owego, NY",
    description: "Sensor detection development using Arduino Uno.",
    date: "Jun 2022 - Aug 2022"
  }
] as const

export const skills: String[] = [
  "HTML",
  "CSS",
  "Tailwind",
  "JavaScript",
  "React",
  "Next.js",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Python",
  "Java",
  "C++",
  "FastAPI",
  "SpringBoot",
  "Git",
  "Github",
  "AWS"
] as const
