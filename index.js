const displayCount=document.getElementById("count");
const addButton=document.getElementById("btn");
const inputField=document.getElementById("inputs");
const taskDisplay=document.getElementById("task");
const taskBox=document.querySelector("#task");
const taskImage=document.querySelector(".emptyImage");
const taskList= document.getElementById("task-list");
const todoContainer=document.querySelector(".todos-container");
//progress bar
const progress=document.getElementById("progressBar");
const progressBar=document.getElementById("progress");
const progressNumber=document.getElementById("number");

//Function previews no task image when taskbar is empty
const toggleEmptyState=() =>{
    taskImage.style.display=taskList.children.length === 0 ? "block":"none";
   

}
const updateProgress = (checkCompletion = true )=>{
    const totalTasks=taskList.children.length;
    const completeTask=taskList.querySelectorAll(".checkboz:checked").length;
    console.log(completeTask);

    progressBar.style.width = totalTasks ? `${(completeTask / totalTasks) * 100}% ` :
    "0%";
    progressNumber.textContent = `${(completeTask )}/ ${(totalTasks )} `;

    if(checkCompletion && totalTasks > 0 && 
        completeTask === totalTasks){
            confettiCelebrate();
        }

};


function handleClick(checkCompletion = true )  {
  // Previews alert when task is not added
     if(!inputField.value){

        alert("Please add a task");
        
        return;
     }
      
     
    const li=document.createElement("li");
      
    //Creates a list element in the html for the added task i
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
             updateProgress();
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
         updateProgress();
     }); 
    
     taskList.appendChild(li);
     inputField.value="";
     updateProgress(checkCompletion);

     toggleEmptyState();   
    } 

//Add a task when add button is pressed and also when Enter key is pressed.
addButton.addEventListener("click",handleClick);
inputField.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        handleClick(e);
    }
});

// Confetti explosion for task completion
const confettiCelebrate = () => {
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
    });
};
