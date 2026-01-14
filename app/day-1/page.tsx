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
    <main
      className="
        -mx-3.5 mt-6 rounded-xl border border-zinc-200 bg-zinc-50
        md:mx-0 md:mt-10
      "
    >
      <div className="grid h-[60vh] place-content-center">
        <FluidMenu />
      </div>
    </main>
  )
}

export default Day1
