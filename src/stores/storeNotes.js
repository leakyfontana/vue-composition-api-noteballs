// stores/counter.js
import { defineStore } from "pinia";

const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget vestibulum erat. Integer vitae nunc quis nisl dignissim porttitor. Phasellus.",
        },
        {
          id: "id2",
          content: "This is a shorter note!",
        },
      ],
    };
  },
  actions: {
    addNote(newNoteContent) {
      let currentDate = new Date().getTime(),
        id = currentDate.toString();

      let note = {
        id,
        content: newNoteContent,
      };

      this.notes.unshift(note);
    },
    deleteNote(id) {
        this.notes = this.notes.filter(note => { return note.id !== id })
    },
  },
});

export default useStoreNotes;
