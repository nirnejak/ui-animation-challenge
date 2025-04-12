"use client"
import * as React from "react"

import { Link } from "next-view-transitions"
import { usePathname } from "next/navigation"

import classNames from "@/utils/classNames"

import { TextScramble } from "@/components/text-scramble"

const links = [
  {
    href: "/day-1/",
    text: "Day 1 - Fluid Menu Animation",
  },
  {
    href: "/day-2/",
    text: "Day 2 - Not yet announced",
  },
  {
    href: "/day-3/",
    text: "Day 3 - Not yet announced",
  },
  {
    href: "/day-4/",
    text: "Day 4 - Not yet announced",
  },
  {
    href: "/day-5/",
    text: "Day 5 - Not yet announced",
  },
]

const Header: React.FC = () => {
  const pathname = usePathname()

  return (
    <header className="grid grid-cols-1 md:grid-cols-5">
      <section className="flex flex-col-reverse md:flex-col justify-between items-start col-span-3">
        <Link href="/">
          <h1 className="text-2xl md:text-3xl text-zinc-800 tracking-tight">
            <TextScramble className="uppercase">Peerlist</TextScramble>
            <TextScramble className="uppercase">UI Animation</TextScramble>
            <TextScramble className="uppercase">Challenge</TextScramble>
          </h1>
        </Link>

        <a
          href="https://x.com/jeetnirnejak"
          target="_blank"
          className="tracking-tight text-zinc-500 hover:text-zinc-800 transition-colors text-sm md:text-lg mb-2 md:mb-0"
        >
          <TextScramble>by Jitendra Nirnejak</TextScramble>
        </a>
      </section>
      <section className="flex flex-col gap-3 mt-16 md:mt-0 col-span-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classNames(
              "font-mono text-zinc-800 tracking-tight text-sm md:text-base",
              pathname !== "/" && "opacity-35 hover:opacity-100 transition-all",
              pathname === link.href ? "opacity-100" : ""
            )}
          >
            <TextScramble>{link.text}</TextScramble>
          </Link>
        ))}
      </section>
    </header>
  )
}

export default Header
