import * as React from "react"

import { getMetadata } from "@/utils/metadata"

export const metadata = getMetadata({
  path: "/day-1/",
  title: "Day 1 - UI Animation Challenge",
  description: "Day 1 - UI Animation Challenge",
})

const Day1: React.FC = () => {
  return (
    <main className="w-full mt-12 rounded-xl bg-zinc-50 border border-zinc-200">
      <div className="h-[300px] grid place-content-center">
        Fluid Menu Animation
      </div>
    </main>
  )
}

export default Day1
