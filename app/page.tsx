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
    <main className="mt-6 -mx-3.5 md:mx-0 md:mt-10 rounded-xl bg-zinc-50 border border-zinc-200">
      <div className="h-[60vh] flex flex-col justify-center items-center gap-4">
        <p className="text-3xl">🎉</p>
        <p className="max-w-64 text-sm text-center">
          Won the Aceternity UI Pro in the Challenge. Huuuge thanks to everyone
          who supported!
        </p>
        <Link
          className="text-xs text-zinc-600 underline underline-offset-2 hover:no-underline"
          href="https://github.com/nirnejak/ui-animation-challenge"
        >
          View Source
        </Link>
      </div>
    </main>
  )
}

export default Home
