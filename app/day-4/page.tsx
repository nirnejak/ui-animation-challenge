import * as React from "react"

import { getMetadata } from "@/utils/metadata"

import { TextScramble } from "@/components/text-scramble"

export const metadata = getMetadata({
  path: "/day-4/",
  title: "Day 4 - UI Animation Challenge",
  description: "Day 4 - UI Animation Challenge",
})

const Day4: React.FC = () => {
  return (
    <main className="mt-6 -mx-3.5 md:mx-0 md:mt-10 rounded-xl bg-zinc-50 border border-zinc-200">
      <div className="h-[55vh] grid place-content-center">
        <TextScramble className="text-zinc-800 tracking-tight">
          Not yet announced
        </TextScramble>
      </div>
    </main>
  )
}

export default Day4
