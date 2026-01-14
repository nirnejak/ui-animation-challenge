import * as React from "react"

import { getMetadata } from "@/utils/metadata"

import SharedLayoutTabs from "@/components/SharedLayoutTabs"

export const metadata = getMetadata({
  path: "/day-5/",
  title: "Day 5 - Shared Layout Tabs",
  description: "Day 5 - Shared Layout Tabs, Peerlist UI Animation Challenge",
})

const Day5: React.FC = () => {
  return (
    <main
      className="
        -mx-3.5 mt-6 rounded-xl border border-zinc-200 bg-zinc-50
        md:mx-0 md:mt-10
      "
    >
      <div className="flex h-[60vh] justify-center pt-24">
        <SharedLayoutTabs />
      </div>
    </main>
  )
}

export default Day5
