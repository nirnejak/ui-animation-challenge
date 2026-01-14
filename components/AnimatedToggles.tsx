"use client"
import * as React from "react"

import { AnimatePresence, motion } from "motion/react"

import classNames from "@/utils/classNames"

const AnimatedToggles: React.FC = () => {
  const [tab, setTab] = React.useState<"free" | "annual" | "monthly">("free")

  return (
    <div
      className="
        relative flex h-[72px] max-w-lg scale-60 items-center rounded-full
        border border-zinc-200 p-1 font-sora tracking-tight text-white shadow-md
        md:scale-100
      "
    >
      <motion.div
        animate={{
          right: tab === "free" ? "auto" : 4,
          left: tab === "free" ? 4 : "auto",
        }}
        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
        className="absolute top-1 z-10 h-[62px] w-[251px] rounded-full bg-black"
      />
      <div
        className={classNames(
          "z-20 w-[251px] h-[62px] flex items-center justify-center",
          "font-semibold text-lg cursor-pointer",
          "duration-300 transition-colors",
          tab === "free" ? "text-white" : "text-black"
        )}
        onClick={() => setTab("free")}
      >
        Free
      </div>
      <div
        onClick={() => setTab("monthly")}
        className={classNames(
          "z-20 w-[251px] h-[62px] flex flex-col items-center justify-center cursor-pointer relative"
        )}
      >
        <AnimatePresence initial={false}>
          {tab === "free" && (
            <motion.div
              key={tab}
              className="absolute text-lg font-semibold text-black"
              initial={false}
              animate={{ opacity: 1, top: 8 }}
              exit={{ opacity: 1, top: 12 }}
              transition={{ duration: 0.2, ease: "linear" }}
            >
              Premium
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence initial={false}>
          {tab === "free" && (
            <motion.div
              initial={{ scale: 1.7, y: 0 }}
              animate={{ scale: 1, y: 12 }}
              exit={{ scale: 1.7, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="
                absolute flex items-center gap-1 text-sm font-normal text-black
              "
            >
              Monthly
              <span className="block size-1 rounded-full bg-black" />
              Annual
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {tab !== "free" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.2 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ transformOrigin: "bottom" }}
              className="relative grid size-full grid-cols-2 items-center"
            >
              <motion.div
                initial={false}
                animate={{
                  scale: 1,
                  right: tab === "monthly" ? "auto" : 4,
                  left: tab === "monthly" ? 4 : "auto",
                }}
                transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                className={classNames(
                  "absolute top-1 z-10 rounded-full bg-white w-[121px] h-[54px]"
                )}
              />
              <div
                onClick={(e) => {
                  e.stopPropagation()
                  setTab("monthly")
                }}
                className={classNames(
                  "transition-colors duration-200 text-base z-30 text-center font-semibold",
                  tab === "monthly" ? "text-black" : "text-white"
                )}
              >
                Monthly
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation()
                  setTab("annual")
                }}
                className={classNames(
                  "transition-colors duration-200 text-base z-30 text-center font-semibold",
                  tab === "annual" ? "text-black" : "text-white"
                )}
              >
                Annual
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default AnimatedToggles
