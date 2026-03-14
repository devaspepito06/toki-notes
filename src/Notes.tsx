import { NotestHeader } from "./components/NotesHeader"

type NotesProps = {
  theme: string
}

export const Notes = ({ theme }: NotesProps) => {
  return (
    // <div className="bg-blue-950 h-full w-full">
    <div className="h-full w-full">
      <NotestHeader theme={theme} />
    </div>
  )
}
