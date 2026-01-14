"use client"
import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Home, Mail, Menu, Settings, User, X } from "lucide-react"

const MENU_ITEMS = [
  { icon: Home, label: "Home" },
  { icon: Mail, label: "Contact" },
  { icon: User, label: "Profile" },
  { icon: Settings, label: "Settings" },
]

const GooeyFilter = ({
  id = "goo-filter",
  strength = 10,
}: {
  id?: string
  strength?: number
}) => {
  return (
    <svg className="absolute hidden">
      <defs>
        <filter id={id}>
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation={strength}
            result="blur"
          />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  )
}

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
                  className="
                    absolute flex size-12 cursor-pointer items-center
                    justify-center rounded-full bg-[#efefef]
                  "
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
                        <Icon
                          className="
                            size-5 text-zinc-500
                            hover:text-black
                          "
                        />
                      </a>
                    </motion.div>
                  </AnimatePresence>
                </motion.button>
              )
            })}
        </AnimatePresence>

        <motion.button
          className="
            relative flex size-12 cursor-pointer items-center justify-center
            rounded-full bg-[#efefef]
          "
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
                <X className="size-5 cursor-pointer text-black" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="size-5 text-black" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </section>
  )
}

export default FluidMenu
