"use client"
import * as React from "react"

import { motion } from "motion/react"

import classNames from "@/utils/classNames"

const items = [
  {
    id: 209,
    label: "Skilled Fingers Series",
    value: 0.855,
    image: "/zhwfznyberpnt9ztq4pb.svg",
  },
  {
    id: 808,
    label: "Vibrant Vibes Series",
    value: 0.209,
    image: "/vqwfmnpfc50mmnb3t5ow.svg",
  },
]

const totalCollectibles = 2
const totalValue = 1.064

const SharedLayoutTabs: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("list")

  return (
    <div className="font-inter font-medium">
      <p className="mb-4">Collectibles</p>
      <div className="flex gap-2 pb-4 mb-4 border-b border-[#ebebeb]">
        <button
          style={{ boxShadow: "0 .5px .5px hsla(0,0%,81%,.4)" }}
          className={classNames(
            "flex items-center gap-1 rounded-full py-1.5 md:py-2 px-2 md:px-3 cursor-pointer transition-colors duration-200 text-xs md:text-sm tracking-tight",
            activeTab === "list"
              ? "bg-[#02B3FF] text-white"
              : "bg-[#F0F0F0] text-[#838383]"
          )}
          onClick={() => setActiveTab("list")}
        >
          <svg
            id="Scroll list"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.96213 8.92451C9.35313 9.31751 9.98713 9.31551 10.3761 8.92651C10.7681 8.53551 10.7681 7.90351 10.3781 7.51251L7.53913 4.66851C7.53913 4.66851 7.53913 4.66751 7.53713 4.66651L7.52713 4.65651C7.43313 4.56651 7.32313 4.49651 7.20813 4.45051C6.97413 4.35551 6.68413 4.35851 6.45113 4.45451C6.34013 4.50151 6.23413 4.56951 6.14313 4.65651C6.14313 4.65651 6.14213 4.65851 6.14013 4.65951L6.13313 4.66651C6.12913 4.66951 6.13113 4.66851 6.13113 4.66851L3.29213 7.51251C2.90213 7.90351 2.90213 8.53551 3.29413 8.92651C3.68313 9.31551 4.31713 9.31751 4.70813 8.92451L5.83513 7.79551V16.2015L4.70813 15.0725C4.31713 14.6805 3.68313 14.6825 3.29413 15.0705C2.90213 15.4615 2.90213 16.0945 3.29213 16.4855L6.14313 19.3405C6.23713 19.4315 6.34713 19.5005 6.46213 19.5465C6.57713 19.5935 6.70313 19.6185 6.83513 19.6185C6.97113 19.6185 7.10113 19.5915 7.21913 19.5425C7.33013 19.4955 7.43613 19.4285 7.52713 19.3405L10.3781 16.4855C10.7681 16.0945 10.7681 15.4615 10.3761 15.0705C9.98713 14.6825 9.35313 14.6805 8.96213 15.0725L7.83513 16.2015V7.79551L8.96213 8.92451Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.5168 7.19727H19.9998C20.5528 7.19727 20.9998 6.75027 20.9998 6.19727C20.9998 5.64427 20.5528 5.19727 19.9998 5.19727H13.5168C12.9638 5.19727 12.5168 5.64427 12.5168 6.19727C12.5168 6.75027 12.9638 7.19727 13.5168 7.19727Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.0002 11.0977H13.5172C12.9642 11.0977 12.5172 11.5447 12.5172 12.0977C12.5172 12.6507 12.9642 13.0977 13.5172 13.0977H20.0002C20.5532 13.0977 21.0002 12.6507 21.0002 12.0977C21.0002 11.5447 20.5532 11.0977 20.0002 11.0977Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.0002 16.7988H13.5172C12.9642 16.7988 12.5172 17.2458 12.5172 17.7988C12.5172 18.3518 12.9642 18.7988 13.5172 18.7988H20.0002C20.5532 18.7988 21.0002 18.3518 21.0002 17.7988C21.0002 17.2458 20.5532 16.7988 20.0002 16.7988Z"
              fill="currentColor"
            />
          </svg>
          <span>List View</span>
        </button>
        <button
          style={{ boxShadow: "0 .5px .5px hsla(0,0%,81%,.4)" }}
          className={classNames(
            "flex items-center gap-1 rounded-full py-1.5 md:py-2 px-2 md:px-3 cursor-pointer transition-colors duration-200 text-xs md:text-sm tracking-tight",
            activeTab === "card"
              ? "bg-[#02B3FF] text-white"
              : "bg-[#F0F0F0] text-[#838383]"
          )}
          onClick={() => setActiveTab("card")}
        >
          <svg
            id="Grid interface"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.51379 2.32286C9.87146 2.36402 10.9892 3.40648 11.1233 4.76C11.2743 5.99324 11.2742 7.239 11.123 8.47223C10.982 9.8199 9.869 10.8569 8.51595 10.903C7.41981 11.0023 6.31669 11.0023 5.22055 10.903C3.8675 10.8569 2.75449 9.8199 2.61346 8.47223C2.46211 7.23765 2.46218 5.99052 2.61368 4.75596C2.76039 3.41203 3.86881 2.377 5.21882 2.3232C6.31481 2.22571 7.41779 2.2256 8.51379 2.32286ZM8.40348 3.81898C7.38224 3.72701 6.35426 3.72701 5.33302 3.81898C5.31847 3.82029 5.30388 3.82117 5.28927 3.82163C4.676 3.84087 4.16979 4.31046 4.10451 4.92166L4.10323 4.93364L4.10313 4.93363C3.96562 6.05077 3.96562 7.17923 4.10313 8.29637L4.10491 8.31225C4.16677 8.92148 4.672 9.38939 5.28393 9.40422C5.30078 9.40463 5.31762 9.40561 5.33441 9.40715C6.35473 9.50095 7.38177 9.50095 8.40209 9.40715C8.41888 9.40561 8.43572 9.40463 8.45257 9.40422C9.0645 9.38939 9.56973 8.92148 9.63159 8.31225L9.63337 8.29637C9.77088 7.17923 9.77088 6.05077 9.63337 4.93363L9.63111 4.91296C9.57315 4.30313 9.06771 3.83418 8.45565 3.82185C8.43823 3.8215 8.42083 3.82054 8.40348 3.81898Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.51339 13.0908C9.87173 13.1318 10.9892 14.1757 11.1233 15.5289C11.2743 16.7608 11.2742 18.0072 11.1232 19.2391C10.9855 20.5901 9.86941 21.63 8.51555 21.6769C7.41968 21.7743 6.31683 21.7743 5.22096 21.6769C3.86513 21.63 2.75204 20.5892 2.61337 19.2394C2.46209 18.0049 2.46221 16.7579 2.61373 15.5235C2.7617 14.1799 3.87065 13.1492 5.21806 13.0952C6.31442 12.9956 7.41656 12.9945 8.51339 13.0908ZM8.40424 14.587C7.38194 14.4959 6.35518 14.4969 5.33441 14.5908C5.3194 14.5921 5.30436 14.5931 5.28929 14.5935C4.67558 14.6128 4.17021 15.0809 4.10442 15.6904L4.10322 15.7016L4.10313 15.7015C3.96562 16.8187 3.96562 17.9471 4.10313 19.0643L4.10508 19.0818C4.16575 19.6929 4.67132 20.1627 5.28465 20.1782C5.3008 20.1786 5.31693 20.1795 5.33302 20.1809C6.35426 20.2729 7.38224 20.2729 8.40348 20.1809C8.41956 20.1795 8.43569 20.1786 8.45184 20.1782C9.06506 20.1627 9.57144 19.6921 9.63135 19.0826L9.63338 19.0642C9.77087 17.9481 9.77087 16.8187 9.63338 15.7026L9.63111 15.6819C9.5731 15.0715 9.06718 14.6021 8.45565 14.5898C8.43848 14.5894 8.42134 14.5885 8.40424 14.587Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.2768 13.0908C20.6348 13.1317 21.7526 14.1754 21.8857 15.5289C22.0377 16.7609 22.0376 18.0074 21.8856 19.2394C21.7478 20.5898 20.6332 21.63 19.279 21.6769C18.183 21.7743 17.08 21.7743 15.984 21.6769C14.6308 21.6289 13.5156 20.5906 13.3778 19.2394C13.2255 18.0049 13.2256 16.7579 13.3781 15.5235C13.5251 14.1795 14.6344 13.1492 15.9815 13.0952C17.0778 12.9956 18.18 12.9945 19.2768 13.0908ZM19.1677 14.587C18.1454 14.4959 17.1186 14.4969 16.0978 14.5908C16.0828 14.5921 16.0678 14.5931 16.0527 14.5935C15.4389 14.6128 14.934 15.0809 14.8689 15.6897L14.8676 15.7022L14.8675 15.7022C14.7291 16.8189 14.7291 17.9469 14.8675 19.0637L14.8696 19.0826C14.9295 19.692 15.4349 20.1621 16.0488 20.1782C16.0647 20.1786 16.0806 20.1795 16.0964 20.1809C17.1177 20.2729 18.1457 20.2729 19.1669 20.1809C19.183 20.1795 19.1991 20.1786 19.2153 20.1782C19.828 20.1627 20.3338 19.6926 20.3938 19.0826L20.3959 19.0636C20.5343 17.9479 20.5343 16.8189 20.3959 15.7032C20.395 15.6959 20.3942 15.6885 20.3935 15.6811C20.3361 15.0715 19.8307 14.6021 19.2191 14.5898C19.2019 14.5894 19.1848 14.5885 19.1677 14.587Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.2772 2.32286C20.6336 2.36404 21.7525 3.40716 21.8857 4.75998C22.0377 5.99323 22.0376 7.23899 21.8855 8.47222C21.7454 9.82027 20.632 10.8569 19.2794 10.903C18.1832 11.0023 17.0801 11.0023 15.984 10.903C14.6313 10.8569 13.5179 9.82027 13.3779 8.47221C13.2255 7.23765 13.2256 5.99053 13.3781 4.75597C13.5238 3.41167 14.6326 2.37699 15.9822 2.3232C17.0782 2.22571 18.1812 2.2256 19.2772 2.32286ZM19.1669 3.81898C18.1457 3.72701 17.1177 3.72701 16.0964 3.81898C16.0819 3.82029 16.0673 3.82117 16.0527 3.82163C15.4393 3.84088 14.9336 4.31045 14.869 4.92091L14.8676 4.93426L14.8675 4.93425C14.7291 6.05098 14.7291 7.17902 14.8675 8.29575L14.8694 8.313C14.9306 8.92148 15.4353 9.38938 16.0473 9.40422C16.0642 9.40463 16.081 9.40561 16.0978 9.40715C17.1182 9.50095 18.1452 9.50095 19.1655 9.40715C19.1823 9.40561 19.1991 9.40463 19.216 9.40422C19.8281 9.38938 20.3328 8.92148 20.3939 8.313L20.3959 8.29575C20.5343 7.17902 20.5343 6.05098 20.3959 4.93425C20.395 4.92694 20.3942 4.91962 20.3935 4.91229C20.3362 4.3041 19.8302 3.83417 19.2191 3.82185C19.2016 3.8215 19.1842 3.82054 19.1669 3.81898Z"
              fill="currentColor"
            />
          </svg>

          <span>Card View</span>
        </button>
        <button
          style={{ boxShadow: "0 .5px .5px hsla(0,0%,81%,.4)" }}
          className={classNames(
            "flex items-center gap-1 rounded-full py-1.5 md:py-2 px-2 md:px-3 cursor-pointer transition-colors duration-200 text-xs md:text-sm tracking-tight",
            activeTab === "pack"
              ? "bg-[#02B3FF] text-white"
              : "bg-[#F0F0F0] text-[#838383]"
          )}
          onClick={() => setActiveTab("pack")}
        >
          <svg
            id="Cards"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.1285 3.18125C11.0837 2.42153 12.3262 2.10647 13.6963 2.31094L18.1479 2.97747C18.1479 2.97747 18.1479 2.97746 18.1479 2.97747C19.521 3.18295 20.6175 3.84765 21.3078 4.85437C21.9934 5.85424 22.2323 7.12289 22.0313 8.46442C22.0313 8.46448 22.0313 8.46437 22.0313 8.46442L21.072 14.8783C20.871 16.2197 20.2712 17.3631 19.3229 18.1185C18.7661 18.562 18.1115 18.8539 17.3902 18.9795C16.8837 19.4676 16.2414 19.8435 15.5101 20.0753L11.2284 21.4815C11.2281 21.4816 11.2286 21.4814 11.2284 21.4815C9.91273 21.9161 8.63565 21.816 7.56717 21.2285C6.50585 20.6449 5.72106 19.6208 5.29546 18.3341L3.27125 12.1788C3.27109 12.1783 3.27093 12.1778 3.27077 12.1773C2.84054 10.8856 2.86119 9.593 3.36989 8.49071C3.88195 7.38115 4.85345 6.54182 6.17244 6.10763C6.17262 6.10757 6.17227 6.10769 6.17244 6.10763L8.65918 5.28633C8.96436 4.43613 9.46048 3.7126 10.1285 3.18125ZM9.95257 6.1814C9.9827 6.1141 10.003 6.04231 10.0123 5.96831C10.2288 5.26668 10.5989 4.7237 11.0623 4.35519C11.6584 3.881 12.4717 3.64487 13.4745 3.79445L17.9259 4.46094C18.9326 4.61158 19.6407 5.07554 20.0707 5.70267C20.5054 6.33662 20.703 7.20698 20.5478 8.24236L19.5885 14.6562C19.4334 15.6917 18.9896 16.4662 18.3883 16.9453C18.0102 17.2464 17.544 17.4517 16.9958 17.5226C16.9632 17.5242 16.9308 17.5279 16.8987 17.5337C16.6116 17.5621 16.3028 17.5542 15.9733 17.5049L11.523 16.8384C10.5162 16.6878 9.8081 16.224 9.37798 15.597C8.94318 14.9631 8.74539 14.0927 8.90011 13.0567L9.86039 6.64313C9.88431 6.48302 9.91523 6.32891 9.95257 6.1814ZM8.29215 6.98724L7.4166 12.8348C7.21619 14.1768 7.45522 15.4457 8.14104 16.4455C8.83154 17.4521 9.92792 18.1165 11.301 18.3219L14.5569 18.8095L10.759 20.0568L10.7577 20.0573C9.79492 20.3754 8.95577 20.2802 8.2899 19.9141C7.61681 19.5439 7.0483 18.8563 6.71981 17.8637C6.71988 17.864 6.71973 17.8635 6.71981 17.8637L4.69523 11.7073L4.69428 11.7044C4.3622 10.7082 4.40983 9.81703 4.73185 9.11925C5.05065 8.42847 5.67268 7.85122 6.64186 7.53229L8.29215 6.98724Z"
              fill="currentColor"
            />
          </svg>
          <span>Pack View</span>
        </button>
      </div>

      <motion.div
        className={classNames(
          "flex gap-3",
          activeTab === "list" && "flex-col",
          activeTab === "card" && "justify-between",
          activeTab === "pack" && "justify-center"
        )}
        layout
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            layout
            className={classNames(
              "flex gap-3",
              activeTab === "list" && "items-center",
              activeTab === "card" && "flex-col items-start"
            )}
          >
            <motion.div layout>
              <motion.img
                src={item.image}
                alt={item.label}
                className={classNames(
                  activeTab === "list" && "size-14",
                  activeTab === "card" && "md:size-full",
                  activeTab === "pack" && "size-[88px] rounded-[20px] mt-2",
                  activeTab === "pack" && index === 0 && "translate-x-[50px]",
                  activeTab === "pack" && index === 1 && "-translate-x-[50px]"
                )}
                animate={{
                  rotate: activeTab === "pack" ? (index === 0 ? -12 : 12) : 0,
                }}
                layout
              />
            </motion.div>

            <motion.div
              layout
              className={classNames(activeTab === "pack" && "hidden")}
            >
              <motion.p layout className="text-sm mb-1">
                {item.label}
              </motion.p>
              <motion.p layout className="text-sm">
                <motion.span layout className="text-black">
                  {item.value}
                </motion.span>
                <motion.span layout className="text-[#838383]">
                  {" "}
                  ETH
                </motion.span>
              </motion.p>
            </motion.div>

            <motion.div
              className={classNames(
                "ml-auto flex items-center gap-1 text-sm tracking-tight text-[#838383]",
                activeTab === "pack" && "hidden"
              )}
              style={{
                marginRight: activeTab === "list" ? "" : 8,
                marginTop: activeTab === "list" ? "" : -32,
              }}
              layout
            >
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_i_14_2337)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.751 4.72464L8.44634 1.41797C7.18501 0.155303 5.45101 0.192637 4.12965 1.51197L1.01498 4.62597C-0.302354 5.94927 -0.34102 7.68394 0.920313 8.9426L4.22498 12.2493C4.84098 12.8639 5.56901 13.1706 6.30567 13.1706C7.08034 13.1706 7.86567 12.8313 8.54167 12.1559L11.6557 9.0366C12.3097 8.38394 12.669 7.5886 12.669 6.7966C12.669 6.04127 12.351 5.32394 11.751 4.72464Z"
                    fill="#FEBE02"
                    fill-opacity="0.15"
                  ></path>
                </g>
                <defs>
                  <filter
                    id="filter0_i_14_2337"
                    x="0"
                    y="0.496094"
                    width="12.6689"
                    height="12.6746"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset></feOffset>
                    <feGaussianBlur stdDeviation="3.5"></feGaussianBlur>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.996078 0 0 0 0 0.745098 0 0 0 0 0.00784314 0 0 0 0.5 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_14_2337"
                    ></feBlend>
                  </filter>
                </defs>
              </svg>
              #{item.id}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      {activeTab === "pack" && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-sm text-black text-center mt-6"
        >
          <span>{totalCollectibles} Collectibles</span>
          <p className="text-sm">
            <span>{totalValue}</span>
            <span className="text-[#838383]"> ETH</span>
          </p>
        </motion.p>
      )}
    </div>
  )
}

export default SharedLayoutTabs
