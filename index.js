const displayCount=document.getElementById("count");
const addButton=document.getElementById("btn");
const displayText=document.getElementById("displayText");
const span=document.getElementById("taskNo");
const inputField=document.getElementById("inputs");
const taskDisplay=document.getElementById("task");

const taskBox=document.querySelector("#task");
const taskImage=document.querySelector(".emptyImage");
const taskList= document.getElementById("task-list");
const todoContainer=document.querySelector(".todos-container");
let count = Number(span.textContent);
count =0;

//Function previews no task image when taskbar is empty
const toggleEmptyState=() =>{
    taskImage.style.display=taskList.children.length === 0 ? "block":"none";
   

}


function handleClick(a)  {
     

     if(!inputField.value){
        count=0;
        alert("Please add a task");
        
        return;
     }
      
     count ++;
    const li=document.createElement("li");
      
     li.innerHTML =`
        <input type="checkbox" class="checkboz"/>
        <span> ${inputField.value}</span> 
        <div class="task-button">
            <button class="edit-btn"><i
            class="fa-solid fa-pen"></i></button>
            <button class="delete-btn"><i
            class="fa-solid fa-trash"></i></button>
        </div>   
        `;
        const checkbox=li.querySelector(".checkboz");
        const editBtn=li.querySelector(".edit-btn");
        const deleteBtn=li.querySelector(".delete-btn");
       
        //Checks if a task is completed and disable edit button
        checkbox.addEventListener("change", ()=>{
            const isChecked=checkbox.checked;
            li .classList.toggle("completed", isChecked);
            editBtn.disabled=isChecked;
            editBtn.style.opacity=isChecked ? "0.5" : "1";
            editBtn.style.pointerEvents= isChecked ? "none" : "auto";
        });
          
        //Edit task button
        editBtn.addEventListener("click", () => {
        if(!checkbox.checked){
            inputField.value=li.querySelector("span").textContent;
            li.remove();
            toggleEmptyState();
        }   

      });
        
        //Delete task button
        deleteBtn.addEventListener("click", () =>{
        li.remove();
        toggleEmptyState();
       

     }); 
    
     

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

