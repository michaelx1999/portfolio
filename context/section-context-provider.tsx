"use client"
import React, { useState, createContext, Dispatch } from "react"

type SectionContextType = {
  section: string
  setSection: Dispatch<React.SetStateAction<string>>
}
export const SectionContext = createContext<SectionContextType | undefined>(undefined)

export default function SectionContextProvider({ children }: { children: React.ReactNode }) {
  const [section, setSection] = useState<string>("Home")

  return (
    <SectionContext.Provider value={{ section, setSection }}>{children}</SectionContext.Provider>
  )
}
