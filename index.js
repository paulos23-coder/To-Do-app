const displayCount=document.getElementById("count");
const addButton=document.getElementById("btn");
const displayText=document.getElementById("displayText");
const span=document.getElementById("taskNo");
const inputField=document.getElementById("inputs");
const taskDisplay=document.getElementById("task");
let count = Number(span.textContent);
let addedTask="";



function handleClick(){
     count ++;

     displayText.textContent=`Your current tasks 0/${count}`;
    } 

addButton.addEventListener("click",handleClick);

addButton.addEventListener("click", function () {
    addedTask=inputField.value;
    taskDisplay.textContent=addedTask;
    inputField.value="";

});


