let todoTitle=document.getElementById('todoInput');
let todoTextarea=document.getElementById('todoTextarea');
let addBtn=document.getElementById('add-btn');
let taskTitle=document.getElementById('taskTitle');
let taskDiv=document.getElementById('taskDiv');


addBtn.addEventListener('click',async (event)=>{
    let apicallforget= await fetch('http://localhost:3000/to-do-list/getAllTodolist',{
    headers: {'Content-Type': 'application/json',
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1M2RmMGU3NWE1OTMyZDE0NDYyMzI0OCIsInVzZXJuYW1lIjoiYyIsImVtYWlsIjoiY0BnbWFpbC5jb20iLCJpYXQiOjE2OTg4Mjk2NDEsImV4cCI6MTY5OTAwMjQ0MX0.UXrsl8GxBQ_hIa2PWE1kZieYQ_OzJYUmUD4GCEC36A8'}
});
    let getData=await apicallforget.json();
    console.log(getData);
    
let apicallforpost=await fetch('http://localhost:3000/to-do-list/createTodolist',{
    method:'POST',
    body:JSON.stringify({title:todoTitle.value,description:todoTextarea.value}),
    headers: {'Content-type': 'application/json; charset=UTF-8',
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1M2RmMGU3NWE1OTMyZDE0NDYyMzI0OCIsInVzZXJuYW1lIjoiYyIsImVtYWlsIjoiY0BnbWFpbC5jb20iLCJpYXQiOjE2OTg4Mjk2NDEsImV4cCI6MTY5OTAwMjQ0MX0.UXrsl8GxBQ_hIa2PWE1kZieYQ_OzJYUmUD4GCEC36A8'}
  });
 let dataRecieved=await apicallforpost.json();
     console.log(dataRecieved);

if(todoInput.value){
    let newPara=document.createElement('p');
    newPara.classList.add('newTask');
    newPara.innerHTML=`<p><span class="taskTitle" >${todoTitle.value}</span>
    <span class="taskEdit" >edit</span>
    <span class="taskDelete" >delete</span></p>

    <p class="taskDesc">${todoTextarea.value}</p>
    <hr>`;
    taskDiv.appendChild(newPara);
}
else{
    alert('enter todo task !!')
}
})