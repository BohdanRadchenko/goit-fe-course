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
  }
}

const notepad = new Notepad(initialNotes);

console.log('notepad :', notepad);
console.log('notepad.notes :', notepad.notes);

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
const newLi = createEl('li', 'note-list__item', 'id', notepad.notes[0/*idx*/].id);
const newDivNote = createEl('div', 'note');

const newDivNoteContent = createEl('div', 'note__content');

const newTitle = createEl('h2', 'note__title');
newTitle.textContent = notepad.notes[0/*idx*/].title;
console.log('newTitle :', newTitle);

const newBody = createEl('p', 'note__body');
newBody.textContent = notepad.notes[0/*idx*/].body;


const newFooter = createEl('footer', 'note__footer');
const newSectionTop = createEl('section', 'note__section');

const newButtonDecrease = createActionButton('decrease-priority');
const newIconMore = createActionIcon(ICON_TYPES.ARROW_DOWN);

const newButtonIncrease = createActionButton('increase-priority');
const newIconLess = createActionIcon(ICON_TYPES.ARROW_UP);

const newSpan = createEl('span', 'note__priority');
newSpan.textContent = PRIORITY_TYPES.LOW;

const newSectionBottom = createEl('section', 'note__section');

const newButtonEdit = createActionButton('edit-note');
const newIconEdit = createActionIcon(ICON_TYPES.EDIT);

const newButtonDelete = createActionButton('delete-note');
const newIconDelete = createActionIcon(ICON_TYPES.DELETE);

function createListItem(note) {

  noteList.append(newLi);
  newLi.append(newDivNote);
  
  newDivNote.append(createNoteContent());
  newDivNote.append(createNoteFooter());

  // newTiitle.textContent = note.title;
  // newBody.textContent = note.body;

  
  console.log('noteList :', noteList);  

  return newLi
}

function createNoteContent() {
  newDivNoteContent.append(newTitle, newBody);
  console.log('newDivNoteContent :', newDivNoteContent);

  return  newDivNoteContent;
}

function createNoteFooter() {
  newSectionTop.append(newButtonDecrease, newButtonIncrease);
  newSectionTop.append(newSpan);
  newSectionBottom.append(newButtonEdit, newButtonDelete);

  newButtonDecrease.appendChild(newIconMore);
  newButtonIncrease.appendChild(newIconLess);

  newButtonEdit.appendChild(newIconEdit);
  newButtonDelete.appendChild(newIconDelete);

  newFooter.append(newSectionTop, newSectionBottom);

  console.log('newFooter :', newFooter);

  return newFooter;
}

createListItem();

///!!!!!!!!!
//рендер!!!
