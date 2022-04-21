"use srict";

let allNotes = [];

function Note() {
  this.noteCanvas = document.createElement('li');
  this.noteCanvas.innerHTML = `<input type='checkbox'><textarea></textarea>
  <button class = 'deleteButton' onclick = deleteNote(this)>x</button>`;
  noteContainer.append(this.noteCanvas);
}

function createNewNote() {
  let newNote = new Note();
  allNotes.push(newNote);
}

function deleteNote(btn) {
  let element = btn.parentNode;
  element.remove();
}

creationButton.addEventListener("click",createNewNote);
