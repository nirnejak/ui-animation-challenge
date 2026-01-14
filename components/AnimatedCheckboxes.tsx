"use client"
import * as React from "react"

import Checkbox from "@/components/Checkbox"

const initialTasks = [
  { id: "c-1", label: "Buy Groceries", isCompleted: false },
  { id: "c-2", label: "Contemplate existence", isCompleted: true },
  { id: "c-3", label: "Learn Swift UI", isCompleted: false },
]

const AnimatedCheckboxes = () => {
  const [tasks, setTasks] = React.useState(initialTasks)

  return (
    // eslint-disable-next-line better-tailwindcss/enforce-consistent-line-wrapping
    <section className="flex flex-col items-start space-y-2 font-inter tracking-tight">
      {tasks.map((task) => (
        <Checkbox
          key={task.id}
          id={task.id}
          label={task.label}
          isChecked={task.isCompleted}
          setIsChecked={(isCompleted) => {
            setTasks(
              tasks.map((t) => (t.id === task.id ? { ...t, isCompleted } : t))
            )
          }}
        />
      ))}
    </section>
  )
}

export default AnimatedCheckboxes
