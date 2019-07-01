import 'notyf/notyf.min.css';
import MicroModal from 'micromodal';

import * as api from './services/api';
import initialNotes from '../assets/notes.json'
import {
    PRIORITY_TYPES,
    NOTIFICATION_MESSAGES,
    notyf,
    refs,
} from './utils/constants';

import {
    createNote,
    createNotes,
} from './models/view';

import Notes from './models/class';

// class expample

// const notes = new Notes(test);
export const notes = new Notes(initialNotes);
notes.getNotes().then(notes => refs.noteList.insertAdjacentHTML('beforeend', createNotes(notes)));
console.log(notes.notes)

// handlers

const handleModal = () => {
    MicroModal.show('note-editor-modal');
}

const handleFormSubmit = (event) => {
    event.preventDefault();
    const [inputTitle, inputBody, submit, cancel] = event.currentTarget.elements;
    const titleValue = inputTitle.value;
    const bodyValue = inputBody.value;

    if (titleValue.trim() === '' || bodyValue.trim() === '') {
        return notyf.error(NOTIFICATION_MESSAGES.EDITOR_FIELDS_EMPTY);
    }

    const newItem = {
        title: titleValue,
        body: bodyValue,
        priority: PRIORITY_TYPES.LOW,
    }

    notes.saveListItem(newItem).then(savedNote => {
        newItem.id = savedNote.id
        refs.noteList.insertAdjacentHTML('beforeend', createNote(newItem))
        notyf.success(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS);
    })


    MicroModal.close('note-editor-modal');
    event.currentTarget.reset();
}

const handleNotesFilter = (event) => {
    const input = event.target.value;
    const filteredNotes = notes.filterNote(input);
    refs.noteList.innerHTML = createNotes(filteredNotes);
}

const handleListClick = (event) => {
    if (event.target.textContent !== 'delete') return
    const parentItem = event.target.closest('li');
    const id = parentItem.dataset.id;

    notes.removeNote(id).then(() => {
        parentItem.remove()
        notyf.success(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS);
    });
}

// listeners

refs.searchInput.addEventListener('input', handleNotesFilter);
refs.noteList.addEventListener('click', handleListClick);
refs.editorBtn.addEventListener('click', handleModal);
refs.editorForm.addEventListener('submit', handleFormSubmit);