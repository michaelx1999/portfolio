import About from "@/components/about"
import Experience from "@/components/experience"
import Intro from "@/components/intro"
import Projects from "@/components/projects"
import Skills from "@/components/skills"

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-40">
      <Intro />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </main>
  )
}
