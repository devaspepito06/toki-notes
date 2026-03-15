import type { Note } from "@/types/note"
import { RiDeleteBin2Line } from "@remixicon/react"
import { Button } from "../ui/button"

type NotesProps = {
  theme: string
  note: Note
  onEdit: (note: Note) => void
  onDelete: (id: number) => void
}

export const NotesCard = ({ theme, note, onEdit, onDelete }: NotesProps) => {
  return (
    <div
      className={`h-[15%] w-[90%] rounded-lg border-2 transition-shadow duration-200 hover:cursor-pointer ${
        theme === "dark"
          ? "border-gray-500 hover:shadow-lg hover:shadow-gray-500"
          : "border-slate-950 hover:shadow-lg hover:shadow-slate-700"
      }`}
      onClick={() => onEdit(note)}
    >
      <div
        className={`flex rounded-t-md border-b-2 ${theme === "dark" ? "border-b-gray-500 text-neutral-300" : "border-b-slate-950 text-neutral-900"}`}
      >
        <h1 className="text-md font-extrabold">{note.title}</h1>
      </div>
      <div className="">
        <p
          className={`text-xs ${theme === "dark" ? "text-neutral-300" : "text-neutral-900"}`}
        >
          {note.note}
        </p>
      </div>
      <div className="flex gap-2">
        <Button
          variant="ghost"
          className="bg-transparent hover:cursor-pointer hover:bg-transparent hover:text-red-500"
          onClick={() => onDelete(note.id)}
        >
          <RiDeleteBin2Line className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
