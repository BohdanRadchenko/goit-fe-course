'use strict';

const PRIORITY_TYPES = {
    LOW: 0,
    NORMAL: 1,
    HIGH: 2,
};

const ICON_TYPES = {
    EDIT: 'edit',
    DELETE: 'delete',
    ARROW_DOWN: 'expand_more',
    ARROW_UP: 'expand_less',
};

const NOTE_ACTIONS = {
    DELETE: 'delete-note',
    EDIT: 'edit-note',
    INCREASE_PRIORITY: 'increase-priority',
    DECREASE_PRIORITY: 'decrease-priority',
};

const initialNotes = [{
        id: 'id-1', 
        title: 'JavaScript essentials',
        body: 'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
        priority: PRIORITY_TYPES.HIGH,
    },
    {
        id: 'id-2',
        title: 'Refresh HTML and CSS',
        body: 'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
        priority: PRIORITY_TYPES.NORMAL,
    },
    {
        id: 'id-3',
        title: 'Get comfy with Frontend frameworks',
        body: 'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
        // body: 'First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
        priority: PRIORITY_TYPES.NORMAL,
    },
    {
        id: 'id-4',
        title: 'Winter clothes',
        body: "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
        priority: PRIORITY_TYPES.LOW,
    },
];


class Notepad {
    constructor(notes = []) {
        this._notes = notes;
    }

    get notes() {
        return this._notes;
    };
}

const notepad = new Notepad(initialNotes);

function createEl(tagName, className, dataName = '', dataValue = '') {
    const newElement = document.createElement(tagName);
    const classNameArr = className.split(' ');
    for (let key of classNameArr) {
        newElement.classList.add(key);
    }
    if (dataValue !== '' && dataName !== '') {
        newElement.dataset[dataName] = dataValue;
    }
    return newElement;
};

function createActionButton(dataValue) {
    const newElement = document.createElement('button');
    newElement.classList.add('action');
    newElement.dataset.action = dataValue;
    return newElement;
}

function createActionIcon(text) {
    const newElement = document.createElement('i');
    newElement.classList.add('material-icons');
    newElement.classList.add('action__icon');
    newElement.textContent = text;
    return newElement;
}

const noteList = document.querySelector('.note-list');

const renderNoteList = (listRef, notes) => {
    const list = notes.map(el => createListItem(el));
    listRef.append(...list);

    return listRef;
}

renderNoteList(noteList, notepad.notes);

function createListItem(note) {
    const noteLi = createEl('li', 'note-list__item', 'id', note.id);
    const divNote = createEl('div', 'note');
    noteLi.appendChild(divNote);

    divNote.append(createNoteContent(note));
    divNote.append(createNoteFooter(note.priority));

    console.log('noteLi :', noteLi);
    return noteLi;
}

function createNoteContent(note) {
    const divNoteContent = createEl('div', 'note__title');

    const noteTitle = createEl('h2', 'note__title');
    noteTitle.textContent = note.title;

    const noteBody = createEl('p', 'note__body');
    noteBody.textContent = note.body;

    divNoteContent.append(noteTitle, noteBody);

    return divNoteContent;
}

function createNoteFooter(priority) {
    const noteFooter = createEl('footer', 'note__footer');
    const sectionTop = createEl('section', 'note__section');

    const buttonDecrease = createActionButton('decrease-priority');
    const iconMore = createActionIcon(ICON_TYPES.ARROW_DOWN);

    const buttonIncrease = createActionButton('increase-priority');
    const iconLess = createActionIcon(ICON_TYPES.ARROW_UP);

    const span = createEl('span', 'note__priority');
    span.textContent = `Priority: ${priority}`;

    const sectionBottom = createEl('section', 'note__section');

    const buttonEdit = createActionButton('edit-note');
    const iconEdit = createActionIcon(ICON_TYPES.EDIT);

    const buttonDelete = createActionButton('delete-note');
    const iconDelete = createActionIcon(ICON_TYPES.DELETE);

    noteFooter.append(sectionTop, sectionBottom);
    sectionTop.append(buttonDecrease, buttonIncrease, span);
    sectionBottom.append(buttonEdit, buttonDelete);

    buttonDecrease.appendChild(iconMore);
    buttonIncrease.appendChild(iconLess);

    buttonEdit.appendChild(iconEdit);
    buttonDelete.appendChild(iconDelete);

    return noteFooter;
}