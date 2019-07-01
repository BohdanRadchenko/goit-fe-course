import noteTemplate from '../../templates/note.hbs';
import {
    refs
} from '../utils/constants';
import initialNotes from '../../assets/notes.json';
// import {
//     notes
// } from '../app';
// import * as api from '../services/api';
// import Notes from '../models/class';

export const createNote = note => noteTemplate(note);

export const createNotes = note => note.map(note => noteTemplate(note)).join('');

// refs.noteList.insertAdjacentHTML('beforeend', createNotes(initialNotes));