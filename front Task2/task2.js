var addTaskInput=document.querySelector("#addtaskinput");
var addTaskBtn=document.querySelector("#addtaskbtn");
var deleteAll=document.querySelector('#deleteallbtn')
var dateInput=document.querySelector('.taskDate');
var timeInput=document.querySelector('.taskTime');
var timeDisplay=0;
var timeRecord=document.querySelector(".timeRecord"); 
addTaskBtn.addEventListener("click",function(){

    var dateInput=document.querySelector('.taskDate');
 dateSort=dateInput.value;
var timeInput=document.querySelector('.taskTime')
    // data is stored in local storage
    inputValue=addTaskInput.value;
    if(inputValue==0 || dateInput.value==0 || timeInput.value==0){
        alert("Enter the values");
    }

   else{

       let webTask =localStorage.getItem("localTask");
       if(webTask==null){
           taskObj=[];
           
        }
        else{
            taskObj=JSON.parse(webTask);
        }
        taskObj.push(inputValue);
        localStorage.setItem("localTask",JSON.stringify(taskObj));
        showTask();
    } 
 addTaskInput.value='';

})

function showTask(){

    let webTask =localStorage.getItem("localTask");
    if(webTask==null){
        taskObj=[];
    }
    else{
        taskObj=JSON.parse(webTask);
    }
    var html='';
var table=document.querySelector("tbody");

// const sortedTasks = taskObj.sort((a, b) => {
//     if (a.dateInput < b.dateInput) {
//         return 1;
//     }
//     else {
//         return -1;

// }})
taskObj.forEach((item,index)=>{
    
html+= `<tr class="listItem text-center">
        <th>${index+1}</th>
        <td>${item}</td>
        <td>${dateSort}</td>
        <td>${timeInput.value}</td>
        <td class="text-center">
        <button onclick="completedButton(${index})" class="btn btn-md btn-success "><i class="fas fa-check"></i></button>
        
        <button onclick="deleteButton(${index})" class=" btn btn-md btn-danger"><i class="fas fa-trash-alt"></i></button>
        
        <button onclick="editButton(${index})" class='btn btn-md btn-light'><i class="fas fa-user-edit"></i></button>
        </td>
        </tr>            
`
})
 table.innerHTML= html;
}

// edit button
function editButton(index){
    let saveIndex=document.querySelector("#saveindex");
    let addTaskBtn=document.querySelector("#addtaskbtn");
    let saveTaskBtn=document.querySelector("#savetaskbtn");
    saveIndex.value=index;
    let webTask =localStorage.getItem("localTask");
    let taskObj=JSON.parse(webTask);
    addTaskInput.value=taskObj[index];
    addTaskBtn.style.display='none';
    saveTaskBtn.style.display='inline';
}

// to save the edited data
let saveTaskBtn=document.querySelector("#savetaskbtn");
saveTaskBtn.addEventListener("click",function(){
    let addTaskBtn=document.querySelector("#addtaskbtn");
  let webTask =localStorage.getItem("localTask");
  let taskObj=JSON.parse(webTask);
  let saveIndex=document.querySelector("#saveindex").value;
  taskObj[saveIndex]=addTaskInput.value;
  saveTaskBtn.style.display='none';
  addTaskBtn.style.display='inline'; 
  localStorage.setItem("localTask",JSON.stringify(taskObj));
showTask();
addTaskInput.value='';

})  
// delete the element
function deleteButton(index){
    let webTask =localStorage.getItem("localTask");
    let taskObj=JSON.parse(webTask);
    // to delete a item using its index
    taskObj.splice(index,1);
  localStorage.setItem("localTask",JSON.stringify(taskObj));
  showTask();


}

// delete all button
deleteAll.addEventListener("click",function(){

    let webTask =localStorage.getItem("localTask");
    let taskObj=JSON.parse(webTask);
    if(webTask==null){
        taskObj=[];
     }
     else{
         taskObj=JSON.parse(webTask);
        taskObj=[];
     }
 localStorage.setItem("localTask",JSON.stringify(taskObj));
  showTask();
let saveTaskBtn=document.querySelector("#savetaskbtn");
let addTaskBtn=document.querySelector("#addtaskbtn");

  addTaskBtn.style.display='inline';
  saveTaskBtn.style.display='none';

    })




// completed button
function completedButton(index){
    // total time consumed
    var t=0;
    inputTime=Number(prompt("time required in mins:"));
    timeDisplay+=inputTime;
    var final=t+timeDisplay;
    var dis=$(".timeRecord").text(final)

    // deleting the completed data
    let webTask =localStorage.getItem("localTask");
    let taskObj=JSON.parse(webTask);
    taskObj.splice(index,1);
  localStorage.setItem("localTask",JSON.stringify(taskObj));
    showTask();

}

// local storage is cleared when refreshed
window.onbeforeunload = function (e) {
    localStorage.clear();
};