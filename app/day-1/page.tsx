import * as React from "react"

import { getMetadata } from "@/utils/metadata"

import FluidMenu from "@/components/FluidMenu"

export const metadata = getMetadata({
  path: "/day-1/",
  title: "Day 1 - Fluid Menu Animation",
  description: "Day 1 - Fluid Menu Animation, Peerlist UI Animation Challenge",
})

const Day1: React.FC = () => {
  return (
    <main className="mt-6 -mx-3.5 md:mx-0 md:mt-10 rounded-xl bg-zinc-50 border border-zinc-200">
      <div className="h-[60vh] grid place-content-center">
        <FluidMenu />
      </div>
    </main>
  )
}

export default Day1
