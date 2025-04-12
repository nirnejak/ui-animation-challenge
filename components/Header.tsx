"use client"
import * as React from "react"

import { Link } from "next-view-transitions"
import { usePathname } from "next/navigation"

import classNames from "@/utils/classNames"

import { TextScramble } from "@/components/text-scramble"

const Header: React.FC = () => {
  const pathname = usePathname()

  return (
    <header className="grid grid-cols-1 md:grid-cols-2">
      <section className="flex flex-col justify-between items-start">
        <Link href="/">
          <h1 className="text-xl md:text-2xl text-zinc-800 tracking-tight">
            <TextScramble className="uppercase">Peerlist</TextScramble>
            <TextScramble className="uppercase">UI Animation</TextScramble>
            <TextScramble className="uppercase">Challenge</TextScramble>
          </h1>
        </Link>

        <a
          href="https://x.com/jeetnirnejak"
          target="_blank"
          className="hidden md:block text-zinc-500 hover:text-zinc-800 transition-colors text-xs md:text-base tracking-tight"
        >
          <TextScramble>by Jitendra Nirnejak</TextScramble>
        </a>
      </section>
      <section className="flex flex-col gap-2 text-sm md:text-base mt-12 md:mt-0 tracking-tight font-sans">
        <Link
          href="/day-1/"
          className={classNames(
            "text-zinc-800",
            pathname !== "/" && "opacity-35 hover:opacity-100 transition-all",
            pathname === "/day-1/" ? "opacity-100" : ""
          )}
        >
          <span className="">Day 1 </span>- Fluid Menu Animation
        </Link>
        <Link
          href="/day-2/"
          className={classNames(
            "text-zinc-800",
            pathname !== "/" && "opacity-35 hover:opacity-100 transition-all",
            pathname === "/day-2/" ? "opacity-100" : ""
          )}
        >
          <span className="">Day 2 </span>- Coming Soon
        </Link>
        <Link
          href="/day-3/"
          className={classNames(
            "text-zinc-800",
            pathname !== "/" && "opacity-35 hover:opacity-100 transition-all",
            pathname === "/day-3/" ? "opacity-100" : ""
          )}
        >
          <span className="">Day 3 </span>- Coming Soon
        </Link>
        <Link
          href="/day-4/"
          className={classNames(
            "text-zinc-800",
            pathname !== "/" && "opacity-35 hover:opacity-100 transition-all",
            pathname === "/day-4/" ? "opacity-100" : ""
          )}
        >
          <span className="">Day 4 </span>- Coming Soon
        </Link>
        <Link
          href="/day-5/"
          className={classNames(
            "text-zinc-800",
            pathname !== "/" && "opacity-35 hover:opacity-100 transition-all",
            pathname === "/day-5/" ? "opacity-100" : ""
          )}
        >
          <span className="">Day 5 </span>- Coming Soon
        </Link>
        <Link
          href="/day-6/"
          className={classNames(
            "text-zinc-800",
            pathname !== "/" && "opacity-35 hover:opacity-100 transition-all",
            pathname === "/day-6/" ? "opacity-100" : ""
          )}
        >
          <span className="">Day 6 </span>- Coming Soon
        </Link>
      </section>
    </header>
  )
}

export default Header
