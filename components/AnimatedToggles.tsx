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
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
        className={classNames(
          "absolute top-1 z-10 rounded-full bg-black w-[251px] h-[62px]"
        )}
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
              animate={{ opacity: 1, y: -3 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              Premium
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={false}
          animate={{
            scale: 1,
            // left: tab === "monthly" ? 4 : 125,
            opacity: tab === "free" ? 0 : 1,
            right: tab === "monthly" ? "auto" : 4,
            left: tab === "monthly" ? 4 : "auto",
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
            origin: "bottom right",
          }}
          className={classNames(
            "absolute top-1 z-10 rounded-full bg-white w-[121px] h-[54px]"
          )}
        />

        <motion.div
          initial={false}
          animate={{
            y: tab === "free" ? 12 : 0,
            scale: tab === "free" ? 1 : 1.2,
            left: tab === "free" ? 60 : 36,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute text-sm z-30"
          onClick={(e) => {
            e.stopPropagation()
            setTab("monthly")
          }}
        >
          <span
            className={classNames(
              "transition-colors duration-200",
              tab === "free"
                ? "text-black font-normal"
                : tab === "monthly"
                  ? "text-black font-semibold"
                  : "text-white font-semibold"
            )}
          >
            Monthly
          </span>
        </motion.div>
        <motion.span
          initial={false}
          animate={{ opacity: tab === "free" ? 1 : 0 }}
          style={{ top: 41 }}
          className="absolute size-1 rounded-full bg-black block"
        />
        <motion.div
          initial={false}
          animate={{
            y: tab === "free" ? 12 : 0,
            scale: tab === "free" ? 1 : 1.2,
            right: tab === "free" ? 64 : 36,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute text-sm z-30"
          onClick={(e) => {
            e.stopPropagation()
            setTab("annual")
          }}
        >
          <span
            className={classNames(
              "transition-colors duration-200",
              tab === "free"
                ? "text-black font-normal"
                : tab === "annual"
                  ? "text-black font-semibold"
                  : "text-white font-semibold"
            )}
          >
            Annual
          </span>
        </motion.div>
      </div>
    </div>
  )
}

export default AnimatedToggles
