import * as React from "react"

import { getMetadata } from "@/utils/metadata"

import Message from "@/components/Message"

export const metadata = getMetadata({
  path: "/day-4/",
  title: "Day 4 - UI Animation Challenge",
  description: "Day 4 - UI Animation Challenge",
})

const Day4: React.FC = () => {
  return <Message message="Not yet announced" />
}

export default Day4
