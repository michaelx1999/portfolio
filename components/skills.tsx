import { skills } from "@/index/data"

export default function Skills() {
  return (
    <section className="w-1/2 space-y-5 scroll-mt-28" id="skills">
      <h2 className="font-medium text-3xl text-gray-700 text-center">My Skills</h2>
      <ul className="flex flex-wrap gap-5 text-lg text-gray-800 justify-center bg-gray-100 rounded-xl p-5 hover:scale-110 transition">
        {skills.map((skill, index) => (
          <li className=" bg-white p-2 border rounded-xl" key={index}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
