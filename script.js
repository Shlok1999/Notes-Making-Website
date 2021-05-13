console.log("Welcome to 2nd notes app")
showNotes();
//If user adds a note, add it to the local storage
let addBtn = document.getElementById('addBtn')
addBtn.addEventListener('click', (e) => {
    // console.log("Notes added")
    //Text Area
    let addTxt = document.getElementById('addTxt');
    if(addTxt.value.length==0){
        alert("add something")
    }
    else{

    let notes = localStorage.getItem('notes');
    // console.log(notes)

    if (notes == null) {
        notesArray = [];
    }
    else {
        notesArray = JSON.parse(notes);
    }
    //Pushinf value of textarea into the notesArray
    notesArray.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesArray))
    //After note is added, the value of textarea should be blank
    addTxt.value = ""
    // console.log(notesArray)
    showNotes();

    }
    
    // let notes = localStorage.getItem('notes');
    // // console.log(notes)

    // if (notes == null) {
    //     notesArray = [];
    // }
    // else {
    //     notesArray = JSON.parse(notes);
    // }
    // //Pushinf value of textarea into the notesArray
    // notesArray.push(addTxt.value);
    // localStorage.setItem('notes', JSON.stringify(notesArray))
    // //After note is added, the value of textarea should be blank
    // addTxt.value = ""
    // // console.log(notesArray)
    // showNotes();
})


function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesArray = [];
    }
    else {
        notesArray = JSON.parse(notes);
    }

    let html = '';
    notesArray.forEach(function (element, index) {
        html += `
        <div class="mx-2 my-2 noteCard" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Node</button>
        </div>
    </div>
        
        `;


    });
    let notesElm = document.getElementById('notes')
    if (notesArray.length != 0) {
        notesElm.innerHTML = html;

    }
    else{
        notesElm.innerHTML=`Nothing to show please write something`
    }


}
function deleteNote(index){
    localStorage.removeItem(index);
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesArray = [];
    }
    else {
        notesArray = JSON.parse(notes);
    }

    notesArray.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesArray))
    showNotes();

}
search=document.getElementById("searchTxt");
search.addEventListener('input', ()=>{
    let inputVal=search.value
    // console.log("Input event fired", inputVal);
    let noteCards=document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display="block";
        }
        else{
            element.style.display="none";

        }
        // console.log(cardTxt)
    })
    
})
