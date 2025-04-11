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

        <div className="flex gap-6 mt-16">
          <a
            href="https://x.com/jeetnirnejak"
            className="text-zinc-500 hover:text-zinc-800 transition-colors text-lg"
          >
            <TextScramble className="font-mono">Twitter</TextScramble>
          </a>
          <a
            href="http://peerlist.io/nirnejak"
            className="text-zinc-500 hover:text-zinc-800 transition-colors text-lg"
          >
            <TextScramble className="font-mono">Peerlist</TextScramble>
          </a>
        </div>
      </div>
    </main>
  )
}

export default Home
