import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SectionContextProvider from "@/context/section-context-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Michael Xia | Portfolio",
  description: "Michael Xia's Portfolio"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-24`}>
        <div className="bg-[#fbe2e3] -z-50 absolute top-[-5rem] right-[10rem] h-[30rem] w-[30rem] rounded-full blur-[8rem]"></div>
        <div className="bg-[#dbd7fb] -z-50 absolute top-[-5rem] left-[10rem] h-[30rem] w-[30rem] rounded-full blur-[8rem]"></div>
        <SectionContextProvider>
          <Header />
          {children}
          <Footer />
        </SectionContextProvider>
      </body>
    </html>
  )
}
