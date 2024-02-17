var addNew = document.getElementById('add_new_item');
var deleteButtons = document.getElementsByClassName('delete');

addNew.addEventListener('click', function(){
    var text = document.getElementById('cust_todo_text').value;
    var todoList = document.querySelector('.cust-todo-list ul');
    var listItem = document.createElement("li");
    var listItemText = document.createElement("h5");
    var listItemTextNode = document.createTextNode(text);
  

    var listItemDeleteButton = document.createElement("button");
    listItemDeleteButton.innerHTML = "Delete";
    listItemDeleteButton.classList.add("delete");
    listItemText.append(listItemTextNode);
    listItem.append(listItemText);
    listItem.append(listItemDeleteButton);
    todoList.append(listItem);

    listItemDeleteButton.addEventListener('click', function() {
        var li = this.parentNode;
        var ul = listItem.parentNode;
        ul.removeChild(listItem);
    });
});
for (var i = 0; i < deleteButtons.length; i++) {
    
}
console.log(deleteButtons);