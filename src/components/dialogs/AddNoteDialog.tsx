import { Button } from "../ui/button"
import { Input } from "../ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import type React from "react"

interface AddNoteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  onTitleChange: (value: string) => void
  note: string
  onNoteChange: (value: string) => void
  date: string
  onDateChange: (value: string) => void
  onAdd: () => void
  onCancel: () => void
}

export const AddNoteDialog = ({
  open,
  onOpenChange,
  title,
  onTitleChange,
  note,
  onNoteChange,
  date,
  onDateChange,
  onAdd,
  onCancel,
}: AddNoteProps) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onAdd()
    }
  }
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Note</DialogTitle>
          <DialogDescription>
            Fill in the details of your new Note.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Title *</label>
            <Input
              placeholder="Title of the note..."
              value={title}
              onChange={(e) => onTitleChange(e.target.value)}
              onKeyUp={handleKeyPress}
            />
          </div>
          <div>
            <label className="text-sm font-medium">Note *</label>
            <Input
              placeholder="Note..."
              value={note}
              onChange={(e) => onNoteChange(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium">Date (auto)</label>
            <Input
              type="date"
              value={date}
              onChange={(e) => onDateChange(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={onCancel}
              className="cursor-pointer"
            >
              Cancel
            </Button>
            <Button onClick={onAdd} className="cursor-pointer">
              Add Note
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  )
}
