import { experience } from "@/index/data"
import React from "react"

export default function Experience() {
  return (
    <section className=" w-1/2 space-y-5 scroll-mt-28" id="experience">
      <h2 className="font-medium text-3xl text-gray-700 text-center">My Experience</h2>
      <ol className="relative border-s border-gray-700 hover:scale-110 transition">
        {experience.map((exp, index) => (
          <li key={index} className=" mb-5 ms-5">
            <div className="absolute w-3 h-3 rounded-full -start-1.5 border-gray-700 bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-gray-800">{exp.title}</h3>
            <time className="text-sm font-normal text-gray-700">{exp.date}</time>
            <p className="text-sm font-normal text-gray-700">
              {exp.company} | {exp.location}
            </p>
            <p className="font-normal text-gray-700">{exp.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
