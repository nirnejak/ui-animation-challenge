import * as React from "react"

import { getMetadata } from "@/utils/metadata"

import Message from "@/components/Message"

export const metadata = getMetadata({
  path: "/day-5/",
  title: "Day 5 - UI Animation Challenge",
  description: "Day 5 - UI Animation Challenge",
})

const Day5: React.FC = () => {
  return <Message message="Not yet announced" />
}

export default Day5
