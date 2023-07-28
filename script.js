const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {        //to display alert message on empty value in input box
        alert("Please write a Task first!");
    }
    else {
        let li = document.createElement("li");      //adding tasks with list tag
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");      //to create a cross icon at the end of task list
        span.innerHTML = "\u00d7";
        li.appendChild(span);       //to display cross icon
    }
    inputBox.value = "";
    saveData();     //to display saved data through local storage(calling function)
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();     //calling saved data 
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();     //calling saved data 
    }
}, false);

function saveData(){        //saving data in local storage so data don't get lost during refresh of web page
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){        //showing the saved data 
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();