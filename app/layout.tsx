import * as React from "react"

import type { Viewport } from "next"
import { ViewTransitions } from "next-view-transitions"

import { Geist_Mono, Inter, Mona_Sans, Sora } from "next/font/google"

import classNames from "@/utils/classNames"
import { renderSchemaTags } from "@/utils/schema"

import Header from "@/components/Header"

import "../styles/main.css"

const sansFont = Mona_Sans({
  variable: "--sans-font",
  subsets: ["latin"],
  display: "swap",
})

const monoFont = Geist_Mono({
  variable: "--mono-font",
  subsets: ["latin"],
  display: "swap",
})

const interFont = Inter({
  variable: "--inter-font",
  subsets: ["latin"],
  display: "swap",
})

const soraFont = Sora({
  variable: "--sora-font",
  subsets: ["latin"],
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: "#f4f4f5",
}

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={classNames(
          sansFont.variable,
          monoFont.variable,
          interFont.variable,
          soraFont.variable
        )}
      >
        <head>
          <script
            defer
            data-domain="ui-animation-challenge.vercel.app"
            src="https://plausible.io/js/script.js"
          />
          {renderSchemaTags()}
        </head>

        <body
          className="
            overflow-x-hidden bg-zinc-100 p-7 font-mono
            md:p-20
          "
        >
          <Header />
          {children}
        </body>
      </html>
    </ViewTransitions>
  )
}

export default RootLayout
