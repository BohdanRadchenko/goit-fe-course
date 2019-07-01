'use strict';

import {
    refs
} from '../utils/constants';
import {
    createNotes
} from './view';


export const load = (key) => {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState === null ? null : JSON.parse(serializedState);
    } catch (error) {
        console.error('error: ', error);
    }
};

export const save = (key, value) => {
    try {
        const serializedState = JSON.stringify(value);
        localStorage.setItem(key, serializedState);
    } catch (error) {
        console.error('error: ', error);
    }
};

export const remove = (key) => {
    try {
        const serializedState = localStorage.removeItem(key);

        return serializedState;
    } catch (error) {
        console.error('error: ', error);
    }
}

export const titleMessage = load('titleInput');
export const bodyMessage = load('bodyInput');

titleMessage ? refs.inputTitle.value = titleMessage : null;
bodyMessage ? refs.inputBody.value = bodyMessage : null;

export const localNotes = load('notes');

if (localNotes) {
    refs.noteList.innerHTML = createNotes(localNotes);
}