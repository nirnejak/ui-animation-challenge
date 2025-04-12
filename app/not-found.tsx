import * as React from "react"

import { getMetadata } from "@/utils/metadata"

export const metadata = getMetadata({
  path: "/",
  title: "Not Found | UI Animation Challenge",
  description: "Page not found on UI Animation Challenge",
})

const NotFound: React.FC = () => {
  return (
    <main className="mt-36 text-center">
      <h1 className="mb-3 text-5xl tracking-tight text-zinc-800">404</h1>
    </main>
  )
}

export default NotFound
