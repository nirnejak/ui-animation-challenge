"use client"
import * as React from "react"

import { AnimatePresence, motion } from "motion/react"
import classNames from "@/utils/classNames"

const status = [
  "Analyzing Transaction",
  "Transaction Safe",
  "Analyzing Transaction",
  "Transaction Warning",
]

const DynamicStatusIndicator: React.FC = () => {
  const elementRef = React.useRef<HTMLDivElement>(null)

  const [currentStatusIndex, setCurrentStatusIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatusIndex((prev) => {
        if (prev < status.length - 1) {
          return prev + 1
        } else {
          return 0
        }
      })
    }, 2000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <motion.div
      layout
      transition={{ type: "spring", duration: 0.3 }}
      className={classNames(
        "rounded-full font-sans text-sm leading-none tracking-tight",
        getColor(status[currentStatusIndex])
      )}
    >
      <div
        ref={elementRef}
        className="w-max py-1.5 px-2.5 overflow-hidden flex items-center gap-1.5"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            transition={{ ease: "easeInOut", duration: 0.2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={currentStatusIndex}
          >
            <div>{getIcon(status[currentStatusIndex])}</div>
          </motion.span>
        </AnimatePresence>
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            transition={{ ease: "easeInOut", duration: 0.2 }}
            initial={{ opacity: 0, x: currentStatusIndex % 2 ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: currentStatusIndex % 2 ? -20 : 20 }}
            key={currentStatusIndex}
            className="py-1.5 pr-0.5"
          >
            {status[currentStatusIndex]}
          </motion.span>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default DynamicStatusIndicator

const getColor = (status: string) => {
  switch (status) {
    case "Analyzing Transaction":
      return "bg-blue-500/10 text-blue-600"
    case "Transaction Safe":
      return "bg-green-500/10 text-green-600"
    case "Transaction Warning":
      return "bg-red-500/10 text-red-600"
    default:
      return "bg-yellow-500/10 text-yellow-600"
  }
}

const getIcon = (status: string) => {
  switch (status) {
    case "Analyzing Transaction":
      return (
        <motion.svg
          width="24"
          height="24"
          className="w-4 h-4"
          animate={{ rotate: 360 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "linear",
          }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </motion.svg>
      )
    case "Transaction Safe":
      return (
        <motion.svg
          width="24"
          height="24"
          className="w-4 h-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            origin: "bottom left",
          }}
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </motion.svg>
      )
    case "Transaction Warning":
    default:
      return (
        <motion.svg
          width="24"
          height="24"
          className="w-4 h-4 ml-0.5"
          animate={{ x: [0, -3, 3, -3, 3, 0] }}
          transition={{
            delay: 0.2,
            duration: 0.3,
            ease: "easeInOut",
          }}
          fill="currentColor"
          viewBox="0 0 18 18"
        >
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        </motion.svg>
      )
  }
}
