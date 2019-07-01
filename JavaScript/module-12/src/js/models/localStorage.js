import {
    refs
} from '../utils/constants';
import {
    createNotes
} from './view';


export const load = key => {
    try {
        const serializedState = localStorage.getItem(key);

        return serializedState === null ? null : JSON.parse(serializedState);
    } catch (err) {
        console.error('Get state error: ', err);
    }
};

export const save = (key, value) => {
    try {
        const serializedState = JSON.stringify(value);
        localStorage.setItem(key, serializedState);
    } catch (err) {
        console.error('Set state error: ', err);
    }
};

export const remove = (key) => {
    try {
        const serializedState = localStorage.removeItem(key);

        return serializedState;
    } catch (err) {
        console.error('Get state error: ', err);
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