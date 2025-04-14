import * as React from "react"

import { AnimatePresence, motion } from "motion/react"

interface CheckboxContextProps {
  id: string
  isChecked: boolean
  setIsChecked: (isChecked: boolean) => void
}

const CheckboxContext = React.createContext<CheckboxContextProps>({
  id: "",
  isChecked: false,
  setIsChecked: () => {},
})

interface CheckboxProps {
  children: React.ReactNode
  id: string
}

export default function Checkbox({ children, id }: CheckboxProps) {
  const [isChecked, setIsChecked] = React.useState(false)

  return (
    <div className="flex items-center hover:bg-zinc-100 transition-colors rounded-md p-2">
      <CheckboxContext.Provider
        value={{
          id,
          isChecked,
          setIsChecked,
        }}
      >
        {children}
      </CheckboxContext.Provider>
    </div>
  )
}

function CheckboxIndicator() {
  const { id, isChecked, setIsChecked } = React.useContext(CheckboxContext)

  return (
    <label className="relative flex items-center">
      <input
        type="checkbox"
        className="sr-only"
        id={id}
        onChange={() => setIsChecked(!isChecked)}
      />
      <AnimatePresence mode="sync" initial={false}>
        {!isChecked ? (
          <svg width="20.5" height="20.5">
            <motion.rect
              x="1"
              y="1"
              width="18"
              height="18"
              rx="5"
              fill="none"
              stroke="#9f9fa9"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              exit={{ pathLength: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </svg>
        ) : (
          <motion.div
            className="size-5 rounded-md border-2 border-blue-500 bg-blue-500"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-zinc-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3.5"
                stroke="currentColor"
                className="h-3.5 w-3.5"
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                  initial={{
                    pathLength: 0,
                    opacity: 0,
                  }}
                  animate={{
                    pathLength: 1,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.2,
                    delay: 0.2,
                  }}
                />
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </label>
  )
}

Checkbox.Indicator = CheckboxIndicator

interface CheckboxLabelProps {
  children: React.ReactNode
}

function CheckboxLabel({ children }: CheckboxLabelProps) {
  const { id, isChecked } = React.useContext(CheckboxContext)

  return (
    <motion.label
      className="relative ml-2 overflow-hidden text-sm"
      htmlFor={id}
      animate={{
        x: isChecked ? [0, -4, 0] : [0, 4, 0],
        color: isChecked ? "#a1a1aa" : "#27272a",
      }}
      initial={false}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      {children}
      <motion.div
        style={{
          position: "absolute",
          bottom: "48%",
          left: 0,
          width: isChecked ? "100%" : "0%",
          height: "1px",
          transformOrigin: "left",
          background: isChecked ? "#a1a1aa" : "transparent",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isChecked ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.label>
  )
}

Checkbox.Label = CheckboxLabel
