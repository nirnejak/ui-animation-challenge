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
    <main
      className="
        -mx-3.5 mt-6 rounded-xl border border-zinc-200 bg-zinc-50
        md:mx-0 md:mt-10
      "
    >
      <div className="grid h-[60vh] place-content-center">
        <DynamicStatusIndicator />
      </div>
    </main>
  )
}

export default Day2
