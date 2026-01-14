import * as React from "react"

import { getMetadata } from "@/utils/metadata"

import AnimatedToggles from "@/components/AnimatedToggles"

export const metadata = getMetadata({
  path: "/day-4/",
  title: "Day 4 - Animated Toggles",
  description: "Day 4 - Animated Toggles, Peerlist UI Animation Challenge",
})

const Day4: React.FC = () => {
  return (
    <main
      className="
        -mx-3.5 mt-6 rounded-xl border border-zinc-200 bg-zinc-50
        md:mx-0 md:mt-10
      "
    >
      <div className="grid h-[60vh] place-content-center">
        <AnimatedToggles />
      </div>
    </main>
  )
}

export default Day4
