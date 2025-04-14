"use client"
import * as React from "react"

import Checkbox from "@/components/Checkbox"

const AnimatedCheckboxes = () => {
  return (
    <section className="space-y-3 font-inter tracking-tight">
      <Checkbox id="c-1">
        <Checkbox.Indicator />
        <Checkbox.Label>Buy Groceries</Checkbox.Label>
      </Checkbox>
      <Checkbox id="c-2">
        <Checkbox.Indicator />
        <Checkbox.Label>Contemplate existence</Checkbox.Label>
      </Checkbox>
      <Checkbox id="c-3">
        <Checkbox.Indicator />
        <Checkbox.Label>Learn Swift UI</Checkbox.Label>
      </Checkbox>
    </section>
  )
}

export default AnimatedCheckboxes
