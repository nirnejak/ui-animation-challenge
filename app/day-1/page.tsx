import * as React from "react"

import { getMetadata } from "@/utils/metadata"

import Message from "@/components/Message"

export const metadata = getMetadata({
  path: "/day-1/",
  title: "Day 1 - UI Animation Challenge",
  description: "Day 1 - UI Animation Challenge",
})

const Day1: React.FC = () => {
  return <Message message="Fluid Menu Animation" />
}

export default Day1
