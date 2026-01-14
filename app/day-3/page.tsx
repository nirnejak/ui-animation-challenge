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
    <main
      className="
        -mx-3.5 mt-6 rounded-xl border border-zinc-200 bg-zinc-50
        md:mx-0 md:mt-10
      "
    >
      <div className="grid h-[60vh] place-content-center">
        <AnimatedCheckboxes />
      </div>
    </main>
  )
}

export default Day3
