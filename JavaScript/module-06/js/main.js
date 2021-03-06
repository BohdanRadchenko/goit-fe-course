'use script';
class Notepad {
    constructor(notes = []) {
        this._notes = notes;
    }

    get notes() {
        return this._notes;
    };

    set notes(notes) {
        this._notes = notes;
    }

    findNoteById(id) {
        let result;
        for (const note of this._notes) {
            if (note.id === id) {
                result = note;
                break;
            }
        }
        return result;
    };

    saveNote(note) {
        return this._notes.push(note);
    };

    deleteNote(id) {
        for (let i = 0; i < this._notes.length; i ++) {
            if (this._notes[i].id === id) {
                this._notes.splice(i, 1);
                return this;
            }
        }
    };

    updateNoteContent(id, updatedContent) {
        for (let i = 0; i < this._notes.length; i ++) {
            if (this._notes[i].id === id) {
                this._notes[i] = {
                    ...this._notes[i],
                    ...updatedContent
                };
                return this._notes[i];
            }
        }
    };

    updateNotePriority(id, priority) {
        for (let i = 0; i < this._notes.length; i ++) {
            if (this._notes[i].id === id) {
                this._notes[i].priority = priority;
                return this._notes[i];
            }
        }
    };

    filterNotesByQuery(query) {
        const queryArr = [];
        for (let i = 0; i < this._notes.length; i ++) {
            const titleToLowerCase = this._notes[i].title.toLowerCase();
            const bodyToLowerCase = this._notes[i].body.toLowerCase();
            if (titleToLowerCase.includes(query) || bodyToLowerCase.includes(query)) {
                queryArr.push(this._notes[i]);
            }
        }
        return queryArr;
    };

    filterNotesByPriority(priority) {
        const priorityArr = [];

        for (let i = 0; i < this._notes.length; i ++) {
            if (this._notes[i].priority === priority) {
                priorityArr.push(this._notes[i]);
            }
        }
        return priorityArr;
    };

    static Priority = {
        LOW: 0,
        NORMAL: 1,
        HIGH: 2,
    };

}

const initialNotes = [{
        id: 'id-1',
        title: 'JavaScript essentials',
        body: 'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
        priority: Notepad.Priority.HIGH,
    },
    {
        id: 'id-2',
        title: 'Refresh HTML and CSS',
        body: 'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
        priority: Notepad.Priority.NORMAL,
    },
];

const notepad = new Notepad(initialNotes);

console.log('Все текущие заметки: ', notepad.notes);

notepad.saveNote({
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body: 'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: Notepad.Priority.NORMAL,
});

notepad.saveNote({
    id: 'id-4',
    title: 'Winter clothes',
    body: "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: Notepad.Priority.LOW,
});

console.log('Все текущие заметки: ', notepad.notes);

notepad.updateNotePriority('id-4', Notepad.Priority.NORMAL);

console.log('Заметки после обновления приоритета для id-4: ', notepad.notes);

notepad.updateNotePriority('id-3', Notepad.Priority.LOW);

console.log('Заметки после обновления приоритета для id-3: ', notepad.notes);


console.log(
    'Отфильтровали заметки по ключевому слову "html": ',
    notepad.filterNotesByQuery('html'),
);


console.log(
    'Отфильтровали заметки по ключевому слову "javascript": ',
    notepad.filterNotesByQuery('javascript'),
);

console.log(
    'Отфильтровали заметки по нормальному приоритету: ',
    notepad.filterNotesByPriority(Notepad.Priority.NORMAL),
);


notepad.updateNoteContent('id-3', {
    title: 'Get comfy with React.js or Vue.js',
});

console.log(
    'Заметки после обновления контента заметки с id-3: ',
    notepad.notes,
);

notepad.deleteNote('id-2');
console.log('Заметки после удаления с id -2: ', notepad.notes);
