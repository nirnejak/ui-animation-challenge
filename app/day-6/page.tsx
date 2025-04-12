import * as React from "react"

import { getMetadata } from "@/utils/metadata"

import Message from "@/components/Message"

export const metadata = getMetadata({
  path: "/day-6/",
  title: "Day 6 - UI Animation Challenge",
  description: "Day 6 - UI Animation Challenge",
})

const Day6: React.FC = () => {
  return <Message message="Not yet announced" />
}

export default Day6
