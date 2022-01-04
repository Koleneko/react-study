let tasks = [];

const handleClickRemove = (index) => {
  tasks.splice(index, 1);
  render();
};

const handleClickAdd = (event) => {
  event.preventDefault();
  let currInput = document.querySelector("input");
  tasks.push(currInput.value);
  currInput.value = "";
  render();
};

let input = document.querySelector("input");
let button = document.getElementById("add-btn");
button.onclick = handleClickAdd;

function render() {
  let todoContainer = document.querySelector("#todo");
  todoContainer.innerHTML = "";
  let toAddArray = [];
  tasks.forEach((task, index) => {
    let tempUl = document.createElement("li");
    let tempBtn = document.createElement("button");

    tempUl.innerText = task;
    tempBtn.innerText = "X";
    tempBtn.addEventListener("click", () => handleClickRemove(index));

    let temp = document.createElement("div");
    temp.classList.add("todo-item");

    temp.appendChild(tempUl);
    temp.appendChild(tempBtn);
    toAddArray.push(temp);
  });
  todoContainer.append(...toAddArray);
}
