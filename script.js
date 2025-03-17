//Get the elements
const noteInput = document.querySelector('#noteInput');
const addNoteButton = document.querySelector('#addNote');
const notesContainer = document.querySelector('#notesContainer');

//Event listener
addNoteButton.addEventListener('click', function(){
    const noteText = noteInput.value.trim();

    if(noteText == "" || noteText.length > 50){
        alert("Please enter a note within 15 characters");
        
    } else{
        //Create a new note div
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.textContent = noteText;

        //Create the delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.classList.add('delete-button'); //delete-button style
        noteElement.appendChild(deleteButton);

        notesContainer.appendChild(noteElement);

        //Clear the text area after adding the note
        noteInput.value = "";

        deleteButton.addEventListener('click', function(){
            notesContainer.removeChild(noteElement); //Remove the note from the container
        });

        //Enable editing the note
        noteElement.addEventListener('click', function(){
            const newText = prompt("Edit your note", noteElement.textContent);
            if (newText !== null && newText.trim() !== ""){
                noteElement.innerHTML = ""; //Remove the text content
                noteElement.textContent = newText;
                noteElement.appendChild(deleteButton); //Add the delete button again (since the text content has changed)
            }


        });
    }
});