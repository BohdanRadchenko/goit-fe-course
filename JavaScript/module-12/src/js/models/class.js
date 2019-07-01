'use strict';

import {
    load,
    save
} from './localStorage';

export default class Notes {
    constructor(notes = []) {
        this._notes = notes;
    }

    get notes() {
        return this._notes;
    }

    saveListItem(item) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const newItem = {
                    id: item.id,
                    title: item.title,
                    body: item.body,
                    priority: item.priority,
                }

                this._notes.push(newItem);
                save('notes', this._notes);
                resolve(newItem);
            }, 2000);
        })
    };

    filterNote(query = '') {
        return this._notes.filter(note => note.title.toLowerCase().includes(query) || note.body.toLowerCase().includes(query));
    }

    removeNote(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this._notes = this._notes.filter(note => note.id !== id);
                save('notes', this._notes);
                resolve(this._notes);
            }, 1000)
        })

    }
}