var form = document.getElementsByClassName("submit")[0];
var counterKey = localStorage.length;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var newTask = document.getElementById("nameTask");
  createTask(newTask.value);
  newTask.value = "";
});

window.addEventListener("load", function () {
  var keys = Object.keys(localStorage);
  var arrayKeys = removeItemOnce(keys, "randid");
  arrayKeys.sort();
  for (var i = 0; i < arrayKeys.length; i++) {
    generateTaskStored(arrayKeys[i]);
  }
});

function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

function generateTaskStored(key) {
  var box = document.createElement("div");
  box.className = "box";
  var title = document.createElement("h3");
  title.innerText = localStorage.getItem(key);
  box.appendChild(title);
  box.id = key;
  box.addEventListener("mouseover", function () {
    if (!box.classList.contains("checked")) {
      box.className += " checked";
      box.addEventListener("click", function () {
        localStorage.removeItem(box.id);
        box.parentElement.removeChild(box);
      });
    }
  });
  document.getElementsByClassName("tasks")[0].appendChild(box);
}

function createTask(task) {
  var box = document.createElement("div");
  box.className = "box";
  var title = document.createElement("h3");
  title.innerText = task;
  box.appendChild(title);
  box.id = counterKey;
  generateStorage(task);
  box.addEventListener("mouseover", function () {
    if (!box.classList.contains("checked")) {
      box.className += " checked";
      box.addEventListener("click", function () {
        localStorage.removeItem(box.id);
        box.parentElement.removeChild(box);
      });
    }
  });
  document.getElementsByClassName("tasks")[0].appendChild(box);
}

function generateStorage(title) {
  var key = counterKey;
  localStorage.setItem(key, "" + title);
  counterKey++;
}
