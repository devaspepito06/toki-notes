import React from "react";
import { NotesContext } from "./note-context";
import { useNotes } from "@/hooks/useNotes";

export const NotesProvider = ({children}: {children: React.ReactNode}) => {
    const notesState = useNotes()

    return (
        <NotesContext.Provider value={notesState}>{children}</NotesContext.Provider>
    )
    
}