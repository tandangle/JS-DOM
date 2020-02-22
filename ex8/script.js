/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/


var button = document.getElementById("add-button");


button.addEventListener('click', function(){
    if (description.value != "" && description.value != " "){
        var listItem = document.createElement("li");
        var userInput = document.getElementById("description").value + " ";
        // Bonus part - checkoff each item
        listItem.addEventListener("click", function(){
            if (listItem.style.textDecoration != "line-through"){
            listItem.style.textDecoration = "line-through";}
            else {
                listItem.style.textDecoration = ""
            }
        });
        // Add a button to elete the list item
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.classList.add("delete-button");
        listItem.innerHTML = userInput;
        deleteButton.addEventListener("click", function(){
            listItem.remove()
        });
        listItem.appendChild(deleteButton);
        document.getElementById("todo-list").appendChild(listItem);}
        else {
            alert("Please enter a task!")
        }
})


// Allows the text field to be submitted on enter press

document.getElementById("description").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        button.click();
    }
});