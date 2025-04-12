import * as React from "react"

import { getMetadata } from "@/utils/metadata"

export const metadata = getMetadata({
  path: "/",
  title: "Not Found | UI Animation Challenge",
  description: "Page not found on UI Animation Challenge",
})

const NotFound: React.FC = () => {
  return (
    <h1 className="mt-36 text-5xl tracking-tight text-zinc-800 text-center">
      404
    </h1>
  )
}

export default NotFound
