import * as React from "react"

import { getMetadata } from "@/utils/metadata"

export const metadata = getMetadata({
  path: "/day-6/",
  title: "Day 6 - UI Animation Challenge",
  description: "Day 6 - UI Animation Challenge",
})

const Day6: React.FC = () => {
  return (
    <main className="w-full mt-12 rounded-xl bg-zinc-50 border border-zinc-200">
      <div className="h-[300px] grid place-content-center">
        Not yet announced
      </div>
    </main>
  )
}

export default Day6
