"use client"
import { projects, ProjectData } from "@/index/data"
import React, { useEffect } from "react"
import Image from "next/image"
import useSectionContext from "@/hooks/useSectionContext"
import { useInView } from "react-intersection-observer"

export default function Projects() {
  const { setSection } = useSectionContext()
  const { ref, inView } = useInView({ threshold: 0.75 })

  useEffect(() => {
    if (inView) {
      console.log(inView)
      setSection("Projects")
    }
  }, [inView, setSection])

  return (
    <section className="w-1/2 space-y-5 scroll-mt-28" id="projects" ref={ref}>
      <h2 className="font-medium text-3xl text-gray-700 text-center cursor-context-menu">
        My Projects
      </h2>
      <div className="space-y-20">
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

function Project({ title, description, tags, link, imageUrl }: ProjectData) {
  return (
    <a
      className="bg-gray-100 border border-black/5 rounded-xl w-full h-60 flex cursor-pointer hover:scale-110 transition"
      href={link}
      target="_blank">
      <div className="w-1/2 p-5 h-full space-y-3">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-gray-700">{description}</p>
        <ul className="flex flex-wrap gap-2 text-sm">
          {tags.map((tag, index) => (
            <li className="bg-black px-2 py-1 text-white rounded-full" key={index}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/2 h-full">
        <Image className="w-full h-full object-fill rounded-xl" src={imageUrl} alt={title} />
      </div>
    </a>
  )
}
