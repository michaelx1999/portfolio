"use client"
import useSectionContext from "@/hooks/useSectionContext"
import { experience } from "@/index/data"
import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"

export default function Experience() {
  const { setSection } = useSectionContext()
  const { ref, inView } = useInView({ threshold: 0.75 })

  useEffect(() => {
    if (inView) {
      console.log(inView)
      setSection("Experience")
    }
  }, [inView, setSection])
  return (
    <section className="w-1/2 space-y-5 scroll-mt-28" id="experience" ref={ref}>
      <h2 className="font-medium text-3xl text-gray-700 text-center cursor-context-menu">
        My Experience
      </h2>
      <ol className="relative border-s border-gray-700 hover:scale-110 transition cursor-context-menu">
        {experience.map((item, index) => (
          <li key={index} className=" mb-5 ms-5">
            <div className="absolute w-3 h-3 rounded-full -start-1.5 border-gray-700 bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <time className="text-sm font-normal text-gray-700">{item.date}</time>
            <p className="text-sm font-normal text-gray-700">
              {item.company} | {item.location}
            </p>
            <p className="font-normal text-gray-700">{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
