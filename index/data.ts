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
  },
  {
    name: "Contact",
    hash: "#contact"
  }
] as const

export interface ProjectData {
  title: string
  description: string
  tags: string[]
  imageUrl: StaticImageData
}

export const projects: ProjectData[] = [
  {
    title: "CICD Pipeline",
    description:
      "Demonstrates a complete backend workflow, from testing, to building, then to deployment",
    tags: ["Python", "FastAPI", "Testing", "AWS", "GitHub Action"],
    imageUrl: cicd
  },
  {
    title: "Portfolio",
    description: "My portfolio page, demonstrates my design skill",
    tags: ["HTML", "Tailwind CSS", "React", "Next Js"],
    imageUrl: portfolio
  }
] as const

interface ExperienceData {
  title: string
  company: string
  description: string
  icon: React.FunctionComponentElement<any>
  date: string
}

export const experiences: ExperienceData[] = [
  {
    title: "Software Engineer Intern",
    company: "Symetra",
    description: "Develop and maintain backend microservices & cloud infrastructure",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - Aug 2023"
  },
  {
    title: "Software Engineer Intern",
    company: "NASA NYSG",
    description: "Arduino Uno: Sensor detection development",
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
