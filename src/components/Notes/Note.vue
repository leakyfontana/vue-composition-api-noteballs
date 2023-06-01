<template>
    <div class="card mb-4">
        <div class="card-content">
            <div class="content">
                {{ note.content }}
                <div class="has-text-right has-text-grey-light mt-2">
                    <small>{{ characterLength }}</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <RouterLink class="card-footer-item" :to="`/editNote/${ note.id }`">Edit</RouterLink>
            <a href="#" class="card-footer-item" @click.prevent="storeNotes.deleteNote(note.id)">Delete</a>
        </footer>
    </div>
</template>
    
<script setup>
/* 
    imports
*/

import { computed } from 'vue'
import useStoreNotes from "@/stores/storeNotes";

/*
  store
*/

const storeNotes = useStoreNotes()

/*
    props
*/

const props = defineProps({
    note: {
        type: Object,
        required: true
    }
})

/*
    character length
*/

const characterLength = computed(() => {
    const length = props.note.content.length;
    return `${length} ${length === 1 ? 'character' : 'characters'}`
})

/*
    handleDelete
*/

const handleDelete = () => {
    emit('deleteClicked', props.note.id)
}

</script>