import * as React from "react"

import type { Viewport } from "next"
import { ViewTransitions } from "next-view-transitions"

import { Inter, Geist_Mono, Bricolage_Grotesque } from "next/font/google"

import classNames from "@/utils/classNames"
import { renderSchemaTags } from "@/utils/schema"

import Header from "@/components/Header"

import "../styles/main.css"

const sansFont = Bricolage_Grotesque({
  variable: "--sans-font",
  subsets: ["latin"],
  display: "swap",
})

const monoFont = Geist_Mono({
  variable: "--mono-font",
  subsets: ["latin"],
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: "#000000",
}

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={classNames(sansFont.variable, monoFont.variable)}
      >
        <head>
          <script
            defer
            data-domain="ui-animation-challenge.vercel.app"
            src="https://plausible.io/js/script.js"
          />
          {renderSchemaTags()}
        </head>

        <body className="overflow-x-hidden bg-zinc-100 font-mono p-6 md:p-16">
          <Header />
          {children}
        </body>
      </html>
    </ViewTransitions>
  )
}

export default RootLayout
