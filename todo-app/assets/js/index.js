var inputBox = document.getElementById("input-box");
var listContainer = document.getElementById("list-container");
var addButton = document.getElementById("add");
var editItem = null;

function addOrUpdateTask() {
    let inputValue = inputBox.value.trim();
    if (!inputValue) {
        alert("Kuch likh to sai pehlay!!!");
        return;
    }

    if (editItem) {
        editItem.firstChild.textContent = inputValue;
        editItem = null;
        addButton.textContent = "Add";
    } else {
        let li = document.createElement("li");
        li.innerHTML = `${inputValue} <span class="delete">\u00d7</span> <span class="btn">edit</span>`;
        listContainer.appendChild(li);
    }

    inputBox.value = "";
    saveData();
}

addButton.addEventListener("click", addOrUpdateTask);

listContainer.addEventListener("click", function (e) {
    let target = e.target;

    if (target.classList.contains("delete")) {
        target.parentElement.remove();
    } else if (target.classList.contains("btn")) {
        editItem = target.parentElement;
        inputBox.value = editItem.firstChild.textContent.trim();
        addButton.textContent = "Update";
    } else if (target.tagName === "LI") {
        target.classList.toggle("checked");
    }

    saveData();
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") addOrUpdateTask();
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}
showTask();
