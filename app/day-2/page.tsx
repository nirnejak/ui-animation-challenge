import * as React from "react"

import { getMetadata } from "@/utils/metadata"

import DynamicStatusIndicator from "@/components/DynamicStatusIndicator"

export const metadata = getMetadata({
  path: "/day-2/",
  title: "Day 2 - Dynamic Status Indicator",
  description:
    "Day 2 - Dynamic Status Indicator, Peerlist UI Animation Challenge",
})

const Day2: React.FC = () => {
  return (
    <main className="mt-6 -mx-3.5 md:mx-0 md:mt-10 rounded-xl bg-zinc-50 border border-zinc-200">
      <div className="h-[60vh] grid place-content-center">
        <DynamicStatusIndicator />
      </div>
    </main>
  )
}

export default Day2
