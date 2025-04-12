"use client"
import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Home, Mail, Menu, Settings, User, X } from "lucide-react"

import { GooeyFilter } from "@/components/gooey-filter"

const MENU_ITEMS = [
  { icon: Home, label: "Home" },
  { icon: Mail, label: "Contact" },
  { icon: User, label: "Profile" },
  { icon: Settings, label: "Settings" },
]

const FluidMenu: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <section>
      <GooeyFilter id="gooey-filter-menu" strength={5} />
      <div style={{ filter: "url(#gooey-filter-menu)" }}>
        <AnimatePresence>
          {isOpen &&
            MENU_ITEMS.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.button
                  key={item.label}
                  className="absolute w-12 h-12 bg-[#efefef] rounded-full flex items-center justify-center cursor-pointer"
                  initial={{ x: 0, opacity: 0 }}
                  animate={{
                    y: (index + 1) * 44,
                    opacity: 1,
                  }}
                  exit={{
                    y: 0,
                    opacity: 0,
                    transition: {
                      delay: (MENU_ITEMS.length - index) * 0.05,
                      duration: 0.4,
                      type: "spring",
                      bounce: 0,
                    },
                  }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.4,
                    type: "spring",
                    bounce: 0,
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, filter: "blur(10px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, filter: "blur(10px)" }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.2,
                        type: "spring",
                        bounce: 0,
                      }}
                    >
                      <a>
                        <Icon className="w-5 h-5 text-zinc-500 hover:text-black" />
                      </a>
                    </motion.div>
                  </AnimatePresence>
                </motion.button>
              )
            })}
        </AnimatePresence>

        <motion.button
          className="relative w-12 h-12 bg-[#efefef] rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5 text-black cursor-pointer" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-5 h-5 text-black" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </section>
  )
}

export default FluidMenu
