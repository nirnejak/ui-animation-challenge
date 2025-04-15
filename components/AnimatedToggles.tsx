"use client"
import * as React from "react"

import { AnimatePresence, motion } from "motion/react"
import classNames from "@/utils/classNames"
import { BASE_TRANSITION } from "@/utils/animation"

const AnimatedToggles: React.FC = () => {
  const [tab, setTab] = React.useState<"free" | "annual" | "monthly">("free")

  return (
    <div className="font-sora relative flex items-center rounded-full text-white p-1 border border-zinc-200 shadow-md max-w-lg h-[72px]">
      <motion.div
        animate={{
          right: tab === "free" ? "auto" : 4,
          left: tab === "free" ? 4 : "auto",
        }}
        transition={{ type: "spring", bounce: 0, duration: 0.7 }}
        className="absolute top-1 z-10 rounded-full bg-black w-[251px] h-[62px]"
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
              className="font-semibold text-lg top-3 absolute text-black"
              initial={false}
              animate={{ opacity: 1, y: -4 }}
              exit={{ opacity: 0, y: 2 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
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
              className="absolute flex items-center gap-1 text-black text-sm font-normal"
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
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
                originY: "bottom",
              }}
              className="relative grid grid-cols-2 size-full items-center"
            >
              <motion.div
                initial={false}
                animate={{
                  scale: 1,
                  right: tab === "monthly" ? "auto" : 4,
                  left: tab === "monthly" ? 4 : "auto",
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                style={{ transformOrigin: "50% 50%" }}
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
                  "transition-colors duration-200 text-lg z-30 text-center",
                  tab === "monthly"
                    ? "text-black font-semibold"
                    : "text-white font-semibold"
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
                  "transition-colors duration-200 text-lg z-30 text-center",
                  tab === "annual"
                    ? "text-black font-semibold"
                    : "text-white font-semibold"
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
