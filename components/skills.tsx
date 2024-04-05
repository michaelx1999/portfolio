"use client"

import useSectionContext from "@/hooks/useSectionContext"
import { skills } from "@/index/data"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

export default function Skills() {
  const { setSection } = useSectionContext()
  const { ref, inView } = useInView({ threshold: 0.75 })

  useEffect(() => {
    if (inView) {
      console.log(inView)
      setSection("Skills")
    }
  }, [inView, setSection])

  return (
    <section className="w-1/2 space-y-5 scroll-mt-28" id="skills" ref={ref}>
      <h2 className="font-medium text-3xl text-gray-700 text-center cursor-context-menu">
        My Skills
      </h2>
      <ul className="flex flex-wrap gap-5 text-lg text-gray-800 justify-center rounded-xl p-5 hover:scale-110 transition">
        {skills.map((skill, index) => (
          <li className="bg-white p-2 border rounded-xl cursor-context-menu" key={index}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
