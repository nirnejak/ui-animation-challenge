import * as React from "react"

import type { Viewport } from "next"
import { ViewTransitions } from "next-view-transitions"

import { Inter, Geist_Mono } from "next/font/google"

import classNames from "@/utils/classNames"
import { renderSchemaTags } from "@/utils/schema"

import DotPattern from "@/components/DotPattern"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

import "../styles/main.css"

const sansFont = Inter({
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

        <body className={"overflow-x-hidden bg-zinc-50 font-mono p-6 md:p-20"}>
          <Header />
          {children}
          <Footer />

          <DotPattern />
        </body>
      </html>
    </ViewTransitions>
  )
}

export default RootLayout
