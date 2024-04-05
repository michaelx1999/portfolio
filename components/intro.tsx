"use client"

import Image from "next/image"
import photo from "@/public/photo.jpg"
import { HiDownload } from "react-icons/hi"
import { BsLinkedin } from "react-icons/bs"
import { FaGithubSquare } from "react-icons/fa"
import useSectionContext from "@/hooks/useSectionContext"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

export default function Intro() {
  const { setSection } = useSectionContext()
  const { ref, inView } = useInView({ threshold: 0.75 })

  useEffect(() => {
    if (inView) {
      console.log(inView)
      setSection("Home")
    }
  }, [inView, setSection])
  
  return (
    <section className="space-y-5 w-full h-full scroll-mt-28" id="home" ref={ref}>
      <div className="flex justify-center items-center">
        <Image
          src={photo}
          className="rounded-full w-44 h-44 border border-white object-cover shadow-xl"
          alt="mike"
        />
      </div>
      <div className="text-center italic font-medium text-gray-700 text-2xl">
        <p>Hello, my name is Michael Xia, I enjoy building sites and apps.</p>
      </div>
      <div className="flex justify-center items-center space-x-6">
        <a
          className="flex bg-gray-800 text-white items-center justify-center border rounded-full w-40 h-10 hover:scale-110 transition cursor-pointer"
          href="/CV.pdf"
          download>
          <span className="mr-1">Download CV</span>
          <HiDownload />
        </a>
        <a
          className="bg-white border rounded-full text-black p-3 text-[1.5rem] hover:scale-110 transition cursor-pointer"
          href="https://www.linkedin.com/in/michaelxia29/"
          target="_blank">
          <BsLinkedin />
        </a>
        <a
          className="bg-white border rounded-full text-black p-3 text-[1.5rem] hover:scale-110 transition cursor-pointer"
          href="https://github.com/michaelx1999"
          target="_blank">
          <FaGithubSquare />
        </a>
      </div>
    </section>
  )
}
