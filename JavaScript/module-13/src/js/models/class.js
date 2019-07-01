import * as api from '../services/api';

export default class Notes {
    constructor(notes = []) {
        this._notes = notes;
    }

    getNotes() {
        return api.getNotes().then(notes => this._notes = notes);
    }

    get notes() {
        return this._notes;
    }

    saveListItem(note) {
        return api.saveNote(note).then(saveNote => {
            this._notes.push(saveNote);
            console.log(saveNote)
            return saveNote;
        })
    };

    filterNote(query = '') {
        return this._notes.filter(note => note.title.toLowerCase().includes(query) || note.body.toLowerCase().includes(query));
    }

    removeNote(id) {
        return api.deleteNote(id).then(() => {
            this._notes = this._notes.filter(note => note.id !== id)
            return this;
        })
        
    }
}