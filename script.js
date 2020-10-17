document
  .getElementById("addTaskButton")
  .addEventListener("click", PostButton);

function PostButton() {
  var taskInput = document.getElementById("getData").value;
  document.getElementById("getData").value = "";
  const inputData = { description: taskInput, done: false };

  postData(inputData);
  setTimeout("window.location.reload();", 500);
}



const getTasks = async () => {
  const tasks = await getData();
  const ul = document.getElementById("todoList");

  const listItems = tasks.map((task) => {
    const li = document.createElement("li");
    li.innerText = task.description;
    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.className = "fa fa-trash-alt";
    deleteTaskButton.addEventListener("click", deleteTask);
    li.appendChild(deleteTaskButton);
    return li;
    
    function deleteTask() {
     deleteData(task.id);
      setTimeout("window.location.reload();", 500);
    }
  });

  listItems.forEach((task) => {
    ul.appendChild(task);
  });
};
getTasks();
