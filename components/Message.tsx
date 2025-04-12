import * as React from "react"

interface Props {
  message: string
}

const Message: React.FC<Props> = ({ message }) => {
  return (
    <main className="w-full mt-6 md:mt-8 rounded-xl bg-zinc-50 border border-zinc-200">
      <div className="h-[55vh] grid place-content-center">
        <p className="text-zinc-800 tracking-tight text-sm">{message}</p>
      </div>
    </main>
  )
}

export default Message
