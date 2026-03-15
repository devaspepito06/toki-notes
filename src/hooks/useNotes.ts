import { useEffect, useRef, useState } from "react"
import { type Note } from "@/types/note"

const STORAGE_KEY = import.meta.env.VITE_STORAGE_KEY

function loadNotesFromStorage(): Note[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as Note[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function getNextId(notes: Note[]): number {
  if (notes.length === 0) return 0
  return Math.max(...notes.map((n) => n.id), -1) + 1
}

export const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>(() => loadNotesFromStorage())
  const nextIdRef = useRef(0)

  useEffect(() => {
    nextIdRef.current = getNextId(notes)
  }, [notes])

  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [note, setNote] = useState("")
  const [editingNote, setEditingNote] = useState<Note | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [noteToDelete, setNoteToDelete] = useState<number | null>(null)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
  }, [notes])

  const addNote = () => {
    if (title.trim()) {
      const newNote: Note = {
        id: nextIdRef.current++,
        title,
        date,
        note,
      }
      setNotes([...notes, newNote])
      resetAddNote()
      setIsAddDialogOpen(false)
    }
  }

  const resetAddNote = () => {
    setTitle("")
    setDate("")
    setNote("")
  }

  const openDeleteConfirmation = (id: number) => {
    setNoteToDelete(id)
    setIsDeleteDialogOpen(true)
  }

  const confirmDelete = () => {
    if (noteToDelete) {
      setNotes(notes.filter((note) => note.id != noteToDelete))
      setIsDeleteDialogOpen(false)
      setNoteToDelete(null)
    }
  }

  const openEditDialog = (note: Note) => {
    setEditingNote({ ...note })
    setIsDialogOpen(true)
  }

  const saveEditedNote = () => {
    if (editingNote) {
      setNotes(
        notes.map((note) => (note.id === editingNote.id ? editingNote : note))
      )
      setIsDialogOpen(false)
      setEditingNote(null)
    }
  }

  const closeAddDialog = () => {
    setIsAddDialogOpen(false)
    resetAddNote()
  }

  return {
    // State
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
    noteToDelete,
    isDeleteDialogOpen,
    setIsDeleteDialogOpen,
    // Methods
    addNote,
    resetAddNote,
    openDeleteConfirmation,
    confirmDelete,
    openEditDialog,
    saveEditedNote,
    closeAddDialog,
  }
}
