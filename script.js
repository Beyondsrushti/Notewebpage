const NotewebpageContainer = document.querySelector(".Notewebpage-container"); 
const createBtn = document.querySelector(".btn");
let Notewebpage = document.querySelectorAll(".input-box");

function showNotes(){
    NotewebpageContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes", NotewebpageContainer,innerHTML);
}

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "delete.png";
    NotewebpageContainer.appendChild(inputBox).appendChild(img);
})

NotewebpageContainer.addEventListener("click", function(e){
    if(e.target.tagName == "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName =="P"){
        Notewebpage = document.querySelectorAll(".input-box");
        Notewebpage.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if (event.key == "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
