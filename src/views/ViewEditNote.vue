<template>
    <div class="edit-note">
        <AddEditNote v-model="noteContent" bgColor="link" label="Edit Note" placeholder="Edit note" ref="addEditNoteRef">
            <template #buttons>
                <button @click="$router.back()" class="button is-link is-light mr-2">
                    Cancel
                </button>
                <button @click="handleSave" class="button is-link has-background-link" :disabled="!noteContent">
                    Save Note
                </button>
            </template>
        </AddEditNote>
    </div>
</template>

<script setup>
/*
    imports
*/

import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AddEditNote from '../components/Notes/AddEditNote.vue';
import useStoreNotes from "@/stores/storeNotes";

/*
    router
*/

const route = useRoute()
const router = useRouter()

/*
    store
*/

const storeNotes = useStoreNotes()

/*
    note
*/

const noteContent = ref('')

noteContent.value = storeNotes.getNoteContent(route.params.id)

/*
    save clicked
*/

const handleSave = () => {
    storeNotes.updateNote(route.params.id, noteContent.value)
    router.push('/')
}

</script>