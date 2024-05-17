"use client"

import useSectionContext from "@/hooks/useSectionContext"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

export default function About() {
  const { setSection } = useSectionContext()
  const { ref, inView } = useInView({ threshold: 0.75 })

  useEffect(() => {
    if (inView) {
      console.log(inView)
      setSection("About")
    }
  }, [inView, setSection])

  return (
    <section className="w-1/2 space-y-5 scroll-mt-28" id="about" ref={ref}>
      <h2 className="font-medium text-3xl text-gray-700 text-center cursor-context-menu">
        About Me
      </h2>
      <p className="font-mdium text-lg text-gray-700 rounded-xl p-5 hover:scale-110 transition cursor-context-menu">
        I have a deep passion for solving complex problems through software solutions. My
        expertise spans a variety of programming languages and development frameworks, enabling me
        to create efficient, robust, and scalable applications. 
      </p>
    </section>
  )
}
