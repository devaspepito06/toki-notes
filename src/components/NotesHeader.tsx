import { Button } from "./ui/button"
import { RiAddFill } from "@remixicon/react"

type NotesHeaderProps = {
  theme: string
}

export const NotestHeader = ({ theme }: NotesHeaderProps) => {
  const hanldeClickTest = () => {
    alert("Add Note Clicked!")
  }

  return (
    <div className="flex h-10 w-full items-center justify-center p-1">
      <Button
        className={`h-8 bg-transparent font-medium transition-colors duration-300 hover:cursor-pointer hover:bg-gray-600 ${theme === "dark" ? "text-gray-400 hover:text-white" : "text-slate-900"} ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-amber-100"}`}
        onClick={hanldeClickTest}
      >
        <RiAddFill className="size-4" />
        Add Note
      </Button>
    </div>
  )
}
