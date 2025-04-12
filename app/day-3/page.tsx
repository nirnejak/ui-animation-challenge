import * as React from "react"

import { getMetadata } from "@/utils/metadata"

import Message from "@/components/Message"

export const metadata = getMetadata({
  path: "/day-3/",
  title: "Day 3 - UI Animation Challenge",
  description: "Day 3 - UI Animation Challenge",
})

const Day3: React.FC = () => {
  return <Message message="Not yet announced" />
}

export default Day3
