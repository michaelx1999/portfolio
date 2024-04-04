import About from "@/components/about"
import Intro from "@/components/intro"
import Projects from "@/components/projects"
import Skills from "@/components/skills"

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-40">
      <Intro />
      <About />
      <Projects />
      <Skills />
    </main>
  )
}
