import { Navbar } from "./components/Navbar"
import { Notes } from "./components/notes/Notes"
import { useTheme } from "@/components/theme-provider"
import { useNotesContext } from "./hooks/useNotesContext"
import { AddNoteDialog } from "./components/dialogs/AddNoteDialog"

export function App() {
  const { setTheme, theme } = useTheme()
  const {
    notes,
    title,
    setTitle,
    note,
    setNote,
    date,
    setDate,
    editingNote,
    setEditingNote,
    isDialogOpen,
    setIsDialogOpen,
    isAddDialogOpen,
    setIsAddDialogOpen,
    isDeleteDialogOpen,
    setIsDeleteDialogOpen,
    addNote,
    openDeleteConfirmation,
    confirmDelete,
    openEditDialog,
    saveEditedNote,
    closeAddDialog,
  } = useNotesContext()

  const toggleTheme = () => {
    const nextTheme =
      theme === "dark" ? "light" : theme === "light" ? "dark" : "dark"
    setTheme(nextTheme)
  }

  return (
    <div className="flex min-h-svh justify-center">
      <div className="flex w-[50%] flex-col gap-4 text-sm leading-loose">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Notes
          theme={theme}
          notes={notes}
          onEdit={openEditDialog}
          onDelete={openDeleteConfirmation}
        />
        <AddNoteDialog
          open={isAddDialogOpen}
          onOpenChange={setIsAddDialogOpen}
          title={title}
          onTitleChange={setTitle}
          note={note}
          onNoteChange={setNote}
          date={date}
          onDateChange={setDate}
          onAdd={addNote}
          onCancel={closeAddDialog}
        />
      </div>
    </div>
  )
}

export default App
