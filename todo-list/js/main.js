import ToDoList from "./todolist";
import ToDoItem from "./todoitem";

const toDoList = new ToDoList();

// Launch App
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  // Add Listeners

  // Procedural
  // Load List Object
  refreshThePage();
};

const refreshThePage = () => {
  clearListDisplay();
  //   renderList();
  // clearItemEntryField();
  // setFocusOnItemEntry()
};

const clearListDisplay = () => {
  const parentElemt = document.getElementById("listItems");
  deleteContents(parentElement);
};

const deleteContents = (parentElement) => {
  let child = parentElement.lastElementChild;
  while (child) {
    parentElement.removeChild(child);
    child = parentElement.lastElementChild;
  }
};
