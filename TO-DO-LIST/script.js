"use strict";
const addBtn = document.querySelector(".add");
const taskBox = document.getElementById("taskbox");
const taskArea = document.querySelector(".hide");
const enterTask = document.getElementById("content");
const hideBox = document.querySelector(".hidebox");

addBtn.addEventListener("click", function () {
  if (enterTask.value !== "") {
    hideBox.classList.remove("hidebox");
    taskArea.classList.remove("hide");
    let task = document.createElement("li");
    task.innerHTML = enterTask.value;
    taskBox.appendChild(task);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    task.appendChild(span);
  }
  enterTask.value = "";
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    if (enterTask.value !== "") {
      e.preventDefault();
      hideBox.classList.remove("hidebox");
      taskArea.classList.remove("hide");
      let task = document.createElement("li");
      task.innerHTML = enterTask.value;
      taskBox.appendChild(task);
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      task.appendChild(span);
    }
    enterTask.value = "";
  }
});

const container = taskBox.addEventListener("click", function (event) {
  let target = event.target;

  if (target.tagName === "LI") {
    target.classList.toggle("checked");
  } else if (target.tagName === "SPAN") {
    target.parentNode.remove();
  }
  if (taskBox.children.length === 0) {
    hideBox.classList.add("hidebox");
    taskArea.classList.add("hide");
  }
});
