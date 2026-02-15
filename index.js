

const displayCount=document.getElementById("count");
const addButton=document.getElementById("btn");
const displayText=document.getElementById("displayText");
const span=document.getElementById("taskNo");
let count = Number(span.textContent);


function handleClick(){
 count ++;
 displayText.textContent=`Your current tasks ${count}`;

console.log(count);
}
addButton.addEventListener("click",handleClick);
