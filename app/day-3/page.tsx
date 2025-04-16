import * as React from "react"

import { getMetadata } from "@/utils/metadata"

import AnimatedCheckboxes from "@/components/AnimatedCheckboxes"

export const metadata = getMetadata({
  path: "/day-3/",
  title: "Day 3 - Animated Checkboxes",
  description: "Day 3 - Animated Checkboxes, Peerlist UI Animation Challenge",
})

const Day3: React.FC = () => {
  return (
    <main className="mt-6 -mx-3.5 md:mx-0 md:mt-10 rounded-xl bg-zinc-50 border border-zinc-200">
      <div className="h-[60vh] grid place-content-center">
        <AnimatedCheckboxes />
      </div>
    </main>
  )
}

export default Day3
