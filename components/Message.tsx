import * as React from "react"
import Footer from "./Footer"

interface Props {
  message: string
}

const Message: React.FC<Props> = ({ message }) => {
  return (
    <>
      <main className="w-full mt-6 md:mt-12 rounded-xl bg-zinc-50 border border-zinc-200">
        <div className="h-[300px] grid place-content-center">{message}</div>
      </main>
      <Footer />
    </>
  )
}

export default Message
