"use client"
import * as React from "react"

import { TextScramble } from "@/components/text-scramble"

const Footer: React.FC = () => {
  return (
    <footer className="text-center mt-6">
      <a
        href="https://x.com/jeetnirnejak"
        target="_blank"
        className="text-zinc-500 hover:text-zinc-800 transition-colors text-xs md:text-base tracking-tighter"
      >
        <TextScramble>by Jitendra Nirnejak</TextScramble>
      </a>
    </footer>
  )
}

export default Footer
