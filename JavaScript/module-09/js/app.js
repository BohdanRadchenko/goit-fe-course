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
        body: 'First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
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
    
    saveListItem({
        id = Notepad.generateUniqueId(),
        title = titleValue,
        body = bodyValue,
        priority = PRIORITY_TYPES.LOW
    }) {
        const newItem = {
            id: id,
            title: title,
            body: body,
            priority: priority,
        }

        this._notes.push(newItem);
        return newItem;
    }


    filterListItems(query = '') {
        return this._notes.filter(item => item.body.toLowerCase().includes(query.toLowerCase()) || item.title.toLowerCase().includes(query.toLowerCase()));
    }

    removeListItem(id) {
        return this._notes.map(el => {
            if (el.id === id) {
                console.log(this._notes.indexOf(el));
                this._notes.splice(this._notes.indexOf(el), 1);
            }
        })
    }

    static generateUniqueId = () =>
        Math.random()
        .toString(36)
        .substring(2, 15) +
        Math.random()
        .toString(36)
        .substring(2, 15);
}

const notepad = new Notepad(initialNotes);

const createElem = (tag, className, text) => {
    const elem = document.createElement(tag);

    Array.isArray(className) ? className.map(name => elem.classList.add(name)) : elem.classList.add(className);

    text ? elem.textContent = text : null;

    return elem;
}

const createNoteContent = (title, body) => {
    const noteContent = document.createElement('div');
    noteContent.classList.add('note__content');

    const noteTitle = createElem('h2', 'note__title', title);

    const noteBody = createElem('p', 'note__body', body);

    noteContent.append(noteTitle, noteBody);

    return noteContent;
}

const createNoteFooter = (priority) => {
    const footer = document.createElement('footer');
    footer.classList.add('note__footer');

    const sectionTop = document.createElement('section');
    sectionTop.classList.add('note__section');

    const buttonDecrease = createElem('button', 'action');
    buttonDecrease.dataset.action = NOTE_ACTIONS.DECREASE_PRIORITY;

    const iconMore = createElem('i', ['material-icons', 'action__icon'], ICON_TYPES.ARROW_UP);

    const buttonIncrease = createElem('button', 'action');
    buttonIncrease.dataset.action = NOTE_ACTIONS.INCREASE_PRIORITY;

    const iconLess = createElem('i', ['material-icons', 'action__icon'], ICON_TYPES.ARROW_DOWN);

    const notePriority = createElem('span', 'note__priority', `Priority: ${priority}`)

    const sectionBottom = document.createElement('section');
    sectionBottom.classList.add('note__section');

    const buttonEdit = createElem('button', 'action');
    buttonEdit.dataset.action = NOTE_ACTIONS.EDIT;

    const iconEdit = createElem('i', ['material-icons', 'action__icon'], ICON_TYPES.EDIT);

    const buttonDelete = createElem('button', 'action');
    buttonDelete.dataset.action = NOTE_ACTIONS.DELETE;

    const iconDelete = createElem('i', ['material-icons', 'action__icon'], ICON_TYPES.DELETE);

    buttonDecrease.appendChild(iconMore);
    buttonIncrease.appendChild(iconLess);

    buttonEdit.appendChild(iconEdit);
    buttonDelete.appendChild(iconDelete);

    sectionTop.append(buttonDecrease, buttonIncrease, notePriority)
    sectionBottom.append(buttonEdit, buttonDelete);

    footer.append(sectionTop, sectionBottom);

    return footer;
}

const refs = {
    list: document.querySelector('.note-list'),
    form: document.querySelector('.note-editor'),
    filter: document.querySelector('.search-form__input'),
}

const createListItem = ({
    id,
    title,
    body,
    priority
}) => {

    const listItem = document.createElement('li');
    listItem.classList.add('note-list__item');
    listItem.dataset.id = id;

    const noteWrap = document.createElement('div');
    noteWrap.classList.add('note');

    noteWrap.append(createNoteContent(title, body), createNoteFooter(priority));
    listItem.appendChild(noteWrap);

    return listItem;
}

const renderNoteList = (listRef, notes) => {
    const listItems = notes.map(li => createListItem(li));

    listRef.innerHTML = '';
    listRef.append(...listItems);
}

renderNoteList(refs.list, notepad.notes);



//==============

const addListItem = (listRef, {
    id = Notepad.generateUniqueId(),
    title = titleValue,
    body = bodyValue,
    priority = PRIORITY_TYPES.LOW,
}) => {
    const listItem = createListItem({
        id: id,
        title: title,
        body: body,
        priority: priority,
    })

    listRef.appendChild(listItem);
}

const handleEditorSubmit = event => {
    event.preventDefault();
    const [title, body, button] = event.target.elements;
    const titleValue = title.value;
    const bodyValue = body.value;

    if (titleValue.trim().length === 0 || bodyValue.trim().length === 0) {
        return alert('Необходимо заполнить все поля!');
    }
    const savedItem = notepad.saveListItem({
        id: Notepad.generateUniqueId(),
        title: titleValue,
        body: bodyValue,
        priority: PRIORITY_TYPES.LOW,
    })

    addListItem(refs.list, savedItem)

    event.currentTarget.reset();
}

const handleFilterChange = event => {
    const filteredItems = notepad.filterListItems(event.target.value);

    renderNoteList(refs.list, filteredItems);
}

const handleListClick = event => {
    if (event.target.nodeName !== 'I') return;

    if (event.target.textContent === ICON_TYPES.DELETE) {
        const parentItem = event.target.closest('.note-list__item');
        const id = parentItem.dataset.id;

        parentItem.remove();
        notepad.removeListItem(id);

    }
}

refs.form.addEventListener('submit', handleEditorSubmit);
refs.filter.addEventListener('input', handleFilterChange);
refs.list.addEventListener('click', handleListClick);