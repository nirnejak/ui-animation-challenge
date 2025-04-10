import * as React from "react"

import { getMetadata } from "@/utils/metadata"

import { TextScramble } from "@/components/text-scramble"

export const metadata = getMetadata({
  path: "/",
  title: "UI Animation Challenge",
  description: "UI Animation Challenge",
})

const Home: React.FC = () => {
  return (
    <main className="grid h-dvh place-content-center">
      <h1 className="text-5xl text-zinc-800">
        <TextScramble className="font-mono uppercase">
          UI Animation Challenge
        </TextScramble>
      </h1>
    </main>
  )
}

export default Home
