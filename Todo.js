var todoList = [];
var createBtn = document.getElementById("create");
var closeBtn = document.getElementById("close-modal");

/* show the modal page */
function revealModal() {
    var modal = document.getElementById("modal");
    modal.classList.add("visible");

}
/* removing modal page */
function closeModal() {
    var modal = document.getElementById("modal");
    modal.classList.remove("visible");

};

var Btn = document.getElementById("addSomething");

function add() {
    /* assessing the html tags */
    var firstInput = document.getElementById("title-text");
    var textArea = document.getElementById("inputText");
    var secondInput = document.getElementById("enter-text");
    var tbody = document.getElementById("tbody");
    /* creating todo objects and pushing it to array */
    var todoItem = {
            firstInput: firstInput.value,
            textArea: textArea.value,
            secondInput: secondInput.value,

        }
        /* add the todoItem to the array */
    todoList.push(todoItem);
    tbody.innerHTML = "";
    for (var i = 0; i < todoList.length; i++) {
        /* looping through the array and create new html elements for the data */
        var tr = document.createElement("tr");
        var tdFirstInput = document.createElement("td");
        var tdTextarea = document.createElement("td");
        var tdSecondInput = document.createElement("td");

        /* set their textContent to the array[i] */
        tdFirstInput.textContent = todoList[i].firstInput;
        tdTextarea.textContent = todoList[i].textArea;
        tdSecondInput.textContent = todoList[i].secondInput;
        /* append the elements to the Tr */
        tr.appendChild(tdFirstInput);
        tr.appendChild(tdTextarea);
        tr.appendChild(tdSecondInput);
        /* append the Tr to the Tbody */
        tbody.appendChild(tr);

    }
    /* after entering data you erase */
    firstInput.value = "";
    textArea.value = "";
    secondInput.value = "";
    closeModal()
}

createBtn.addEventListener("click", revealModal);
closeBtn.addEventListener("click", closeModal);
Btn.addEventListener("click", add);