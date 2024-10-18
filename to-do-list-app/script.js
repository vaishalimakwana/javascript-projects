var input = document.getElementById("inputReceived");
var enterbtn = document.getElementById("enter");
var showitem = document.getElementById("showItem");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
  return input.value.length;
}
function listLength() {
  return item.value.length;
}
function createToDoList() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
  var closebtn = document.createElement("button");
  closebtn.appendChild(document.createTextNode("X"));
  li.appendChild(closebtn);
  closebtn.addEventListener("click", deleteItem);

  function deleteItem() {
    li.classList.add("delete");
  }
}
function addTodoOnClick() {
  if (inputLength() > 0) {
    //makes sure that an empty input field doesn't create a li
    createToDoList();
  } else {
    alert("Add your To-Do");
  }
}
function addItemOnEnter(event) {
  if (inputLength() > 0 && event.which === 13) {
    createToDoList();
  }
}
enterbtn.addEventListener("click", addTodoOnClick);
input.addEventListener("keypress", addItemOnEnter);
