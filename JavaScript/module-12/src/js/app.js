'use strict';

import 'notyf/notyf.min.css';
import MicroModal from 'micromodal';

import initialNotes from '../assets/notes.json'
import {
    PRIORITY_TYPES,
    NOTIFICATION_MESSAGES,
    notyf,
    uuidv4,
    refs,
} from './utils/constants';

import {
    createNote,
    createNotes,
    noteCreateTimeout,
} from './models/view';

import Notes from './models/class';
import {
    save,
    remove,
    localNotes,
} from './models/localStorage';
import noteTemplate from '../templates/note.hbs';

const notes = localNotes ? new Notes(localNotes) : new Notes(initialNotes);

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
        id: uuidv4(),
        title: titleValue,
        body: bodyValue,
        priority: PRIORITY_TYPES.LOW
    }

    notyf.success(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS);
    notes.saveListItem(newItem).then(savedNote =>
        console.log(savedNote, notes.notes)
    );

    setTimeout(() => refs.noteList.insertAdjacentHTML('beforeend', createNote(newItem)), 300);

    MicroModal.close('note-editor-modal');
    remove('titleInput');
    remove('bodyInput');
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
    notyf.success(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS);
    setTimeout(() => parentItem.remove(), 200);
    notes.removeNote(id).then(notesAfterDelete => console.log(notesAfterDelete));
}

const handleInputRemember = (event) => {
    save('titleInput', refs.inputTitle.value);
    save('bodyInput', refs.inputBody.value);
}

refs.searchInput.addEventListener('input', handleNotesFilter);
refs.noteList.addEventListener('click', handleListClick);
refs.editorBtn.addEventListener('click', handleModal);
refs.editorForm.addEventListener('submit', handleFormSubmit);
refs.editorForm.addEventListener('keyup', handleInputRemember);