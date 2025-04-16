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
    <main className="mt-6 -mx-3.5 md:mx-0 md:mt-10 rounded-xl bg-zinc-50 border border-zinc-200">
      <div className="pt-24 h-[60vh] flex justify-center">
        <SharedLayoutTabs />
      </div>
    </main>
  )
}

export default Day5
