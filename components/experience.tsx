"use client"

import { experience } from "@/index/data"
import React from "react"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

export default function Experience() {
  return (
    <section className=" w-full space-y-5 scroll-mt-28" id="experience">
      <h2 className="font-medium text-3xl text-gray-700 text-center">My Experience</h2>
      <VerticalTimeline lineColor="">
        {experience.map((exp, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              date={exp.date}
              icon={exp.icon}
              iconStyle={{ background: "white", border: "4px solid #727375" }}
              contentStyle={{
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "2rem"
              }}
              contentArrowStyle={{ borderRight: "7px solid  #232631" }}>
              <h3 className="font-medium text-gray-800 text-lg">
                {exp.title} | {exp.company}
              </h3>
              <p className="font-medium text-gray-800 text-base">{exp.location}</p>
              <p className="font-medium text-gray-800 text-base">{exp.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  )
}
