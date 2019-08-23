
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");
let item = document.getElementsByTagName("li");
let clickButton = document.getElementById("btn");

function createNewList()  {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value)); 
    ul.appendChild(li);
    input.value= "";
    
function crossOut() {
		li.classList.toggle("done");
	}
    li.addEventListener("click",crossOut); 

    let deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", deleteNewLists);

function deleteNewLists()  {
li.classList.add("delete"); 
}
}

function inputLength()  {
    return input.value.length;
}

function addNewListAfterClick()   {
    if (inputLength() > 0)  {
        createNewList();    
    }
}

function addNewListAfterKeypress(event)  {
  if (inputLength > 0 && event.keyCode === 13)   {
       createNewList(); 
  }   
}

function listLength()   {
    return item.length; 
}

clickButton.addEventListener("click", addNewListAfterClick);
input.addEventListener("keypress", addNewListAfterKeypress);
