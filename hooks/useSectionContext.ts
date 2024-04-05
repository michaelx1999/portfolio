import { SectionContext } from "@/context/section-context-provider"
import { useContext } from "react"

export default function useSectionContext() {
  const context = useContext(SectionContext)

  if (!context) {
    throw new Error("Section Context is undefined")
  }
  return context
}
