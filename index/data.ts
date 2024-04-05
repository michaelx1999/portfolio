import React from "react"
import { CgWorkAlt } from "react-icons/cg"
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
    name: "Projects",
    hash: "#projects"
  },
  {
    name: "Skills",
    hash: "#skills"
  },
  {
    name: "Experience",
    hash: "#experience"
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
      "Developed a CRUD application with FastAPI and PostgreSQL, ensuring its reliability with 100% test coverage and enhancing deployment efficiency through automated CI/CD pipelines using GitHub Actions, AWS ECR, and Docker.",
    tags: ["Python", "FastAPI", "Testing", "AWS", "GitHub Action"],
    link: "https://github.com/michaelx1999/cicd",
    imageUrl: cicd
  },
  {
    title: "Portfolio",
    description: "Developed a personal portfolio website using Next.js for server-side rendering and TypeScript for type-checking, prioritizing performance, user experience, and code maintainability.",
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
  icon: React.FunctionComponentElement<any>
  date: string
}

export const experience: ExperienceData[] = [
  {
    title: "Software Engineer Intern",
    company: "Symetra",
    location: "Bellevue, WA",
    description: "Develop and maintain backend microservices & cloud infrastructure.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - Aug 2023"
  },
  {
    title: "Software Engineer Intern",
    company: "NASA NYSG",
    location: "Owego, NY",
    description: "Sensor detection development using Arduino Uno.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2022 - Aug 2022"
  }
] as const

export const skills: String[] = [
  "HTML",
  "CSS",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Prisma",
  "SQLAlchemy",
  "Spring Data JPA",
  "Python",
  "Java",
  "FastAPI",
  "SpringBoot",
  "Git",
  "Github"
] as const
