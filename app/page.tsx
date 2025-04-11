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
    <main className="flex items-center h-dvh mx-32">
      <div>
        <h1 className="text-5xl text-zinc-800">
          <TextScramble className="font-mono uppercase">Peerlist</TextScramble>
          <TextScramble className="font-mono uppercase">
            UI Animation
          </TextScramble>
          <TextScramble className="font-mono uppercase">Challenge</TextScramble>
        </h1>

        <a
          href="https://x.com/jeetnirnejak"
          className="flex text-zinc-500 text-xl mt-12"
        >
          <TextScramble className="font-mono">x.com/jeetnirnejak</TextScramble>
        </a>
      </div>
    </main>
  )
}

export default Home
