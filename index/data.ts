import React from "react"
import { CgWorkAlt } from "react-icons/cg"

interface Link {
  name: string
  hash: string
}

export const links: Link[] = [
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

interface Experience {
  title: string
  company: string
  description: string
  icon: React.FunctionComponentElement<any>
  date: string
}

export const experiences: Experience[] = [
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

interface Project {
  title: string
  description: string
  tags: string[]
  imageUrl: string
}

export const projects: Project[] = [
  {
    title: "CICD Pipeline",
    description: "Demonstrates a complete backend workflow",
    tags: ["Python", "FastAPI", "Testing", "AWS", "GitHub Action"],
    imageUrl: ""
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