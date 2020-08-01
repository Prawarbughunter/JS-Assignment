function addItem(){
	var ul = document.getElementById("todo-list");
  var todo = document.getElementById("todo");
  var li = document.createElement("li");
  li.setAttribute('id',todo.value);
  li.appendChild(document.createTextNode(todo.value));
  ul.appendChild(li);
}

function removeItem(){
	var ul = document.getElementById("todo-list");
  var todo = document.getElementById("todo");
  var item = document.getElementById(todo.value);
  ul.removeChild(item);
}



