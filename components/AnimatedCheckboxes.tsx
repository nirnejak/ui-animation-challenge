"use client"
import * as React from "react"

import Checkbox from "@/components/Checkbox"

const AnimatedCheckboxes = () => {
  return (
    <section className="flex flex-col items-start space-y-2 font-inter tracking-tight">
      <Checkbox id="c-1" label="Buy Groceries" />
      <Checkbox id="c-2" label="Contemplate existence" />
      <Checkbox id="c-3" label="Learn Swift UI" />
    </section>
  )
}

export default AnimatedCheckboxes
