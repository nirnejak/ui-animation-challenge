import * as React from "react"

import { TextScramble } from "@/components/text-scramble"
import { Link } from "next-view-transitions"

const Header: React.FC = () => {
  return (
    <header className="grid grid-cols-1 md:grid-cols-2">
      <section className="flex flex-col justify-between">
        <Link href="/">
          <h1 className="text-2xl text-zinc-800">
            <TextScramble className="uppercase">Peerlist</TextScramble>
            <TextScramble className="uppercase">UI Animation</TextScramble>
            <TextScramble className="uppercase">Challenge</TextScramble>
          </h1>
        </Link>

        <div className="fixed bottom-4 right-0 md:static flex gap-6 justify-center md:justify-start w-full">
          <a
            href="https://x.com/jeetnirnejak"
            target="_blank"
            className="text-zinc-500 hover:text-zinc-800 transition-colors text-xs md:text-base"
          >
            <TextScramble>by Jitendra Nirnejak</TextScramble>
          </a>
        </div>
      </section>
      <section className="flex flex-col gap-2 text-sm md:text-base mt-20 md:mt-0">
        <Link href="/day-1/" className="text-zinc-800">
          <span className="text-zinc-500">Day 1 </span>- Fluid Menu Animation
        </Link>
        <Link href="/day-2/" className="text-zinc-800">
          <span className="text-zinc-500">Day 2 </span>- Coming Soon
        </Link>
        <Link href="/day-3/" className="text-zinc-800">
          <span className="text-zinc-500">Day 3 </span>- Coming Soon
        </Link>
        <Link href="/day-4/" className="text-zinc-800">
          <span className="text-zinc-500">Day 4 </span>- Coming Soon
        </Link>
        <Link href="/day-5/" className="text-zinc-800">
          <span className="text-zinc-500">Day 5 </span>- Coming Soon
        </Link>
        <Link href="/day-6/" className="text-zinc-800">
          <span className="text-zinc-500">Day 6 </span>- Coming Soon
        </Link>
      </section>
    </header>
  )
}

export default Header
