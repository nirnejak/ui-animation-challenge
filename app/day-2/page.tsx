import * as React from "react"

import { getMetadata } from "@/utils/metadata"

import Message from "@/components/Message"

export const metadata = getMetadata({
  path: "/day-2/",
  title: "Day 2 - UI Animation Challenge",
  description: "Day 2 - UI Animation Challenge",
})

const Day2: React.FC = () => {
  return <Message message="Not yet announced" />
}

export default Day2
