import * as React from "react"

interface Props {
  message: string
}

const Message: React.FC<Props> = ({ message }) => {
  return (
    <main className="mt-6 -mx-3.5 md:mx-0 md:mt-10 rounded-xl bg-zinc-50 border border-zinc-200">
      <div className="h-[55vh] grid place-content-center">
        <p className="text-zinc-800 tracking-tight">{message}</p>
      </div>
    </main>
  )
}

export default Message
