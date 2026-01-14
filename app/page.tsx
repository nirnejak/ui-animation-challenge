import * as React from "react"

import { Link } from "next-view-transitions"

import { getMetadata } from "@/utils/metadata"

export const metadata = getMetadata({
  path: "/",
  title: "UI Animation Challenge",
  description: "UI Animation Challenge",
})

const Home: React.FC = () => {
  return (
    <main
      className="
        -mx-3.5 mt-6 rounded-xl border border-zinc-200 bg-zinc-50
        md:mx-0 md:mt-10
      "
    >
      <div className="flex h-[60vh] flex-col items-center justify-center gap-4">
        <p className="text-3xl">🎉</p>
        <p className="max-w-64 text-center text-sm">
          Won the Aceternity UI Pro in the Challenge. Huuuge thanks to everyone
          who supported!
        </p>
        <Link
          className="
            text-xs text-zinc-600 underline underline-offset-2
            hover:no-underline
          "
          href="https://github.com/nirnejak/ui-animation-challenge"
        >
          View Source
        </Link>
      </div>
    </main>
  )
}

export default Home
