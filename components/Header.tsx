"use client"
import * as React from "react"

import { Link } from "next-view-transitions"
import { usePathname } from "next/navigation"

import classNames from "@/utils/classNames"

import { TextScramble } from "@/components/atoms/text-scramble"

const links = [
  {
    href: "/day-1/",
    text: "Day 1 - Fluid Menu Animation",
  },
  {
    href: "/day-2/",
    text: "Day 2 - Dynamic Status Indicator",
  },
  {
    href: "/day-3/",
    text: "Day 3 - Animated Checkboxes",
  },
  {
    href: "/day-4/",
    text: "Day 4 - Animated Toggles",
  },
  {
    href: "/day-5/",
    text: "Day 5 - Shared Layout Tabs",
  },
]

const Header: React.FC = () => {
  const pathname = usePathname()

  return (
    <header
      className="
        grid grid-cols-1
        md:grid-cols-5
      "
    >
      <section
        className="
          col-span-3 flex flex-col-reverse items-start justify-between
          md:flex-col
        "
      >
        <Link href="/">
          <h1
            className="
              text-2xl tracking-tight text-zinc-800
              md:text-3xl
            "
          >
            <TextScramble className="uppercase">Peerlist</TextScramble>
            <TextScramble className="uppercase">UI Animation</TextScramble>
            <TextScramble className="uppercase">Challenge</TextScramble>
          </h1>
        </Link>

        <a
          href="https://x.com/jeetnirnejak"
          target="_blank"
          className="
            mb-2 text-sm tracking-tight text-zinc-500 transition-colors
            hover:text-zinc-800
            md:mb-0 md:text-lg
          "
        >
          <TextScramble>by Jitendra Nirnejak</TextScramble>
        </a>
      </section>
      <section
        className="
          col-span-2 mt-16 flex flex-col gap-3
          md:mt-0
        "
      >
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
