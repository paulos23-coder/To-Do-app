const displayCount=document.getElementById("count");
const addButton=document.getElementById("btn");
const displayText=document.getElementById("displayText");
const span=document.getElementById("taskNo");
const inputField=document.getElementById("inputs");
const taskDisplay=document.getElementById("task");

const taskBox=document.querySelector("#task");
const taskImage=document.querySelector(".emptyImage");
const taskList= document.getElementById("task-list");
let count = Number(span.textContent);


const toggleEmptyState=() =>{
    taskImage.style.display=taskList.children.length === 0 ? "display":"none";
}

function handleClick(){
     

     if(!inputField.value){
        count=0;
        alert("Please add a task");
        
        return;
     }
     
     count ++;
    const li=document.createElement("li");
      
     li.innerHTML =`
        <input type="checkbox" class="checkbox">
        <span> ${inputField.value}</span> `;


     li.textContent=inputField.value;
     taskList.appendChild(li);
     inputField.value="";

     displayText.textContent=`Your current tasks 0/${count}`;
     toggleEmptyState();
    } 


addButton.addEventListener("click",handleClick);
inputField.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        handleClick(e);
    }
});
